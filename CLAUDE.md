# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple web application showcasing 80s music data. The project uses vanilla HTML, CSS, and JavaScript with JSDoc type annotations for type safety without compilation overhead.

**Architecture:**
- `index.html` - Basic HTML structure with title and script inclusion
- `style.css` - Simple styling with reset and basic typography
- `script.js` - Main JavaScript with JSDoc-typed song data structures
- `jsconfig.json` - TypeScript compiler configuration for JavaScript type checking

## Type System

The project uses JSDoc annotations with TypeScript's `checkJs` enabled for type safety:

- **Song interface**: Defined via `@typedef` with `name` (string), `artist` (string), `year` (number 1980-1989)
- **Type checking**: Enabled through `jsconfig.json` with `checkJs: true` and `strict: true`
- **IDE integration**: VS Code provides full IntelliSense, error detection, and autocomplete

## Development Standards

The project follows strict coding standards defined in `.claude-rules`:

**Code Formatting**: All code must follow Prettier formatting standards for consistency:
- HTML: 2-space indentation, self-closing tags with `/`, multi-line attributes with `>` at end of last attribute line
- JavaScript: 2-space indentation, semicolons required, trailing commas, single quotes
- CSS: 2-space indentation, trailing semicolons, consistent spacing
- Line length: 80-100 characters maximum

**Branch naming**: `<type>/<short-description>` (e.g., `feat/display-sample-data`)
**Commit format**: Conventional Commits with type matching branch type
**Variable declarations**: `const` preferred, `let` when reassigned, never `var`
**Comments**: JSDoc for public APIs and type definitions, single-line for local context only

## Key Files

- `script.js:1-30` - Main typed song data array with JSDoc annotations
- `jsconfig.json:4-8` - TypeScript compiler options for JavaScript type checking
- `.claude-rules:55-119` - Comprehensive JavaScript/TypeScript coding standards

## Completed Tasks

### ✅ Accessibility Improvements (completed in feat/a11y-sorting branch)

Full WCAG 2.1 AA compliance implemented for sortable table functionality:

**ARIA Attributes & Roles:**
- [x] Add `role="button"` to sortable table headers (`index.html:47-54`)
- [x] Implement `aria-sort="ascending|descending|none"` states (`script.js:51-79`)
- [x] Add `tabindex="0"` to make sortable headers keyboard focusable (`index.html:50-51`)
- [x] Add `aria-live="polite"` region for announcing sort changes (`index.html:22-28`)

**Keyboard Navigation:**
- [x] Implement keyboard event handlers for Enter and Space keys (`script.js:97-105`)
- [x] Add CSS focus indicators for keyboard navigation visibility (`style.css:56-61`)

**JavaScript Enhancements:**
- [x] Update JavaScript to manage ARIA sort states dynamically (`script.js:65-71`)
- [x] Add live region announcements for sort changes (`script.js:75-76`)

### ✅ Multi-Column Sorting with URL Persistence (completed in feat/sorting-concepts branch)

Full implementation of comprehensive sorting across all table columns with URL persistence:

**URL Persistence:**
- [x] Design URL structure with query parameters (`?sort=song&order=desc`)
- [x] Implement URL reading on page load to restore sort state
- [x] Update URL when sort changes (without page refresh using history.pushState)
- [x] Handle browser back/forward navigation with sort states
- [x] Add deep linking support for shareable sorted URLs

**Multi-Column Sorting:**
- [x] Extend sortable functionality to Artist column with text sorting
- [x] Extend sortable functionality to Year column with numeric sorting
- [x] Implement independent column sorting (one active at a time)
- [x] Add visual indicators showing which column is actively sorted
- [x] Handle data type differences (text vs numeric sorting with localeCompare)

**Accessibility & Keyboard Navigation:**
- [x] Apply ARIA button role and attributes to all sortable headers
- [x] Implement keyboard navigation (Tab, Enter, Space) for all columns
- [x] Add focus indicators for all sortable headers (fixed clipping issue)
- [x] Update live region announcements for all columns
- [x] Test complete keyboard navigation across all columns

**User Experience Enhancements:**
- [x] Add clickable heading link to home (/) with professional styling
- [x] Implement sort direction cycling with visual arrows (↑↓)
- [x] Add enhanced Year column styling with fixed width to prevent layout shifts
- [x] Professional CSS organization and hover effects
- [x] Optimize performance with generic sortByColumn function

## Current Tasks

### TypeScript Migration (feat/ts-migration branch)

Migrate the project from JavaScript with JSDoc to full TypeScript for better type safety and developer experience:

**Setup & Configuration:**
- [ ] Install TypeScript and configure build tools
- [ ] Create tsconfig.json with appropriate compiler options
- [ ] Update package.json with TypeScript scripts
- [ ] Configure development server for TypeScript compilation
- [ ] Set up source maps for debugging

**Code Migration:**
- [ ] Rename script.js to script.ts
- [ ] Convert JSDoc type annotations to TypeScript types
- [ ] Create proper TypeScript interfaces for Song data
- [ ] Add explicit typing to all functions and variables
- [ ] Fix type assertion issues and null safety

**Type Definitions:**
- [ ] Define SortColumn type ('song' | 'artist' | 'year')
- [ ] Define SortOrder type ('asc' | 'desc' | 'none')
- [ ] Create URLSortState interface for URL parsing
- [ ] Add proper DOM element typing throughout

**Build Process:**
- [ ] Set up TypeScript compilation pipeline
- [ ] Configure output directory structure
- [ ] Test build process and generated JavaScript
- [ ] Update HTML to reference compiled JavaScript
- [ ] Verify all functionality works after migration

**Documentation Updates:**
- [ ] Update README.md with TypeScript information
- [ ] Modify development instructions for TypeScript workflow
- [ ] Update CLAUDE.md with new file structure and types

## Current State

The project is in active development with sample 80s music data structures in place. The codebase demonstrates proper JSDoc usage for type safety in vanilla JavaScript projects without build complexity.