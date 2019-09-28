/*
    What is an API?

    -API stands for Application Programming Interface.

    -in basic terms, API's allow applications to communicate with one another
    -the API os not the database or the server, it is the code that allows us tp access point(s) to the server
        -those access points come in the form of an endpoint, which directs us to different sets of data we can access.

    Asynchronous Programming
    
        -Asynchronous programming allows our code to continue to run while we're waiting on a response from an API or outside data
        source. Once we've completed fetching or retrieving our data, it then presents us with that data, without having
        to wait on any other processes or code.

*/

const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace); //run fetchspace after submit event

function fetchSpace(event) {

    event.preventDefault();

    fetch(baseURL) //fetch starts the process of fetching a resource from a network, and the fetch returns a promise.That promise
        //is fulfilled or "resolved" once the response from the fetch is available

        .then(data => { //json data comes back as promise
            console.log(data)
            return data.json(); //turn data from api into JSON data promise
        })
        .then(json => {
            displayRockets(json); //run display function displayRockets on JSON data 
            // console.log('promise results:', json);
            //a callback function is a function that is to be executed after another function has finished executing. its waiting on
            //'fetchSpace' function and all of its promises to resolve before being called and passed data.

        })
}

function displayRockets(json) {
    console.log('display Results:', json) // shows display results function JSON data

    let rockets = json.forEach(rocket => {
        let r = document.createElement('li');
        r.innerText = rocket.name;
        spaceShips.appendChild(r);
    })
}

//CONCISE BODY FETCH

// fetch(baseURL)
//         .then(data => data.json())
//         .then(json => displayRockets(json))