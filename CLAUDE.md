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
│   ├── song-data.ts       # Song interface and data import
│   └── songs.json         # Sample data separated from code
├── dist/                  # Compiled JavaScript (git ignored)
│   ├── script.js          # Compiled from TypeScript
│   ├── song-data.js       # Compiled from TypeScript
│   └── songs.json         # Copied JSON data
├── index.html             # References dist/script.js
├── tsconfig.json          # TypeScript strict configuration with JSON imports
└── package.json           # Build scripts and dependencies
```

**Recent Improvements:**
- ✅ Separated data from code using JSON import pattern
- ✅ Added stricter TypeScript settings (`noUncheckedIndexedAccess`, `noEmitOnError`)
- ✅ Fixed code typos and updated documentation
- ✅ Enhanced .gitignore with OS files and environment variables
- ✅ Added prebuild clean script for fresh builds

## Current Session Progress (August 31, 2025)

### ✅ COMPLETED: TypeScript Migration & Code Quality Phase
**Branch:** ts-code-refactor (active)

**Completed Tasks:**
1. ✅ Complete TypeScript migration from JavaScript
2. ✅ Implement strict type checking with enhanced tsconfig.json
3. ✅ Separate data from code using JSON import pattern
4. ✅ Add comprehensive cleanup (gitignore, prebuild scripts, documentation)
5. ✅ Successfully merge TypeScript migration into main branch
6. ✅ Push all changes to remote repository
7. ✅ Create new branch `ts-code-refactor` for deep code review

### 🔍 IN PROGRESS: Code Review & Documentation Phase

**Current Focus:** Deep refactoring of `src/song-data.ts`

**Completed Improvements:**
- [x] **JSON Import Fix** - Fixed MIME type error by adding `with { type: "json" }` syntax
- [x] **Comment Enhancement** - Complete rewrite of all comments to accurately describe:
  - TypeScript compile-time vs runtime validation limitations
  - Security implications of JSON module imports
  - Clear distinction between structure validation and constraint enforcement
- [x] **Import Naming** - Improved `songsJson` to `songData` for clarity

**Remaining Work on song-data.ts:**
- [ ] Implement runtime validation for Song interface constraints
- [ ] Enhance type safety with branded types for year validation

**Branch Status:** ts-code-review (active)
- [ ] Continue with remaining files:
  - [ ] `src/script.ts` - Main application logic analysis
  - [ ] `src/songs.json` - Data format choices
  - [ ] `index.html` - Semantic HTML and accessibility
  - [ ] `style.css` - CSS architecture and methodologies
  - [ ] `tsconfig.json` - Compiler options rationale
  - [ ] `package.json` - Script organization and dependencies

**Branch Status:** Ready for continuation on new machine
- All work committed and pushed to remote
- ts-code-refactor branch active and ready
- Documentation up to date with current progress

## Future Enhancement Recommendations

### 1. Code Quality & Tooling
**Priority: High** - Essential for maintaining professional standards

- **Add ESLint** for TypeScript linting
  ```bash
  npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint
  ```
  Benefits: Catch potential bugs, enforce coding standards, improve consistency

- **Add Prettier** for automatic code formatting
  ```bash
  npm install --save-dev prettier
  ```
  Benefits: Consistent formatting, no style debates, saves time

- **Consider adding Husky** for pre-commit hooks
  Benefits: Ensure code quality before commits, run tests automatically

### 2. TypeScript Configuration Enhancements
**Priority: Medium** - Improves type safety further

- **Add `"noUncheckedIndexedAccess": true`** in tsconfig.json
  Makes array/object access safer by assuming values could be undefined
  
- **Skip `"declaration": true`** (not needed for standalone apps)
  Only needed if building a library for others to consume

### 3. Development Experience
**Priority: Medium** - Better developer workflow

- **Consider Vite** instead of basic serve
  ```bash
  npm install --save-dev vite
  ```
  Benefits: Hot Module Replacement (HMR), faster builds, better dev experience

- **Add npm scripts** for common tasks:
  ```json
  "scripts": {
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write src/**/*.ts"
  }
  ```

### 4. Testing Infrastructure
**Priority: High** - Critical for production applications

- **Add Vitest or Jest** for unit testing
  ```bash
  npm install --save-dev vitest @vitest/ui
  ```
  Benefits: Catch bugs early, refactor with confidence, document behavior

- **Add Playwright or Cypress** for E2E testing
  Benefits: Test full user workflows, catch integration issues

### 5. Build Optimization
**Priority: Low** - Only needed for production deployment

- **Add minification** with a bundler (Vite/Rollup/esbuild)
- **Consider code splitting** if the app grows larger
- **Add production build script** with optimizations

### 6. Documentation
**Priority: Low** - Nice to have for team projects

- **Add JSDoc comments** to exported functions
- **Consider TypeDoc** for API documentation generation
- **Add CONTRIBUTING.md** if open-sourcing

### 7. Project Cleanup
**Priority: High** - Immediate action recommended

- **Remove jsconfig.json** if it still exists (redundant with tsconfig.json)
- **Add .env support** if you need environment variables
- **Consider adding a LICENSE file**

### 8. Package Manager Migration
**Priority: Low** - Consider for future optimization

- **Migrate to pnpm** for better performance and disk space efficiency
  ```bash
  npm install -g pnpm
  pnpm import  # Converts package-lock.json to pnpm-lock.yaml
  rm package-lock.json
  ```
  Benefits: Faster installs, smaller node_modules, stricter dependency resolution
  
- **Alternative: Consider Bun** for all-in-one runtime and package manager
  Benefits: Ultra-fast performance, built-in TypeScript support, bundler included
  
- **Evaluate based on project needs** - npm is fine for small projects

## Current Professional Score: 8.5/10

**Strengths:**
- ✅ Clean TypeScript migration with strict typing
- ✅ Excellent accessibility (WCAG 2.1 AA)
- ✅ Good project structure
- ✅ URL persistence and professional UX
- ✅ Source maps for debugging
- ✅ ES6 modules (modern standard)

**Areas for Improvement:**
- ⚠️ No linting/formatting tools
- ⚠️ No test coverage
- ⚠️ Basic dev server (no HMR)
- ⚠️ No CI/CD pipeline

## Quick Start Improvements

To quickly elevate to professional standards, run:
```bash
# Essential tooling
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint prettier

# Create config files
echo '{"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"]}' > .eslintrc.json
echo '{"semi": true, "singleQuote": true}' > .prettierrc.json

# Add to package.json scripts
npm pkg set scripts.lint="eslint src/**/*.ts"
npm pkg set scripts.format="prettier --write src/**/*.ts"
```