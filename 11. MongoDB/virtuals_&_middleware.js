const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp') //{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('OH NO ERROR!');
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})


// Virtuals help us add properties to schemas - eg. create new stuff (fullname) out of existing fields (firstname + lastname)
personSchema.virtual('fullName').get(function(){ // this is a getter
    return `${this.first} ${this.last}`
}) // so this new property 'fullName' exists in JS & mongoose, but not in the actual database
/*
tammy.first
tammy.last
tammy.fullName
*/

const Person = mongoose.model('Person', personSchema);

// MIDDLEWARE
// .pre - does smtg b4 a specified method is executed
// .pro - does smtg after a specified method is executed
personSchema.pre('save', async function(){
    this.first = 'YO';
    this.last = 'MAMA'; // hehe 
    console.log('ABOUT TO SAVE!');
})
personSchema.post('save', async function(){
    console.log('JUST SAVED!');
})



