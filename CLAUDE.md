# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional web application showcasing 80s music data. The project uses modern TypeScript with strict type checking, ES6 modules, and professional development tooling.

**Architecture:**
- `index.html` - HTML structure with semantic elements and accessibility features
- `style.css` - Professional styling with responsive design and accessibility
- `src/script.ts` - Main TypeScript application logic with full type safety
- `src/song-data.ts` - Typed data module with interfaces
- `tsconfig.json` - TypeScript compiler configuration with strict mode
- `package.json` - Node.js project configuration with build scripts

## Type System

The project uses full TypeScript with strict type checking for maximum type safety:

- **Song interface**: TypeScript interface with `name` (string), `artist` (string), `year` (number 1980-1989)
- **Type checking**: Full TypeScript compilation with `strict: true` and comprehensive type validation
- **Union types**: SortColumn ('song' | 'artist' | 'year') and SortOrder ('asc' | 'desc' | 'none')
- **IDE integration**: Full TypeScript IntelliSense, error detection, refactoring, and autocomplete
- **Null safety**: Strict null checks prevent runtime errors

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

- `src/script.ts` - Main TypeScript application with sorting logic and URL persistence
- `src/song-data.ts` - Typed data module with Song interface and sample data
- `tsconfig.json` - TypeScript compiler configuration with strict type checking
- `package.json` - Build scripts and development dependencies
- `.claude-rules:55-119` - Comprehensive TypeScript coding standards

## Development Workflow

**Prerequisites:**
- Node.js 16+ installed
- TypeScript installed globally: `npm install -g typescript`

**Development Commands:**
- `npm run dev` - Start development server with live TypeScript compilation
- `npm run build` - Build TypeScript to production JavaScript
- `npm run build:watch` - Watch mode compilation for active development
- `npm run type-check` - Type checking without file emission
- `npm run serve` - Serve the application locally

**Professional Debugging:**
- **Source Maps**: Enabled for debugging TypeScript directly in browser DevTools
- **Type Checking**: Real-time error detection in VS Code with TypeScript language server
- **Browser DevTools**: Debug compiled JavaScript with source map support
- **Console Debugging**: Type-safe console.log with IntelliSense support

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

## Session Progress Summary (August 31, 2025)

### ✅ COMPLETED: Multi-Column Sorting with URL Persistence 
**Branch:** feat/sorting-concepts (merged to main)

All sorting functionality completed and working:
- Multi-column sorting (Song, Artist, Year) with independent operation
- Full URL persistence (?sort=song&order=asc) with deep linking support
- Complete accessibility compliance (WCAG 2.1 AA) with keyboard navigation
- Professional UI enhancements (clickable heading, fixed column widths)
- Cleaned up ID mapping complexity by changing URL param from 'name' to 'song'
- Professional code organization with comprehensive documentation

### ✅ COMPLETED: TypeScript Migration Setup
**Branch:** feat/ts-migration (active)

**Setup & Configuration:**
- [x] Install TypeScript globally (v5.9.2) and configure build tools
- [x] Create tsconfig.json with strict type checking and ES2022 target
- [x] Update package.json with TypeScript scripts and development dependencies
- [x] Configure development server (serve) for TypeScript compilation
- [x] Set up source maps for debugging TypeScript in browser DevTools

**Project Structure Created:**
```
80s-music/
├── src/                    # TypeScript source files
│   ├── script.ts          # Copied from script.js (needs type conversion)
│   └── song-data.ts       # Copied from song-data.js (needs type conversion)
├── dist/                  # TypeScript build output (generated by tsc)
├── package.json           # npm scripts and dependencies  
├── tsconfig.json          # TypeScript configuration
├── .gitignore            # Build artifacts and node_modules
└── [static files remain in root: index.html, style.css, favicon.svg]
```

**Working Development Environment:**
- `npm run dev` - Development with live compilation and serve on :3000
- `npm run build` - Production TypeScript compilation to dist/
- `npm run build:watch` - Watch mode compilation during development
- `npm run serve` - Serve application on localhost:3000
- `npm run type-check` - Type checking without file emission

**Documentation Updated:**
- [x] README.md updated with TypeScript workflow and professional debugging setup
- [x] CLAUDE.md updated with new architecture and development commands

### ✅ COMPLETED: TypeScript Migration
**Branch:** feat/ts-migration (active)
**Status:** Successfully migrated to TypeScript with full type safety

**Code Migration Completed:**
- [x] Converted all JSDoc type annotations to TypeScript types in src/script.ts
- [x] Created proper TypeScript interfaces for Song data in src/song-data.ts
- [x] Fixed all TypeScript compilation errors (0 errors remaining)
- [x] Added explicit typing to all functions and variables
- [x] Implemented null guards for DOM element access

**Type Definitions Created:**
- [x] Defined SortColumn type ('song' | 'artist' | 'year')
- [x] Defined SortOrder type ('asc' | 'desc' | 'none')  
- [x] Created Song interface with name, artist, and year properties
- [x] Created URLSortState interface for URL parsing
- [x] Added proper DOM element typing throughout

**Build Process Working:**
- [x] TypeScript compilation pipeline working (tsc)
- [x] Output directory configured (dist/)
- [x] Updated index.html to reference compiled JavaScript from dist/
- [x] Tested compiled application functionality
- [x] Verified source maps work for debugging

## Branch Management Notes

**Completed Branches (Deleted per .claude-rules):**
- feat/a11y-sorting (merged, deleted)
- feat/sorting-concepts (merged, deleted)  

**Active Branch:**
- feat/ts-migration (ready for TypeScript code conversion)

## Current State

✅ **TypeScript Migration Complete!** The project has been successfully migrated from JavaScript with JSDoc to full TypeScript with strict type checking. The application compiles without errors and maintains all existing functionality.

**What's Working:**
- Full TypeScript with strict mode enabled (`strict: true` in tsconfig.json)
- Type-safe Song interface with compile-time validation
- Proper null safety with DOM element guards
- Source maps for debugging TypeScript directly in browser DevTools
- All sorting, URL persistence, and accessibility features preserved
- Zero TypeScript compilation errors

**Development Commands:**
```bash
npm run dev          # Start development (watch + serve on :3000)
npm run build        # Production TypeScript compilation to dist/
npm run type-check   # Type checking without file emission
npm run serve        # Serve application on localhost:3000
```

**Project Structure:**
```
80s-music/
├── src/                    # TypeScript source files
│   ├── script.ts          # Main application with full type safety
│   └── song-data.ts       # Song interface and typed data
├── dist/                  # Compiled JavaScript (git ignored)
│   ├── script.js          # Compiled from TypeScript
│   └── song-data.js       # Compiled from TypeScript
├── index.html             # References dist/script.js
├── tsconfig.json          # TypeScript strict configuration
└── package.json           # Build scripts and dependencies
```