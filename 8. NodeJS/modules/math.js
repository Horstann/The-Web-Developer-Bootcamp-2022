module.exports = {
    add: (x,y) => x+y,
    PI: 3.14159,
    square: x => x*x
}

// Alternatives:
/*s
const add = (x,y) => x+y;
const PI = 3.14159;
const square = x => x*x;

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
*/

/*
const math = {
    add: add,
    PI: PI,
    square: square
}
module.exports = math;
*/

/*
module.exports.add = (x,y) => x+y;
module.exports.PI = 3.14159;
module.exports.square = x => x*x;
*/

// can also use the short-cut 'exports' 
/*
exports.add = add;
exports.PI = PI;
exports.square = square;
*/