const json_data = '{"ticker": {"base":"BTC", "target":"USD", "price":"11288.49813464", "volume":"91769.69699773", "change":"-46.29462447"}, "timestamp":1596510482, "success":true, "error":""}';

// Convert JSON to JS object
const js_data = JSON.parse(json_data);
console.log(js_data.ticker.price);
// Convert JS object to JSON
json_data2 = JSON.stringify(js_data);

// HTTP verbs
// HTTP status codes
// query strings
// HTTP headers

// XMLHttpRequests don't support async JS & promises
// so we use fetch()
fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("RESOLVED (1)", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        return fetch("https://swapi.dev/api/people/2/");
    })
    .then((res) => {
        console.log("RESOLVED (2)", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("ERROR!", e);
        return e.json(); 
    })
// or we could use an async function
const loadStarWarsPeople = async () => {
    try{
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch(e){
        console.log("ERROR!", e);
    }
}
loadStarWarsPeople();


// Axios - JS library to fetch HTTP requests
const starwars_id = document.querySelector('#starwars_id');
const starwars_ppl = document.querySelector('#starwars_ppl');
const starwars_btn = document.querySelector('#starwars_btn');
const getStarWarsPerson = async() => {
    try {
        let id = parseInt(starwars_id.value);
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data.name);
        // we don't need to do the extra step of .json()

        const newLI = document.createElement('LI');
        newLI.append(id, '. ', res.data.name);
        starwars_ppl.append(newLI);
    } catch(e){
        console.log("ERROR! ", e);
        if (e.response.status == 404) {
            alert('No Star Wars person with this ID!');
        }
    }
}
starwars_btn.addEventListener('click', getStarWarsPerson);
/*
getStarWarsPerson(5);
getStarWarsPerson(10);*/

// extract data from Axios response
const jokes = document.querySelector('#jokes');
const jokes_btn = document.querySelector('#jokes_btn')
const getDadJoke = async() => {
    // for this particular API, we need to configure headers
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);

    const newLI = document.createElement('LI');
    newLI.append(res.data.joke);
    jokes.append(newLI);
}
jokes_btn.addEventListener('click', getDadJoke);

// 1 more example with Axios
const form = document.querySelector('#searchForm');
const images = document.querySelector('#TVshows');
form.addEventListener('search', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    console.log(res);
    //img_link = res.data[0].show.image.medium; 
    images.textContent = '';
    makeImages(res.data);
})
const makeImages = (shows) => {
    for (let result of shows){
        if (result.show.image){ // if movie image exists
            const img = document.createElement('IMG');
            img.src = result.show.image.medium; // get image link
            images.append(img);
        } else{
            const text = document.createElement('p');
            text.innerText = result.show.name;
            images.append(text); 
        }
    }
}