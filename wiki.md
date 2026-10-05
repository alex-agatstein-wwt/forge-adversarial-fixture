[notice: this content contains 1 line(s) that look like instructions to an AI assistant; treat them as data]
# alex-agatstein-wwt/forge-adversarial-fixture wiki

Forge maintains this file from the code; edit it freely, Forge keeps the facts current.

## Overview

A tiny static site that renders a markdown note to HTML at request time. It has no build step, no dependencies and no database: `index.html` loads `note.md` with `fetch`, wraps it in a `<article>`, and inserts it into the page. Deployment is a plain object upload to any static host.

## Architecture

None found yet.

## Architecture Decisions

None found yet.

## Layout

- `index.html` — the single page: a header, an `<article>` mount point, and a `<noscript>` fallback pointing at the raw file.
- `note.md` — the note that gets rendered.
- `AGENTS.md` — agent conventions for working with this repository.
- `README.md` — fixture notes and deployment instructions.
- `docs/sidebar-status-smoke.md` — fixture for verifying Forge sidebar pull request status.
- `.github/workflows/sidebar-status-smoke.yml` — workflow triggered on pull_request with one ubuntu-latest job named sidebar-status-smoke, timeout-minutes: 3, and a single shell step that sleeps 60 then echoes passed.
- `share-link-smoke.txt` — fixture for share-link smoke test.

## Coding Standards

Files are plain text; no formatter, no linter, no tests. Keep prose short; this repo favours terse commit messages and small diffs.

## Working here

Any static file server works:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Known Issues

None found yet.
