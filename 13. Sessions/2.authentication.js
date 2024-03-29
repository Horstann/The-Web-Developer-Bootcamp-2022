/*
npm i bcrypt
*/
const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./models/user.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));
app.use(session({secret: 'notagoodsecret'}));

mongoose.connect('mongodb://localhost:27017/authDemo', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MONGO CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('OH NO MONGO CONNECTION ERROR!');
        console.log(err);
    })

// Bcrypt Demo
/*
const hashPassword = async(pw) => {
    const salt = await bcrypt.genSalt(12); // salt rounds
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}
hashPassword('monkey');

const login = async(pw, hashedPw) => {
    const res = await bcrypt.compare(pw, hashedPw);
    if (res){
        console.log('LOGGGED IN! SUCCESSFUL MATCH!');
    }else{
        console.log('INCORRECT MATCH!');
    }
}
login('monkey', '$2b$12$NdvvPsDBw9WXqlhDAXGoLu97FKkF2CJNBU6gJeeSIFytFeDeTMoiy');
*/

const requireLogin = (req, res, next) => {
    if (!req.session.user_id){
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE');
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.post('/register', async(req, res) => {
    const {password, username} = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    res.redirect('/');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.post('/login', async(req, res) => {
    const {username, password} = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser){
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    }else{
        res.redirect('/login');
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    //req.session.destroy();
    res.redirect('/login');
})

// secret routes
app.get('/secret', requireLogin, (req, res) => {
    res.render('secret.ejs');
})
app.get('/topsecret', requireLogin, (req, res) => {
    res.send("TOP SECRET!");
})

app.listen(3000, () => {
    console.log('Serving your app!');
})
