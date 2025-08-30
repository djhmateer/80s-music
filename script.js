/*
 * ES6 MODULES IMPLEMENTATION
 * 
 * Why ES6 modules over global scripts:
 * 1. SCOPED VARIABLES: Variables and functions are module-scoped, not global
 *    - Prevents namespace pollution and naming conflicts
 *    - Better encapsulation and maintainability
 * 
 * 2. EXPLICIT DEPENDENCIES: Import/export clearly defines what code depends on what
 *    - Makes dependencies traceable and debuggable
 *    - IDE can provide better autocomplete and refactoring support
 * 
 * 3. STATIC ANALYSIS: Module dependencies are resolved at compile time
 *    - Bundlers can perform tree-shaking (remove unused code)
 *    - Better tooling support and error detection
 * 
 * 4. MODERN STANDARD: ES6 modules are the official JavaScript module system
 *    - Supported natively in all modern browsers
 *    - Future-proof approach for web development
 * 
 * Trade-offs:
 * - Requires modern browser or bundler (IE11+ with polyfills)
 * - Functions not automatically global (need event listeners vs onclick)
 * - Slightly more complex setup for simple projects
 */

// Import song data with explicit dependency declaration
import { songs } from './song-data.js';

/**
 * Import Song type definition from external module for TypeScript support
 * @typedef {import('./song-data.js').Song} Song
 */

// Track current sort state for toggle functionality
let currentSortOrder = 'none'; // 'none', 'asc', 'desc'

/**
 * Sorts songs by name and updates the display.
 * Toggles between ascending, descending, and original order.
 */
function sortBySong() {
    const tbody = /** @type {HTMLElement} */ (document.getElementById('songs-tbody'));
    const sortIndicator = /** @type {HTMLElement} */ (document.querySelector('.sort-indicator'));
    
    let sortedSongs;
    
    // Determine next sort order and sort accordingly
    if (currentSortOrder === 'none' || currentSortOrder === 'desc') {
        // Sort ascending
        sortedSongs = [...songs].sort((a, b) => a.name.localeCompare(b.name));
        currentSortOrder = 'asc';
        sortIndicator.textContent = ' ↑';
    } else {
        // Sort descending  
        sortedSongs = [...songs].sort((a, b) => b.name.localeCompare(a.name));
        currentSortOrder = 'desc';
        sortIndicator.textContent = ' ↓';
    }
    
    // Re-render table with sorted data
    renderTable(tbody, sortedSongs);
}

/**
 * Renders song data into the table body.
 * @param {HTMLElement} tbody - The table body element
 * @param {Song[]} songsData - Array of songs to render
 */
function renderTable(tbody, songsData) {
    // Using for...of loop to build HTML string
    // Preferred over map().join('') as it avoids intermediate array creation
    // Map is semantically for data transformation, not side effects like string building 
    // Also preferred over forEach for easier debugging and control flow (break/continue)
    let html = '';
    for (const song of songsData) {
        html += `<tr>
            <td>${song.name}</td>
            <td>${song.artist}</td>
            <td>${song.year}</td>
        </tr>`;
    }
    tbody.innerHTML = html;
}

/**
 * Renders the songs array as table rows in the DOM.
 * Uses for...of loop with template literals for efficient HTML string building.
 */
/*
 * DOM INITIALIZATION WITH ES6 MODULE CONSIDERATIONS
 * 
 * Since ES6 modules create their own scope, functions like sortBySong() 
 * are not accessible globally. This means inline onclick handlers won't work.
 * 
 * Professional solution: Use addEventListener() to attach event handlers
 * - Separates HTML structure from JavaScript behavior
 * - Works correctly with module scoping
 * - More maintainable and follows modern best practices
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get table body element with type assertion to satisfy TypeScript null checks
    const tbody = /** @type {HTMLElement} */ (document.getElementById('songs-tbody'));
    
    // Get sort header element and attach event listener (replaces onclick attribute)
    // This is necessary because ES6 modules don't expose functions globally
    const sortHeader = /** @type {HTMLElement} */ (document.getElementById('sort-song-header'));
    sortHeader.addEventListener('click', sortBySong);
    
    // Render initial table data using the reusable render function
    renderTable(tbody, songs);
});