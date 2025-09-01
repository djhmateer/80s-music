/**
 * Song data module for the 80s music application.
 * Provides type definitions and data import from songs.json.
 * 
 * Consumed by script.ts for rendering and sorting the music table.
 * Currently loads static JSON data but designed as a separate module
 * to enable future migration to API calls without changing the interface.
 */

export interface Song {
  name: string;    // e.g., "Billie Jean"
  artist: string;  // e.g., "Michael Jackson"  
  year: number;    // Must be 1980-1989 (not enforced by TypeScript)
}

import songData from './songs.json' with { type: "json" };

/**
 * TypeScript validates JSON structure at compile time.
 * E.g., renaming 'name' to 'namex' in songs.json causes: "Type '{ namex: string; }[]' is not assignable to type 'Song[]'"
 * Runtime validation would be needed for business rules like year range 1980-1989.
 */
export const songs: Song[] = songData;