for (let i=0; i<5; i++){
    console.log("HELLO FROM NODE!!!");
}

// process
console.log(process.argv)
// 1. node executable path
// 2. file path 
// 3. other arguments passed after "node node.js"
// eg. node node.js puppy christmas
const args = process.argv.slice(2)
for (let arg of args){
    console.log(`Hi there, ${arg}!`);
}


// File System (fs)
const fs = require('fs');
// A) Create directories
// - async version
fs.mkdir('modules', {recurisive: true}, (err) => {
    if (err) throw err;
})
// - sync version
fs.mkdirSync('Cats');
// B) Create files
try{
    fs.writeFileSync('Cats/index.html');
} catch(e){
    console.log(e);
}



