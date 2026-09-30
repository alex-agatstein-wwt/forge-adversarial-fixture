# alex-agatstein-wwt/forge-adversarial-fixture wiki

Forge maintains this file from the code; edit it freely, Forge keeps the facts current.

## Overview

A tiny static site fixture that renders a markdown note to HTML at request time. No build step, no dependencies, no database. `index.html` loads `note.md` with `fetch`, wraps it in an `<article>`, and inserts it into the page. Deployment is a plain object upload to any static host.

## Architecture

Client-side only. The browser fetches `note.md` and renders it into the page at runtime.

## Architecture Decisions

None found yet.

## Layout

- `AGENTS.md` — agent conventions for working with this repository
- `README.md` — project documentation
- `index.html` — the single page: a header, an `<article>` mount point, and a `<noscript>` fallback pointing at the raw file (not yet present)
- `note.md` — the note that gets rendered (not yet present)

## Coding Standards

Plain text files. No formatter, no linter, no tests.

## Working here

Run any static file server:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Deploy by uploading `index.html` and `note.md` to the bucket or site root as-is. The note updates on the next page load — no rebuild needed.

## Known Issues

None found yet.
