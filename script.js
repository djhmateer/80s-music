/**
 * @typedef {Object} Song
 * @property {string} name - Song title, non-empty string
 * @property {string} artist - Performing artist or band name
 * @property {number} year - Release year, must be 1980-1989 inclusive
 */

/**
 * Array of 80s songs with enforced structure.
 * Note: Structure is enforced by IDE/JSDoc only - code will still run without it.
 * JSDoc + VS Code provide type hints, autocomplete, and error detection for better DX (Developer Experience).
 * @type {Song[]}
 */
const songs = [
  {
    name: "Billie Jean",
    artist: "Michael Jackson",
    year: 1982,
  },
  {
    name: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    year: 1987,
  },
  {
    name: "Livin' on a Prayer",
    artist: "Bon Jovi",
    year: 1986,
  },
];

document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.getElementById('songs-tbody');
    
    songs.forEach(song => {
        const row = tbody.insertRow();
        row.insertCell().textContent = song.name;
        row.insertCell().textContent = song.artist;
        row.insertCell().textContent = song.year;
    });
});