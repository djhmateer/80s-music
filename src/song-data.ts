/**
 * Song data module for the 80s music application.
 * 
 * Owner: script.ts (primary consumer for table rendering/sorting)
 * Dependencies: songs.json (static data source)
 * 
 * Designed as a separate module to enable future API migration
 * without changing the consumer interface.
 */

/**
 * Shape contract for song objects with compile-time validation.
 * 
 * Design choices:
 * - Interface: Best for simple data shapes (current choice)
 * - Type alias: Similar, better for unions/intersections
 * - Class: Overkill here - adds runtime overhead for methods we don't need
 * 
 * Probably head towards runtime validation for business rules,
 * but not bringing in external dependencies just yet.
 */
export interface Song {
  name: string;    // e.g., "Billie Jean"
  artist: string;  // e.g., "Michael Jackson"  
  year: number;    // 1980-1989 (constraint not enforced at compile time)
}

import songData from './songs.json' with { type: "json" };

/**
 * Exported song collection with compile-time structure validation.
 * 
 * TypeScript catches structural mismatches:
 * - Missing field: "Property 'name' is missing in type..."
 * - Wrong field name: "Type '{ namex: string; }[]' is not assignable to type 'Song[]'"
 * - Wrong type: "Type 'string' is not assignable to type 'number'"
 * 
 * Does NOT validate business rules (e.g., year actually being 1980-1989).
 */
export const songs: Song[] = songData;