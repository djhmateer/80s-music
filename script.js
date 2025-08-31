/**
 * 80s Music Table Application
 * 
 * A simple web application that displays a sortable table of 80s music tracks.
 * Built using ES6 modules for modern JavaScript development practices.
 * 
 * Features:
 * - Sortable song table with visual indicators
 * - ES6 module architecture for better code organization
 * - Professional event handling with addEventListener
 * - Type-safe development with JSDoc annotations
 * 
 * @author Generated with Claude Code
 */

// ===== IMPORTS =====
import { songs } from './song-data.js';

/**
 * @typedef {import('./song-data.js').Song} Song
 */

// ===== STATE MANAGEMENT =====
let currentSortOrder = 'none'; // 'none', 'asc', 'desc'

// ===== UTILITY FUNCTIONS =====

/**
 * Renders song data into the table body.
 * @param {HTMLElement} tbody - The table body element
 * @param {Song[]} songsData - Array of songs to render
 */
function renderTable(tbody, songsData) {
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

// ===== SORTING FUNCTIONALITY =====

/**
 * Sorts songs by name and updates the display.
 * Toggles between ascending and descending alphabetical order.
 */
function sortBySong() {
    const tbody = /** @type {HTMLElement} */ (document.getElementById('songs-tbody'));
    const sortIndicator = /** @type {HTMLElement} */ (document.querySelector('.sort-indicator'));
    const sortHeader = /** @type {HTMLElement} */ (document.getElementById('sort-song-header'));
    
    let sortedSongs;
    
    // Toggle between ascending and descending sort
    if (currentSortOrder === 'none' || currentSortOrder === 'desc') {
        sortedSongs = [...songs].sort((a, b) => a.name.localeCompare(b.name));
        currentSortOrder = 'asc';
        sortIndicator.textContent = ' ↑';
        sortHeader.setAttribute('aria-sort', 'ascending');
    } else {
        sortedSongs = [...songs].sort((a, b) => b.name.localeCompare(a.name));
        currentSortOrder = 'desc';
        sortIndicator.textContent = ' ↓';
        sortHeader.setAttribute('aria-sort', 'descending');
    }
    
    renderTable(tbody, sortedSongs);
}

// ===== INITIALIZATION =====

/**
 * Initializes the application when DOM is ready.
 * Sets up event listeners and renders initial data.
 * 
 * Note: ES6 modules create isolated scope, so functions are not globally accessible.
 * This requires using addEventListener() instead of inline onclick handlers.
 */
document.addEventListener('DOMContentLoaded', function() {
    const tbody = /** @type {HTMLElement} */ (document.getElementById('songs-tbody'));
    const sortHeader = /** @type {HTMLElement} */ (document.getElementById('sort-song-header'));
    
    // Attach sort functionality to header - mouse click
    sortHeader.addEventListener('click', sortBySong);
    
    // Attach sort functionality to header - keyboard navigation
    // when tab selected and Enter or Space is pressed it sorts
    sortHeader.addEventListener('keydown', function(event) {
        // Activate on Enter or Space keys (standard for button-like elements)
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent page scroll on Space key
            sortBySong();
        }
    });
    
    // Render initial table data
    renderTable(tbody, songs);
});