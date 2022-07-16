// define
function talk(){
    console.log("Hey love u");
}
function greet(person, n){
    if (typeof person !== 'string' || typeof n !== 'number'){
        return false;
    }
    else {
        let res = '';
        for (let i=0; i<n; i++){
            res += `Hello, ${person}! `;
        }
        return res;
    }
}

// call
talk()
console.log(greet("Romano", 5))



// Lexical Scope
function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther'];
    function cryForHelp(){
        for (let hero of heroes){ // cryForHelp is able to access the array heroes
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}!`);
        }
    }
    cryForHelp();
}
bankRobbery();


// Higher Order Functions - functions that can accept/return other funtions
function callTwice(func){ // call an argument func twice
    func();
    func();
}
callTwice(talk)


// Returning functions
function makeMysteryFunc(){
    const rand = Math.random();
    if (rand > 0.5){
        return function(){
            console.log("CONGRATS I'M A GOOD FUNCTION! YOU'VE WON A MILLION DOLLARS!!!");
        }
    } else{
        return function(){
            alert("OHH NOOO I'M A BAD FUNCTION! YOU'VE BEEN INFECTED BY A COMPUTER VIRUS!!!");
        }
    }
}
mysteryFunc = makeMysteryFunc();


// Methods - functions that are properties of an object (in this case, myMath)
const myMath = {
    PI: 3.14159,
    square(num){
        return num*num;
    },
    cube(num){
        return num**3;
    }
}
console.log(myMath.PI, myMath.square(3))

// 'this' keyword
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log(`MEOW MEOW I'm in ${this.color} color!`);
    }
}
cat.meow()


// Try/Catch
try {
    hello.toUpperCase();
} catch {
    console.log("Ehh 'hello' is not defined!")
}
// you could even display the error
try {
    hello.toUpperCase();
} catch(e) {
    console.log(e);
}



// Array Methods
// a) forEach
const nums = [9,8,7,6,5,4,3,2,1];
nums.forEach(function(n){
    console.log(n*n);
})
function print(element){
    console.log(element);
}
nums.forEach(print);
// b) map
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps1 = texts.map(function(t){
    return t.toUpperCase();
})
// c) Arrow Functions
const sum = (x,y) => {
    return x+y;
}
const rollDie1 = () => {
    return Math.floor(Math.random()*6) + 1;
}
const rollDie2 = () => ( // implicit return - but must only have 1 line; 1 value
    Math.floor(Math.random()*6) + 1
)
const caps2 = texts.map(t => ( // map + arrow func
    t.toUpperCase()
))
// d) filter
const odds = nums.filter(n => {
    return n%2 === 1;
})
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 19996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]
const goodMovies = movies.filter(movie => movie.score > 80);
// e) Every
bool1 = nums.some(num => num < 5) // is there at least 1 value < 5?
bool2 = nums.every(num => num < 5) // are all values < 5?
// f) Reduce - reduces an array to a single value
[3,5,7,9,11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    // accumulator - reduced final value
    // currentValue - incremental value
    // here, total of all values is returned
    // can be used to find max/min value of array too!
})




// wait functions
setTimeout(() => {
    console.log("HELLO!!!")
}, 3000) // wait 3sec b4 saying "HELLO!!!"
setInterval(() => {
    console.log(Math.random())
}, 2000) // for each 2sec, run Math.random()
// this can be stopped by typing "clearInterval(id)"

