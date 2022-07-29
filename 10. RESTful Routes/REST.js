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
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

// this enables printing & parsing of req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


var comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Pls delete your account Todddd'
    },
    {
        id: uuid(),
        username: 'onlysayswoofwoof',
        comment: 'woof woof woof'
    }
]


app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', {comments});
})
// CREATE
app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');
})
app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({id: uuid(), username, comment});
    res.redirect('/comments');
})
// READ
app.get('/comments/:id', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment});
})
// UPDATE
app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment});
})
app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
})
// DESTROY
app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})





// POST vs GET example
/*
app.get('/tacos', (req, res) => {
    //console.log(req.body);
    res.send('GET /tacos response');
})
app.post('/tacos', (req, res) => {
    //console.log(req.body);
    const {meat, qty} = req.body;
    res.send(`OK here are your ${qty} ${meat} tacos!`);
})
*/

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})