const express = require('express');
const app = express();

// this enables printing & parsing of req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json())

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

