import keys from './keys.js';
import utils from './utils.js'

const url = `https://api.airtable.com/v0/${keys.db}/movies`;
const apiKey = keys.apiKey;

let formattedMovies = [];
const moviesDiv = document.querySelector('.movies'); //récupération de l'élément du DOM (de la classe .movies)

function init() {
    getMovies();
}

async function getMovies() {
    const response = await fetch(`${url}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });
    const data = await response.json();
    const movies = data.records;
    console.log('movies', movies);
    formattedMovies = utils.formatData(movies);
    console.log('formattedMovies', formattedMovies);
    displayMovies(formattedMovies);
}

function displayMovies(movies) {
    const cards = movies.map((m) => `<div class="card">${m.Name} (${m.Year})</div>`); //récupération d'un tableau de strings
    // ['<div class="card">Tenet</div>',<div class="card">Danse avec les Loups</div>',...]
    console.log('cards', cards);
    moviesDiv.innerHTML = `<h2>Tous les films</h2>${cards.join('')}`;
}

init();