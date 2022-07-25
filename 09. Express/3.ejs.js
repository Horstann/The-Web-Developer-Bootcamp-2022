const express = require("express");
const app = express()

app.set('view engine', 'ejs');

// best practice
const path = require('path');
app.set('views', path.join(__dirname, '/views'));

// some json data to play with
const redditData = require('./data.json');

// allow HTML files access to files (eg. CSS) in 'public' folder without having to reference path/directory
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.render('home.ejs'); // connect to EJS file
})
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random()*100) + 1
    res.render('random.ejs', {num}); // now our EJS file has access to this 'num' avriable
})
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data);
    //res.render('subreddit.ejs', {subreddit});
    if (data){
        res.render('subreddit.ejs', {...data});
    } else{
        res.render('notfound.ejs', {subreddit});
    }
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats.ejs', {cats});
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})