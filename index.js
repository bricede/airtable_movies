import keys from './keys.js';

const url = `https://api.airtable.com/v0/${keys.db}/movies`;
const apiKey = keys.apiKey;

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
}

init();