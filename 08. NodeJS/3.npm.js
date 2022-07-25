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


// Keeping track of packages & their versions
/*
1. Go to terminal & navigate to directory
2. 'npm init' -> creates package.json
3. do 'npm i ...' to install all packages you want
4. automatically, all packages installed & their versions will appear in packages.json -> "dependencies"

To install someone else's packages, just navigate to directory with their package.json
and type 'npm install'
*/
// navigate to package.json -> "dependencies"



