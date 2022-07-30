// Install Mongoose - an npm package
/*
npm init
npm i mongoose
*/

// To run the below
/*
Open 'mongod' in windows powershell & run the below in terminal
- node
- .load mongoose.js
*/

const mongoose = require('mongoose');
// access the 'movieApp' database. If doesn't exist, it creates one
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('OH NO ERROR!');
        console.log(err);
    })

// Construct schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
// this auto-creates a collection called 'movies' & a model called 'Movie'
const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.6, rating: 'R'})
// need to call 'amadeus.save()' only then constant is saved to database
amadeus.save()

Movie.insertMany([
    {title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
    {title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
    {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
    {title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
    {title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
])
    .then(data => {
        console.log("IT WORKED");
        console.log(data);
    })
// don't need to call .save() for this

// the below can be typed in powershell 
/*
1. READ
Movie.find({}).then(data => console.log(data))
Movie.find({rating: 'PG-13'}).then(data => console.log(data))
Movie.find({year: {$lte: 2000}}).then(data => console.log(data))
Movie.findOne...
Movie.find({_id: '62e22e12b617fd96e697e4d4'})...
Movie.findById('62e22e12b617fd96e697e4d4').then()...
Movie.find({title: {$in: ['Amadeus', 'Stand By Me']}})

2. UPDATE
Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res))
// res returns a promise, not the updated object
Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}).then(res => console.log(res))
Movie.findOneAndUpdate... // this returns the non-updated object

3. DESTROY
Movie.remove({title: 'Amelie'}).then(msg => console.log(msg))
Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))
Movie.findOneAndDelete... // this also returns non-updated object

*/


