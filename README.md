# 80s Music Table

A professional web application that displays a sortable table of classic 80s music tracks. Built with TypeScript, ES6 modules, and modern development practices including full type safety, accessibility compliance, and URL persistence.

This project demonstrates production-grade coding practices and serves as a practical example of professional web development techniques. For more background on the project's intent and coding philosophy, see: [Production Grade Code](https://davemateer.com/2025/08/30/production-grade-code).

## Features

- **Sortable Music Table**: Click column headers to sort songs alphabetically
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: Screen reader support with ARIA labels and semantic HTML
- **TypeScript**: Full type safety with strict checking, interfaces, and modern ES2022 features
- **Performance**: Lightweight vanilla JavaScript with no external dependencies

## Demo

TODO: 2025-09-01 Dave, publish this somewhere live

Open `index.html` in a modern web browser to see the application in action. Click the "Song" column header to toggle between ascending and descending alphabetical sorting.

## Getting Started

### Prerequisites

- **Node.js 16+** - For TypeScript compilation and development server
- **Modern web browser** - Chrome 61+, Firefox 60+, Safari 11+, Edge 16+
- **TypeScript** - Install globally: `npm install -g typescript`

### Installation & Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 80s-music
   ```

2. **Install dependencies** (if using npm packages)
   ```bash
   npm install
   ```

3. **Development workflow** (Choose one)

   ```bash
   npm run dev
   # Opens development server with TypeScript compilation
   # Visit http://localhost:3000
   ```

## Project Structure

```
80s-music/
├── index.html          # Main HTML structure and layout
├── style.css           # Professional styling and responsive design
├── script.js           # Application logic and ES6 module imports
├── song-data.js        # Data module with 80s music collection
├── favicon.svg         # Custom 80s-themed favicon with "8" logo
├── jsconfig.json       # TypeScript configuration for JavaScript type checking
├── README.md           # Project documentation (this file)
├── CLAUDE.md           # Developer guidance for Claude Code AI assistant
└── .claude-rules       # Coding standards and development conventions
```

### File Purposes

**Core Application Files:**
- **`index.html`**: Main application structure with semantic HTML and accessibility features
- **`script.js`**: ES6 module containing application logic, sorting functionality, and DOM manipulation
- **`song-data.js`**: Separate data module exporting the songs array with JSDoc type definitions
- **`style.css`**: Professional styling with CSS comments, responsive design, and hover effects

**Configuration & Assets:**
- **`favicon.svg`**: Custom 80s-themed icon with purple gradient "8" design
- **`jsconfig.json`**: Enables TypeScript type checking for JavaScript files in VS Code

**Documentation:**
- **`README.md`**: User-facing documentation for end users and general project information
- **`CLAUDE.md`**: Internal documentation for AI development assistant with technical details
- **`.claude-rules`**: Development standards including branch naming, commit format, and code style

## Technical Architecture

### ES6 Modules
The project uses modern ES6 modules for better code organization:
- **Scoped variables**: No global pollution
- **Explicit dependencies**: Clear import/export relationships
- **Better tooling**: Enhanced IDE support and bundling capabilities

### TypeScript Type Safety
Full TypeScript compilation provides comprehensive type safety:
- Strict TypeScript interfaces for Song data structure
- Union types for sort columns and directions
- Null safety with strict checking enabled
- Compile-time error detection and prevention

### Professional Standards
Follows industry best practices:
- Semantic HTML with accessibility features
- Clean CSS with professional styling patterns
- Modern JavaScript with event delegation
- Comprehensive code documentation

## Browser Support

Modern browsers which support ES6 modules and TypeScript compilation

## Professional Development & Debugging

### TypeScript Development Workflow

**Development Commands:**
```bash
npm run dev          # Development server with live compilation
npm run build        # Production build
npm run build:watch  # Watch mode compilation
npm run type-check   # Type checking only
npm run serve        # Serve built application
```

### Debugging Setup

**VS Code Configuration:**
- Install TypeScript and ES6 extensions
- Enable source maps for debugging
- Use integrated terminal for build commands

**Browser Debugging:**
- **Source Maps**: Debug TypeScript directly in DevTools
- **Console**: Full type support in development
- **Breakpoints**: Set in original TypeScript source files
- **Network**: Monitor URL persistence and routing

**Professional Debug Workflow:**
1. `npm run build:watch` - Start TypeScript compilation
2. `npm run serve` - Start development server  
3. Open browser DevTools with source maps enabled
4. Set breakpoints in TypeScript source files
5. Use TypeScript language server for real-time error checking

## Development

### Coding Standards
The project follows strict development standards defined in `.claude-rules`:

- **Code Formatting**: All code follows Prettier standards for professional consistency
  - HTML: 2-space indentation, self-closing tags, multi-line attributes with `>` at end of last attribute line
  - TypeScript: 2-space indentation, semicolons required, trailing commas, single quotes
  - CSS: 2-space indentation, consistent spacing, logical property ordering
  - Line length: 80-100 characters maximum

- **TSDoc Documentation**: Professional commenting standards established throughout codebase
  - Use TSDoc (`/** */`) for module headers, business logic explanations, and constraints
  - Comments explain WHY and capture design decisions, never just restate code
  - Include concrete examples with actual TypeScript error messages
  - One example per comment for brevity and clarity
  - Document architectural choices and future considerations

- **Branch Naming**: `<type>/<short-description>` (e.g., `feat/sorting-functionality`)
- **Commit Format**: Conventional Commits with descriptive messages

### Adding New Songs
To add more songs, edit `src/songs.json` and add entries following the Song interface structure defined in `src/song-data.ts`:

```json
{
  "name": "Song Title",
  "artist": "Artist Name", 
  "year": 1985
}
```

TypeScript will validate the structure at compile time and catch any missing fields or incorrect types.

## Contributing

1. Follow the branch naming convention in `.claude-rules`
2. Write descriptive commit messages following Conventional Commits
3. Add TSDoc comments following the established standards in `.claude-rules`
4. Test TypeScript compilation with `npm run type-check`
5. Test in multiple browsers
5. Maintain accessibility features

## License

This project is for educational purposes and demonstrates modern web development practices.

---

Built using vanilla JavaScript and modern web standards.