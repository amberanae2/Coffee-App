// submit form
function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

/// need global variables

const map;
const service;

//// render the map based on users city input

function renderMap() {
    const search = document.getElementById("search").value;
    /////

    //// need if statement here to handle error if the user does not enter in the city. 
}


