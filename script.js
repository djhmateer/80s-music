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
let currentSortColumn = null; // 'name', 'artist', 'year', or null

// ===== URL PERSISTENCE FUNCTIONS =====

/**
 * Parses the current URL to extract sort parameters.
 * @returns {{column: string|null, order: string}} Sort state from URL
 */
function parseSortFromURL() {
    const params = new URLSearchParams(window.location.search);
    const column = params.get('sort');
    const order = params.get('order') || 'asc';
    
    // Validate column parameter
    const validColumns = ['name', 'artist', 'year'];
    const validOrders = ['asc', 'desc'];
    
    if (validColumns.includes(column) && validOrders.includes(order)) {
        return { column, order };
    }
    
    return { column: null, order: 'asc' };
}

/**
 * Updates the URL to reflect current sort state without page refresh.
 * @param {string|null} column - Column to sort by ('name', 'artist', 'year', or null)
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
 * Generic sorting function that handles all columns with different data types.
 * @param {string} column - Column to sort by ('name', 'artist', 'year')
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
    const sortHeader = /** @type {HTMLElement} */ (document.getElementById(getHeaderId(column)));
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
        // Text sorting for name and artist
        const property = column === 'name' ? 'name' : 'artist';
        const displayName = column === 'name' ? 'song name' : 'artist name';
        
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

/**
 * Resets visual indicators and ARIA states for all columns except the active one.
 * @param {string} activeColumn - The column being sorted
 */
function resetOtherColumns(activeColumn) {
    const columns = ['name', 'artist', 'year'];
    
    columns.forEach(column => {
        if (column !== activeColumn) {
            const header = /** @type {HTMLElement} */ (document.getElementById(getHeaderId(column)));
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
    table.classList.remove('sorting-year', 'sorting-name', 'sorting-artist');
    
    // Add class for current sort column
    table.classList.add(`sorting-${column}`);
}


// ===== INITIALIZATION =====

/**
 * Initializes the application when DOM is ready.
 * Sets up event listeners and renders initial data.
 * 
 * Note: ES6 modules create isolated scope, so functions are not globally accessible.
 * This requires using addEventListener() instead of inline onclick handlers.
 */
/**
 * Gets the header ID for a given column.
 * @param {string} column - Column identifier ('name', 'artist', 'year')
 * @returns {string} The actual HTML ID for the header
 */
function getHeaderId(column) {
    const idMap = {
        'name': 'sort-song-header',
        'artist': 'sort-artist-header', 
        'year': 'sort-year-header'
    };
    return idMap[column];
}

/**
 * Attaches event listeners to a sortable column header.
 * @param {string} column - Column identifier ('name', 'artist', 'year')
 */
function attachColumnEvents(column) {
    const sortHeader = /** @type {HTMLElement} */ (document.getElementById(getHeaderId(column)));
    
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

document.addEventListener('DOMContentLoaded', function() {
    const tbody = /** @type {HTMLElement} */ (document.getElementById('songs-tbody'));
    
    // Parse URL to get initial sort state
    const urlSort = parseSortFromURL();
    
    // Attach event listeners to all sortable columns
    attachColumnEvents('name');
    attachColumnEvents('artist');
    attachColumnEvents('year');
    
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
        sortByColumn(urlSort.column);
    } else {
        // Render initial table data (unsorted)
        const table = /** @type {HTMLElement} */ (document.getElementById('songs-table'));
        table.classList.remove('sorting-year', 'sorting-name', 'sorting-artist');
        renderTable(tbody, songs);
    }
});