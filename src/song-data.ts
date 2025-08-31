/**
 * Song data structure for the 80s music application.
 * 
 * Defines the contract that all song objects must follow, ensuring
 * type safety throughout the application at compile time.
 */
export interface Song {
  /** Song title - should be non-empty but TypeScript doesn't enforce this constraint */
  name: string;
  /** Artist or band name - should be non-empty but TypeScript doesn't enforce this constraint */
  artist: string;
  /** Release year - should be 1980-1989 inclusive but TypeScript only enforces number type */
  year: number;
}

/**
 * Imports song data using JSON module import with type assertion.
 * 
 * The `with { type: "json" }` syntax is required by modern browsers for security -
 * it explicitly declares this import as JSON data, not executable code.
 * This prevents potential security vulnerabilities from malicious JSON files.
 */
import songData from './songs.json' with { type: "json" };

/**
 * Typed array of 80s songs exported for use throughout the application.
 * 
 * TypeScript performs compile-time validation that the JSON structure matches
 * the Song interface, but does NOT validate the actual constraint values
 * (like year range 1980-1989 or non-empty strings).
 * 
 * Runtime validation would be needed to enforce the documented constraints.
 */
export const songs: Song[] = songData;