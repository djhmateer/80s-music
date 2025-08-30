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
 * Array of 80s songs.
 *
 * Note:
 * - This is duck-typed: "If it walks like a duck and quacks like a duck, it's a duck."
 * - JavaScript doesn't enforce structure — any object can go in this array.
 */
const songsb = [
  {
    name: "Billie Jean",
    artist: "Michael Jackson",
    year: 1982,
  },
  {
    name: "Sweet Child O' Mine",
    artistx: "Guns N' Roses",
    year: 1987,
  },
  {
    name: "Livin' on a Prayer",
    artist: "Bon Jovi",
    year: 1986,
  },
];