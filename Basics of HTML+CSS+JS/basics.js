/*
JS only has 1 datatype for numbers, and also includes NaN
0/0 = NaN
NaN + 1 = NaN
typeof NaN = "number"
*/

// Variable Assignment
var year = 1985; // old method
let year = 1985; // new method
year = 2002;
year += 1;
year++;

// Constants
const N = 10;

// Booleans
let sisLoggedIn = true;

// Strings
let str = "hey";
str[0];
str.length; // no. of characters
"lmao".length;
str2 = 'lol' + "lol"; // concatenation
// can't update 1 char at a time, only the whole string
str3 = 3 + str2; // this converts number 3 to string "3"

// String methods
str3 = str3.toUpperCase();
str4 = "   HEY YOU    ";
str4 = str4.trim(); // removes whitspaces on the sides only

// String methods with arguments
let tvShow = 'dogcatdog';
tvShow.indexOf('cat'); // 3
tvShow.indexOf('dog'); // 0
tvShow.indexOf('2'); // -1 (Not Found)
animal = tvShow.slice(3); // extracts "catdog"
animal = tvShow.slice(3, 6); // extracts "cat"
animal = tvShow.replace("dog", "owl"); // replaces 1st "dog" with "owl"
lol = "lol".repeat(3); // returns "lollollol"

// You can change variable types!
let a = 100;
a = "HEY";
a = false;

// Template literals
`I have ${3 + year} ${animal}s, costing $${year.toUpperCase()} each.`;

// Null vs Undefined
"hello"[99]; //undefined
let user1 = null; // means value is explicitly nothing

// Match object
Math.PI
Math.round(4.9)
Math.floor(5.99999)
Math.ceil(3.00001)
Math.sin(5)
Math.random() // produces only decimals < 1
Math.ceil(Math.random() * 10)
Math.abs(-20)
Math.pow(2,5) // same as 2**5

/*
Comparison Operators
== != > >= && || !
*/
// uses Unicode to compare chars
'a' < 'b';
'A' < 'B';
null == undefined; //returns true
1 == true; //retuns true
1 === true; //returns false
1 == '1'; //returns true
1 === '1'; //returns false
// === and !== cares about type, == and != doesn't

// The Console
console.log(1+4, "hi", true);
console.warn("UH OH");
console.error("You got an error!");
// Alerts - appear on browser
alert("HI!");
prompt("Please enter a number.");
answer = prompt("Please enter a number.");

// Convert string to number
answer = parseInt(answer);

// Logic Statements
if (answer === 3){
    console.log("OMG YOU ENTERED 3!!!");
}
else if (answer > 3);
else;

// Falsy values
false
0
"" //empty string
null 
undefined
NaN
// Truthy values - everything else

// Switch Statement
const day = 2;
switch (day){
    case 1:
        console.log("Mon");
        break;
    case 2:
        console.log("Tue");
        break;
    case 3:
        console.log("Wed");
        break;
    default:
        console.log(`${day}`);
        break;
}

// Arrays
let arr = ['Hey', 89, false, null, '100'];
arr.length;
arr[1] = 10;
arr.push(null);
arr.pop(); // removes at last index
let pop = arr.pop();
arr.push(null); // add to last index
arr.shift(); // removes at 1st index
arr.unshift('100') // adds to 1st index\
