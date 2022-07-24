// to install any NPM package, run this in node:
// npm install <package_name>

const colors = require("colors"); // prints colorful text in console
const jokes = require("give-me-a-joke");
console.dir(jokes); // shows you different methods for this package

jokes.getRandomDadJoke(function (joke){
    console.log(joke.rainbow);
})


// Local vs Global installations
/*
Doing 'npm install ...' - installs package locally
- only installs package in existing directory, not on whole computer
To install globally, do
'npm install -g ...'
And to use globally installed packages in a directory, type this in console
'npm link ...'
*/
