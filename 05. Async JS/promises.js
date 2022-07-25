const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {   
        const delay = Math.random()*4500 + 500;
        setTimeout(() => {
            if (delay>4000) {
                reject('Connection timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            } 
        }, delay)
    })
}


/*
var request = fakeRequestPromise('yelp.com/api/coffee');
request
    .then(() => {
        console.log("PROMISE RESOLVED");
    })
    .catch(() => {
        console.log("PROMISE REJECTED");
    })
*/

// for multiple requests, promises mean you don't need callbacks
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("PROMISE RESOLVED for page1");
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2');
    })
    .then((data) => {
        console.log("PROMISE RESOLVED for page2");
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3');
    })
    .then((data) => {
        console.log("PROMISE RESOLVED for page3");
        console.log(data);
    })
    .catch((err) => {
        console.log("OH NO PROMISE REJECTED - could be from page 1-3. Any error falls straight thru.")
        console.log(err);
    })



// Async Functions - always returns a promise
async function hello () {
    return;
}

const sing = async () => {
    // throw "THIS IS BAD!";
    return 'LA LA LA';
}
sing()
    .then(data => {
        console.log("PROMISE RESOLVED with: ", data);
    })
    .catch(err => {
        console.log("OH NO PROMISE REJECTED with: ", err);
    })

const login = async (username, password) => {
    if (!username || !password) throw "Missing credentials!";
    if (password === "corgifeetarecute") return 'WELCOME!';
    throw 'Invalid password!';
}
login('asdfgh', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN! ", msg);
    })
    .catch(err => {
        console.log("ERROR! ", err);
    })


// await function - pause function to wait for a promise to be resolved before continuing
const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay)
    })
}
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
}
// HOWEVER, if promise is rejected, code stops running
// so use 'try'
async function makeTwoRequests(){
    try{
        let data1 = await fakeRequestPromise('/page1');
        console.log(data1);
        let data2 = await fakeRequestPromise('/page2');
        console.log(data2);
    } catch(e){
        console.log("ERROR! ", e);
    }
}


