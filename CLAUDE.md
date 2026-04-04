# CLAUDE.md

## Build & dev

- `hugo server -D` — dev server with drafts
- `npm run build` — production build (`hugo --gc --minify`)
- Theme lives in `themes/faw-minimal/`
- Tailwind CSS processed via PostCSS

## Future ideas

- List of content (all pages/posts) on the homepage or a dedicated archive page
- "Last updated" date on pages (Hugo has `.Lastmod` via git or frontmatter)
- Estimated reading time on posts (Hugo has `.ReadingTime` built in)
