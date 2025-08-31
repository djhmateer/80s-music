/**
 * TypeScript interface for a song in the 80s music collection
 */
export interface Song {
  name: string;    // Song title, non-empty string
  artist: string;  // Performing artist or band name  
  year: number;    // Release year, must be 1980-1989 inclusive
}

/**
 * Array of 80s songs with enforced structure.
 * TypeScript provides compile-time type checking, autocomplete, and error detection.
 */
export const songs: Song[] = [
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