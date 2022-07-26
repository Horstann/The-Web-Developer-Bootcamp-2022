// REST = Representational State Transfer - create data that can be CRUDed
// CRUD = Created, Read, Updated, Destroyed

/*
GET /comments - list all comments
POST /comments - create a new comment
GET /comments/:id - get comment of that ID
PATCH /comments/:id - update comment of that ID
DELETE /comments/:id - destroy comment of that ID
*/


const express = require('express');
const app = express();
const path = require('path');

// this enables printing & parsing of req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Pls delete your account Todddd'
    },
    {
        username: 'onlysayswoofwoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', {comments});
})
app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');
})
app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment});
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    //console.log(req.body);
    res.send('GET /tacos response');
})
app.post('/tacos', (req, res) => {
    //console.log(req.body);
    const {meat, qty} = req.body;
    res.send(`OK here are your ${qty} ${meat} tacos!`);
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})

