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
 * - Type-safe development with TypeScript
 * 
 * @author Generated with Claude Code
 */

// ===== IMPORTS =====
import { songs, Song } from './song-data.js';

// ===== TYPE DEFINITIONS =====
type SortColumn = 'song' | 'artist' | 'year';
type SortOrder = 'none' | 'asc' | 'desc';

interface URLSortState {
  column: SortColumn | null;
  order: 'asc' | 'desc';
}

// ===== STATE MANAGEMENT =====
let currentSortOrder: SortOrder = 'none';
let currentSortColumn: SortColumn | null = null;

// ===== UTILITY FUNCTIONS =====

/**
 * Renders song data into the table body.
 */
function renderTable(tbody: HTMLElement, songsData: Song[]): void {
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
 */
function parseSortFromURL(): URLSortState {
    const params = new URLSearchParams(window.location.search);
    const column = params.get('sort');
    const order = params.get('order') || 'asc';
    
    // Validate column parameter
    const validColumns: SortColumn[] = ['song', 'artist', 'year'];
    const validOrders: ('asc' | 'desc')[] = ['asc', 'desc'];
    
    if (column && validColumns.includes(column as SortColumn) && validOrders.includes(order as 'asc' | 'desc')) {
        return { 
            column: column as SortColumn, 
            order: order as 'asc' | 'desc'
        };
    }
    
    return { column: null, order: 'asc' };
}

/**
 * Updates the URL to reflect current sort state without page refresh.
 */
function updateSortURL(column: SortColumn | null, order: string): void {
    const url = new URL(window.location.href);
    
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
 */
function resetOtherColumns(activeColumn: string): void {
    const columns: SortColumn[] = ['song', 'artist', 'year'];
    
    columns.forEach(column => {
        if (column !== activeColumn) {
            const header = document.getElementById(`sort-${column}-header`);
            if (!header) return;
            const indicator = header.querySelector('.sort-indicator');
            
            header.setAttribute('aria-sort', 'none');
            if (indicator) {
                indicator.textContent = '';
            }
        }
    });
}

/**
 * Updates table CSS classes based on the active sort column for enhanced styling.
 */
function updateTableClasses(table: HTMLElement, column: string): void {
    // Remove all sorting classes
    table.classList.remove('sorting-year', 'sorting-song', 'sorting-artist');
    
    // Add class for current sort column
    table.classList.add(`sorting-${column}`);
}

/**
 * Generic sorting function that handles all columns with different data types.
 */
function sortByColumn(column: SortColumn): void {
    const tbody = document.getElementById('songs-tbody');
    const announcements = document.getElementById('sort-announcements');
    const table = document.getElementById('songs-table');
    
    if (!tbody || !announcements || !table) return;
    
    // Reset other column indicators and ARIA states
    resetOtherColumns(column);
    
    // Update table classes for enhanced styling
    updateTableClasses(table, column);
    
    // Get elements for current column
    const sortHeader = document.getElementById(`sort-${column}-header`);
    if (!sortHeader) return;
    const sortIndicator = sortHeader.querySelector('.sort-indicator');
    
    let sortedSongs: Song[];
    let sortDescription: string;
    let newOrder: 'asc' | 'desc';
    
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
            if (sortIndicator) sortIndicator.textContent = ' ↑';
            sortDescription = 'Table sorted by release year in ascending order (1980-1989)';
        } else {
            sortedSongs = [...songs].sort((a, b) => b.year - a.year);
            if (sortIndicator) sortIndicator.textContent = ' ↓';
            sortDescription = 'Table sorted by release year in descending order (1989-1980)';
        }
    } else {
        // Text sorting for song and artist
        const property: keyof Song = column === 'song' ? 'name' : 'artist';
        const displayName = column === 'song' ? 'song name' : 'artist name';
        
        if (newOrder === 'asc') {
            sortedSongs = [...songs].sort((a, b) => (a[property] as string).localeCompare(b[property] as string));
            if (sortIndicator) sortIndicator.textContent = ' ↑';
            sortDescription = `Table sorted by ${displayName} in ascending order`;
        } else {
            sortedSongs = [...songs].sort((a, b) => (b[property] as string).localeCompare(a[property] as string));
            if (sortIndicator) sortIndicator.textContent = ' ↓';
            sortDescription = `Table sorted by ${displayName} in descending order`;
        }
    }
    
    // Update state
    currentSortOrder = newOrder;
    currentSortColumn = column;
    
    // Update ARIA attributes
    if (sortHeader) {
        sortHeader.setAttribute('aria-sort', newOrder === 'asc' ? 'ascending' : 'descending');
    }
    
    // Update URL
    updateSortURL(column, newOrder);
    
    // Announce sort change to screen readers
    if (announcements) {
        announcements.textContent = sortDescription;
    }
    
    renderTable(tbody, sortedSongs);
}

// ===== EVENT HANDLING =====

/**
 * Attaches event listeners to a sortable column header.
 */
function attachColumnEvents(column: SortColumn): void {
    const sortHeader = document.getElementById(`sort-${column}-header`);
    
    if (!sortHeader) {
        console.error(`Header not found for column: ${column}`);
        return;
    }
    
    // Mouse click event
    sortHeader.addEventListener('click', () => sortByColumn(column));
    
    // Keyboard navigation event
    sortHeader.addEventListener('keydown', function(event: KeyboardEvent) {
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
document.addEventListener('DOMContentLoaded', function(): void {
   
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
        // sortByColumn calls renderTable internally
        sortByColumn(urlSort.column);
    } else {
        // Render initial table data (unsorted)
        const table = document.getElementById('songs-table');
        if (table) {
            table.classList.remove('sorting-year', 'sorting-song', 'sorting-artist');
        }

        const tbody = document.getElementById('songs-tbody');
        if (tbody) {
            renderTable(tbody, songs);
        }
    }
});