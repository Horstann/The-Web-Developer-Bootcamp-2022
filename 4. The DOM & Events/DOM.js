// A) .getElementBy...
var image = document.getElementById('chicken');
var images = document.getElementsByTagName('img');
var li =  document.getElementsByClassName('list item');
// these are iterable collections, but not arrays!

for (let img of images){
    console.log(img.src);
}

for (let item of li){
    console.log(item.innerText);
}


// B) querySelector
var img = document.querySelector('#chicken'); // by id
var h1 = document.querySelector('h1'); // by tag
var script = document.querySelector('script[src="DOM.js"]'); // by attribute
var li = document.querySelector('.list_item'); // by class
// however, querySelector just gives us the 1st one
// to get all...
var all_items = document.querySelectorAll('.list_item');
var all_li = document.querySelectorAll('ul li');


// Manipulating the DOM
document.querySelector('h1').innerText = 'Manipulating the DOM!';
// 'textContent' returns every elemeny & tag
document.querySelector('h1').innerHTML = '<b>Manipulating</b> the <i>DOM</i>!';
document.querySelector('h1').innerHTML += ' LMAOOO';
document.querySelector('#chicken').id = 'img';
// image.id vs .getAttribute('id')
var var1 = image.id
var var2 = image.getAttribute('id')
// .setAttribute()
image.setAttribute('id', 'chicken');

// Changing styles
console.log(h1.style); // but only gives inline styles, not from stylesheets
h1.style.color = 'green'; // but you can still make 1-off changes to style
// to access stylesheet
const styles = window.getComputedStyle(h1);
font_size = styles.fontSize;
margin_left = styles.marginLeft;


// Traverse parent/child/sibling
h1.parentElement;
h1.parentElement.parentElement;
h1.children[0].children;
h1.childElementCount;
li.nextElementSibling;
li.previousElementSibling;
// Add new parent/child/sibling
const newImg = document.createElement('img');
newImg.src = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg';
document.body.appendChild(newImg);
const newH2 = document.createElement('h2');
newH2.innerHTML = 'I am <i>new</i>!';
document.body.appendChild(newH2);
// append & prepend for text only
newH2.append(' Some more text!');
newH2.prepend("I'm using 'prepend'! ");
// .insertAdjacentElement - 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
const newH3 = document.createElement('h3');
newH3.append('Are chickens adorable?');
h1.insertAdjacentElement('afterend', newH3);
// remove() & removeChild()
newH3.remove();
ul = document.querySelector('ul');
ul.removeChild(li);




