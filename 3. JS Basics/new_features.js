// Default params
function rollDie1(numSides) {
    if (numSides===undefined){
        numSides = 6;
    }
    return Math.floor(Math.random()*numSides) + 1;
}
function rollDie2(numSides=6) { // defaults to 6
    return Math.floor(Math.random()*numSides) + 1;
}


// Spread - spread an array (1 arg) to multiple args
nums = [1,2,3]
Math.max(1,2,3) // this works
Math.max(nums) // this doesn't work
Math.max(...nums) // this makes it work!
console.log('hello');
console.log(...'hello')
// Spread with array
const odds = [1,3,5,7];
const evens = [0,2,4,6];
const all = [...odds, ...evens, 8, 9];
// Spread with objects
const feline = {legs: 4, family: 'Felidae'};
const canine = {isFurry: true, family: 'Caninae'};
const both = {...feline, ...canine}; // family will be set to 'Felidae'
const arr2obj = {...[1,2,3,4,5], ..."hello"};


// Rest params
function sum1(){
    console.log(arguments);
    // auto prints any amount of arguments u put in
    // but 'arguments' isn't an array, so we need to convert it into one
}
function sum2(...nums){
    // only then can we use the reduce method
    return nums.reduce((total, el) => total+el);
}
function results(gold, silver, ...everyoneElse){
    ;
}


// Destructuring - single out variables from arrays/objects
// for arrays
const scores = [929, 822, 790, 772, 600, 30]
const [gold, silver, bronze] = scores;
const [gold2, silver2, bronze2, ...everyoneElse] = scores;
// for objects
const user = {
    email: 'harvey@gmail.com',
    password: 'qwerty',
    firstName: 'Harvey',
    lastName: 'Tits',
    born: 1930
}
const {email, firstName, deathYear1 = 'N/A'} = user; // if user not dead, set deathYear to "N/A" by default
const {born: birthYear, died: deathYear2 = 'N/A'} = user;
// for params
user.map(({firstName, lastName, born}) => {
    return `${firstName} ${lastName} was born on ${born}.`;
})