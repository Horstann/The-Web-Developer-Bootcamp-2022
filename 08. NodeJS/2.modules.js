const math = require('./modules/math')
// '.' refers to current directory
console.log(math);

// now we can use math.js' functions
console.log(math.PI);
console.log(math.square(2));


// require an entire directory at once
const cats = require('./Cats');
console.log(cats);
