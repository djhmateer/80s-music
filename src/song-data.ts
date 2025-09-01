/**
 * Song data module for the 80s music application.
 * 
 * @remarks
 * Data source: songs.json - static JSON file.
 * 
 * Designed as a separate module to enable future API migration
 * without changing the consumer interface.
 * 
 * @see {@link script.ts} - Primary consumer for table rendering/sorting
 */

import songData from './songs.json' with { type: "json" };

/**
 * Shape contract for song objects with compile-time validation.
 * 
 * @remarks
 * Design choices:
 * - Interface: Best for simple data shapes (current choice)
 * - Type alias: Similar, better for unions/intersections
 * - Class: Overkill here - adds runtime overhead for methods we don't need
 * 
 * @beta Probably head towards runtime validation for business rules,
 * but not bringing in external dependencies just yet.
 */
export interface Song {
  /** Song title @example "Billie Jean" */
  name: string;
  /** Artist or band name @example "Michael Jackson" */
  artist: string;
  /** Release year (1980-1989, not enforced at compile time) */
  year: number;
}

/**
 * Exported song collection with compile-time structure validation.
 * 
 * @remarks
 * TypeScript catches structural mismatches:
 * - Missing field: "Property 'name' is missing in type..."
 * - Wrong field name: "Type '{ namex: string; }[]' is not assignable to type 'Song[]'"
 * - Wrong type: "Type 'string' is not assignable to type 'number'"
 * 
 * Does NOT validate business rules (e.g., year actually being 1980-1989).
 */
export const songs: Song[] = songData;