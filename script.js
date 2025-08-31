/**
 * 80s Music Table Application
 * 
 * A simple web application that displays a sortable table of 80s music tracks.
 * Built using ES6 modules for modern JavaScript development practices.
 * 
 * Features:
 * - Multi-column sortable table with visual indicators
 * - URL persistence for sort state with deep linking support
 * - Full keyboard accessibility and screen reader support
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
let currentSortColumn = /** @type {'song' | 'artist' | 'year' | null} */ (null);

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

// ===== URL PERSISTENCE FUNCTIONS =====

/**
 * Parses the current URL to extract sort parameters.
 * @returns {{column: 'song'|'artist'|'year'|null, order: 'asc'|'desc'}} Sort state from URL
 */
function parseSortFromURL() {
    const params = new URLSearchParams(window.location.search);
    const column = params.get('sort');
    const order = params.get('order') || 'asc';
    
    // Validate column parameter
    const validColumns = ['song', 'artist', 'year'];
    const validOrders = ['asc', 'desc'];
    
    if (validColumns.includes(column) && validOrders.includes(order)) {
        return { 
            column: /** @type {'song'|'artist'|'year'} */ (column), 
            order: /** @type {'asc'|'desc'} */ (order) 
        };
    }
    
    return { column: null, order: 'asc' };
}

/**
 * Updates the URL to reflect current sort state without page refresh.
 * @param {string|null} column - Column to sort by ('song', 'artist', 'year', or null)
 * @param {string} order - Sort direction ('asc' or 'desc')
 */
function updateSortURL(column, order) {
    const url = new URL(window.location);
    
    if (column && order) {
        url.searchParams.set('sort', column);
        url.searchParams.set('order', order);
    } else {
        // Remove sort parameters for unsorted state
        url.searchParams.delete('sort');
        url.searchParams.delete('order');
    }
    
    // Update URL without page refresh
    history.pushState({}, '', url);
}

// ===== SORTING FUNCTIONALITY =====

/**
 * Resets visual indicators and ARIA states for all columns except the active one.
 * @param {string} activeColumn - The column being sorted
 */
function resetOtherColumns(activeColumn) {
    const columns = ['song', 'artist', 'year'];
    
    columns.forEach(column => {
        if (column !== activeColumn) {
            const header = /** @type {HTMLElement} */ (document.getElementById(`sort-${column}-header`));
            const indicator = /** @type {HTMLElement} */ (header.querySelector('.sort-indicator'));
            
            header.setAttribute('aria-sort', 'none');
            indicator.textContent = '';
        }
    });
}

/**
 * Updates table CSS classes based on the active sort column for enhanced styling.
 * @param {HTMLElement} table - The table element
 * @param {string} column - The column being sorted
 */
function updateTableClasses(table, column) {
    // Remove all sorting classes
    table.classList.remove('sorting-year', 'sorting-song', 'sorting-artist');
    
    // Add class for current sort column
    table.classList.add(`sorting-${column}`);
}

/**
 * Generic sorting function that handles all columns with different data types.
 * @param {string} column - Column to sort by ('song', 'artist', 'year')
 */
function sortByColumn(column) {
    const tbody = /** @type {HTMLElement} */ (document.getElementById('songs-tbody'));
    const announcements = /** @type {HTMLElement} */ (document.getElementById('sort-announcements'));
    const table = /** @type {HTMLElement} */ (document.getElementById('songs-table'));
    
    // Reset other column indicators and ARIA states
    resetOtherColumns(column);
    
    // Update table classes for enhanced styling
    updateTableClasses(table, column);
    
    // Get elements for current column
    const sortHeader = /** @type {HTMLElement} */ (document.getElementById(`sort-${column}-header`));
    const sortIndicator = /** @type {HTMLElement} */ (sortHeader.querySelector('.sort-indicator'));
    
    let sortedSongs;
    let sortDescription;
    let newOrder;
    
    // Determine new sort order (toggle or start with ascending)
    if (currentSortColumn === column && currentSortOrder === 'asc') {
        newOrder = 'desc';
    } else {
        newOrder = 'asc';
    }
    
    // Sort based on column type
    if (column === 'year') {
        // Numeric sorting for year
        if (newOrder === 'asc') {
            sortedSongs = [...songs].sort((a, b) => a.year - b.year);
            sortIndicator.textContent = ' ↑';
            sortDescription = 'Table sorted by release year in ascending order (1980-1989)';
        } else {
            sortedSongs = [...songs].sort((a, b) => b.year - a.year);
            sortIndicator.textContent = ' ↓';
            sortDescription = 'Table sorted by release year in descending order (1989-1980)';
        }
    } else {
        // Text sorting for song and artist
        const property = column === 'song' ? 'name' : 'artist';
        const displayName = column === 'song' ? 'song name' : 'artist name';
        
        if (newOrder === 'asc') {
            sortedSongs = [...songs].sort((a, b) => a[property].localeCompare(b[property]));
            sortIndicator.textContent = ' ↑';
            sortDescription = `Table sorted by ${displayName} in ascending order`;
        } else {
            sortedSongs = [...songs].sort((a, b) => b[property].localeCompare(a[property]));
            sortIndicator.textContent = ' ↓';
            sortDescription = `Table sorted by ${displayName} in descending order`;
        }
    }
    
    // Update state
    currentSortOrder = newOrder;
    currentSortColumn = column;
    
    // Update ARIA attributes
    sortHeader.setAttribute('aria-sort', newOrder === 'asc' ? 'ascending' : 'descending');
    
    // Update URL
    updateSortURL(column, newOrder);
    
    // Announce sort change to screen readers
    announcements.textContent = sortDescription;
    
    renderTable(tbody, sortedSongs);
}

// ===== EVENT HANDLING =====

/**
 * Attaches event listeners to a sortable column header.
 * @param {string} column - Column identifier ('song', 'artist', 'year')
 */
function attachColumnEvents(column) {
    const sortHeader = /** @type {HTMLElement} */ (document.getElementById(`sort-${column}-header`));
    
    if (!sortHeader) {
        console.error(`Header not found for column: ${column}`);
        return;
    }
    
    // Mouse click event
    sortHeader.addEventListener('click', () => sortByColumn(column));
    
    // Keyboard navigation event
    sortHeader.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent page scroll on Space key
            sortByColumn(column);
        }
    });
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
   
    // Attach event listeners to all sortable columns so that
    // we can click on them with a mouse or keyboard to sort 
    attachColumnEvents('song');
    attachColumnEvents('artist');
    attachColumnEvents('year');
     
    // Parse URL to get initial sort state
    const urlSort = parseSortFromURL();
    
    // Apply initial sort state from URL (if any)
    if (urlSort.column) {
        // Set up state to trigger correct sort direction
        if (urlSort.order === 'desc') {
            currentSortOrder = 'asc'; // Will toggle to desc
            currentSortColumn = urlSort.column;
        } else {
            currentSortOrder = 'desc'; // Will toggle to asc  
            currentSortColumn = null; // Will start fresh with asc
        }
        // sortbyColumn calls rednerTable internally
        sortByColumn(urlSort.column);
    } else {
        // Render initial table data (unsorted)
        const table = /** @type {HTMLElement} */ (document.getElementById('songs-table'));
        table.classList.remove('sorting-year', 'sorting-song', 'sorting-artist');

        const tbody = document.getElementById('songs-tbody');
        renderTable(tbody, songs);
    }
});