# jsonresume-theme-onepage-clean

A JSON Resume theme that renders `resume.json` into a clean, one-page HTML/PDF resume.

## Architecture

- `index.js` — Entry point. Registers Handlebars helpers (`formatDate`, `ifCond`) and exports `render(resume)`.
- `resume.hbs` — Main HTML template composing partials.
- `partials/*.hbs` — One Handlebars partial per resume section.
- `style.css` — All styling including responsive breakpoints and `@media print` for PDF.
- `resume.json` — Resume data following the JSON Resume schema.
- `exportPDF.js` — HTML export via resume-cli, then Puppeteer PDF export.

## Commands

- `npm run export:html` — export as HTML
- `npm run export` — export as PDF

## Rules

- The resume must fit on one printed page. After styling changes, verify print layout still fits.
- `style.css` has separate screen, responsive, and print rules. Print styles are critical for page-size constraints.
- Handlebars partials in `partials/` map 1:1 to JSON Resume schema sections. Render order is in `resume.hbs`.
- `resume.json` follows the JSON Resume schema — preserve its structure when editing.
- Date formatting uses Luxon via the `formatDate` Handlebars helper in `index.js`.
