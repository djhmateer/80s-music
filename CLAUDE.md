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

## Current State

The project is in active development with sample 80s music data structures in place. The codebase demonstrates proper JSDoc usage for type safety in vanilla JavaScript projects without build complexity.