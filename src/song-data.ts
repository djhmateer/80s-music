/**
 * TypeScript interface for a song in the 80s music collection
 */
export interface Song {
  name: string;    // Song title, non-empty string
  artist: string;  // Performing artist or band name  
  year: number;    // Release year, must be 1980-1989 inclusive
}

/**
 * Import song data from JSON file.
 * This separation of data from code is a professional practice that:
 * - Makes data easier to edit without touching code
 * - Enables potential dynamic loading in the future
 * - Keeps the TypeScript files focused on logic
 */
import songsJson from './songs.json';

/**
 * Array of 80s songs with enforced structure.
 * TypeScript validates the JSON data against the Song interface at compile time.
 */
export const songs: Song[] = songsJson;