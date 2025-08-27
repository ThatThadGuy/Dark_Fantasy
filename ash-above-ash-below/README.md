# Ash Above, Ash Below — Playtest Pack

Free, static SRD + tools for fast playtests.

## Quickstart
```bash
npm i
npm run dev
# open http://localhost:4321
```

## Authoring Rules

* Add MDX pages under `src/pages/rules/`. Start with the provided stubs.
* Use `#`, `##`, `###` headings; the ToC auto-builds from `h2/h3`.

## Build & Deploy

* This repo is ready for GitHub Pages.
* In repo **Settings → Pages** set **Source: GitHub Actions**.
* Push to `main`; the site auto-deploys to `https://<user>.github.io/<repo>/`.
* If your repo is a project site, ensure `site` in `astro.config.mjs` matches.

## Search (Pagefind)

* Build runs `pagefind --source dist` and outputs `/pagefind` assets used by `/search`.

## Zero‑Cost Notes

* No servers or databases. Everything runs client-side.

## Roadmap (later, still free)

* PWA offline shell for tools
* Content collections + schema
* Advanced rollers and random tables

## Smoke-test script

```bash
# 1) Start dev server, verify pages load
npm run dev  # open /, /rules/_index, /tools/roller, /tools/sheet

# 2) Build and serve dist, verify search works
npm run build
npx http-server dist -p 5050  # or python -m http.server 5050 -d dist
# open http://localhost:5050/search and confirm search results appear

# 3) Roller quick check
# a) attr=2 skill=3 tn=12 → roll until success/fail shown with margin
# b) toggle adv/dis and confirm highest/lowest used
# c) set seed='test-1' and confirm deterministic reroll

# 4) Sheet quick check
# change AGL, confirm Defense/Speed update; print preview = single page
```
