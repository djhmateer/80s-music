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

/**
 * Renders the songs array as table rows in the DOM.
 * Uses for...of loop with template literals for efficient HTML string building.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get table body element with type assertion to satisfy TypeScript null checks
    const tbody = /** @type {HTMLElement} */ (document.getElementById('songs-tbody'));
    
    // Using for...of loop to build HTML string
    // Preferred over map().join('') as it avoids intermediate array creation
    // Map is semantically for data transformation, not side effects like string building 
    // Also preferred over forEach for easier debugging and control flow (break/continue)
    let html = '';
    for (const song of songs) {
        html += `<tr>
            <td>${song.name}</td>
            <td>${song.artist}</td>
            <td>${song.year}</td>
        </tr>`;
    }
    tbody.innerHTML = html;
});