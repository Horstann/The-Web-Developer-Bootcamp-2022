const btn = document.querySelector('#v2');
// on console, u can type "console.dir(btn)" to see what methods u can use

btn.onclick = function(){
    alert("YOU CLICKED ME!");
    console.log("YOU CLICKED ME!");
}

function scream(){
    console.log("AHHHHH!");
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = function(){
    alert('YOU CLICKED THE H1!');
}
// But the below can't work as it executes immediately!
//document.querySelector('h1').onclick = alert('YOU CLICKED THE H1!');



// addEventListener - allows for multiple functions to be put in
// .onclick only accepts 1 function
btn3 = document.querySelector('#v3')
btn3.addEventListener('click', function(){
    alert('You clicked me! (EventListener)');
    this.style.backgroundColor = 'olive'; // u can use the 'this' keyword too!
})
btn3.addEventListener('click', scream);
// besides, you can instruct to run once, the 1st time it's clicked, then it's removed from EventListener
function twist(){console.log("TWIST!");}
btn3.addEventListener('click', twist, {once: true}) 
// can also easily remove EventListener



// Event objects
// A) Find out what key was pressed
const input = document.querySelector('input');
input.addEventListener('keydown', function(e){
    console.log(e.key, e.code);
    // key gives character produced, code gives keyboard location pressed
})
// B) Stay on same page when form submitted
const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    alert("Form submitted!");
    e.preventDefault();
})
// C) Extract input
const input2 = document.querySelector('#catName');
const list = document.querySelector('#cats');
form.addEventListener('submit', function(e){
    console.log(input2.value);
    const newLI = document.createElement("li");
    newLI.innerText = input2.value;
    list.append(newLI);
})
// D) Change event
/*
input2.addEventListener('change', function(e){
    console.log('change');
    // triggered when form's input changes AND you leave the input
})
*/
h3 = document.querySelector('#h3')
input2.addEventListener('input', function(e){
    console.log('input');
    // triggered whenver form's input changes
    h3.innerText = input2.value;
})
// E) Stop event bubbling
btn.addEventListener('click', function(e){
    e.stopPropagation();
})
// F) Event delegation - find what was clicked
list.addEventListener('click', function(e){ // remove li that's clicked on
    console.log("Clicked on UL!");
    // check if it's an li first
    e.target.nodeName==='li' && e.target.remove();
})





