// Install Express
/*
1. npm init -y -> creates a package.json
2. npm i express -> installs express
*/

const express = require("express");
// execute express
const app = express();
// print this new app object
console.dir(app);

// We have to comment all the below, cuz each HTTP request can only get 1 response - 1 res.send() 
/*
app.use((req, res) => { // request, response object
    // this code is run anytime we get any request
    console.log("WE GOT A NEW REQUEST!");
    console.dir(req);
    res.send("<h1>This is my webpage!</h1> RESPONSE: WE GOT YOUR REQUEST!"); // sends back this response to user
})
*/

app.listen(3000, () => {
    // this code is run once app starts listening
    console.log("APP IS LISTENING ON PORT 3000");
})

// Adding routes
app.get('/', (req, res) => {
    res.send('<h1>This is the homepage!</h1>');
})
app.get('/r/:subreddit', (req, res) => { // anything that matches this pattern
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
})
app.get('/r/:subreddit/:postID', (req, res) => { // anything that matches this pattern
    const {subreddit, postID} = req.params;
    res.send(`<h1>Viewing Post ID: ${postID} on the ${subreddit} subreddit!</h1>`);
})
app.post('/cats', (req, res) => {
    res.send('This is a post request, different from a get request!');
})
app.get('/cats', (req, res) => {
    res.send('MEOW!!');
})
app.get('/dogs', (req, res) => {
    res.send('WOOF!!');
})
// every other route not listed here
// but have to be after all app.get()s in code
app.get('*', (req, res) => {
    res.send('Idk that route!');
})



// Open app
/*
1. in terminal, type 'node <filename>'
2. google 'localhost:3000', 3000 being port no.
*/



