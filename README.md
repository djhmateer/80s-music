# 80s Music Table

A simple, professional web application that displays a sortable table of classic 80s music tracks. Built with vanilla JavaScript using modern ES6 modules and professional development practices.

## Features

- 🎵 **Sortable Music Table**: Click column headers to sort songs alphabetically
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ♿ **Accessibility**: Screen reader support with ARIA labels and semantic HTML
- 🎯 **Modern JavaScript**: ES6 modules, type safety with JSDoc, professional code organization
- ⚡ **Performance**: Lightweight vanilla JavaScript with no external dependencies

## Demo

Open `index.html` in a modern web browser to see the application in action. Click the "Song" column header to toggle between ascending and descending alphabetical sorting.

## Getting Started

### Prerequisites

- Modern web browser with ES6 module support (Chrome 61+, Firefox 60+, Safari 11+)
- Local web server (for ES6 modules) or simply open `index.html` in browser

### Installation

1. Clone or download this repository
2. **Important**: Serve from a web server (ES6 modules require HTTP/HTTPS, not `file://`)

**Option A - Simple HTTP Server:**
```bash
# Python 3
python -m http.server 8000

# Node.js (if you have it)
npx serve .

# PHP (if you have it) 
php -S localhost:8000
```

**Option B - VS Code Live Server:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

**Option C - Direct File Access (Limited):**
- Some browsers allow direct file access with modules
- Chrome: Start with `--allow-file-access-from-files` flag
- Not recommended for development

3. Open `http://localhost:8000` in your browser

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

### Type Safety
JSDoc annotations provide type safety without compilation:
- Song interface with name, artist, and year properties
- TypeScript-powered IntelliSense in VS Code
- Runtime type hints and error detection

### Professional Standards
Follows industry best practices:
- Semantic HTML with accessibility features
- Clean CSS with professional styling patterns
- Modern JavaScript with event delegation
- Comprehensive code documentation

## Browser Support

- Chrome 61+ (ES6 modules)
- Firefox 60+ (ES6 modules)
- Safari 11+ (ES6 modules)
- Edge 16+ (ES6 modules)

For older browsers, consider using a module bundler like Webpack or Vite.

## Development

### Coding Standards
The project follows strict development standards defined in `.claude-rules`:

- **Branch Naming**: `<type>/<short-description>` (e.g., `feat/sorting-functionality`)
- **Commit Format**: Conventional Commits with descriptive messages
- **Code Style**: 2-space indentation, trailing commas, semicolons
- **Comments**: JSDoc for APIs, concise inline comments for context

### Adding New Songs
To add more songs, edit `song-data.js` and add entries to the songs array following the JSDoc-defined Song interface:

```javascript
{
  name: "Song Title",
  artist: "Artist Name", 
  year: 1985  // Must be 1980-1989
}
```

## Contributing

1. Follow the branch naming convention in `.claude-rules`
2. Write descriptive commit messages
3. Add JSDoc comments for new functions
4. Test in multiple browsers
5. Maintain accessibility features

## License

This project is for educational purposes and demonstrates modern web development practices.

---

Built with ❤️ using vanilla JavaScript and modern web standards.