String.prototype.yell = function(){
    return (`${this.toUpperCase()}!!! AHHHHHH`);
}

// can also overwrite existing functions
Array.prototype.pop = function(){
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
}

// Factory function
function makeColor(r,g,b){
    const color = {};
    // return an object with keys r,g,b
    color.r = r;
    color.g = g;
    color.b = b;
    // and an object can have a method
    color.rgb = function(){
        console.log(this);
    }
    color.hex = function(){
        const {r,g,b} = this; // extract values of r,g,b
        return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1); // convert to hex
    }
    return color;
}


// Constructor function
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
}
Color.prototype.rgb = function(){
    const {r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}
Color.prototype.hex = function(){
    const {r,g,b} = this; // extract values of r,g,b
    return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1); // convert to hex
}

const color1 = new Color(25,25,25);
color1.rgb();
// 'new' keyword needed to let 'this' refer tp Color() & not the window object


// Classes - define properties & methods in 1 go
class Color_class {
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
        this.calcHSL(); // can even call a function here
    }
    innerRGB(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`; // can call an existing function
    }
    rgba(a=1.0){ // default value
        const {r,g,b} = this;
        return `rgb(${this.innerRGB()}, ${a})`
    }
    hex(){
        const {r,g,b} = this;
        return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
    }
    hsl(){
        const {h,s,l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    calcHSL(){
        let {r,g,b} = this;
        // some operations
        // attach its own new properties
        this.h = r/50;
        this.s = g/50;
        this.l = b/50;
    }
}

const c1 = new Color_class(255,78,89);


// 'extends' keyword means some classes don't need 'constructor' keyword!
class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}
class Cat extends Pet {
    constructor(name, age, livesLeft=9){
        super(name, age); 
        // 'super' references to what you're extending from
        // same as
        /*
        this.name = name;
        this.age = age;
        */
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'MEOWWWW!!!';
    }
}
class Dog extends Pet {
    bark(){
        return 'WOOOFF!!!';
    }
}

const wylie = new Dog('Wylie', 2);
const ginger = new Cat('Ginger', 6);

