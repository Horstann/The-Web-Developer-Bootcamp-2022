console.log("HELLO FROM MY 1st JS FILE!!!");

random = Math.random();
if (random < 0.5){
    console.log(`${random} is less than 0.5!`);
}
else if (random >= 0.5){
    console.log(`${random} is larger than 0.5!`);
}
else {
    console.warn("Anomaly detected in 'Math.random()'.");
}

const userInput = prompt("Enter something");
if (userInput) console.log("TRUTHY");
else console.log("FALSY");

