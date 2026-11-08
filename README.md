# Shiva Shukla — Portfolio

React + Vite portfolio site.

## Run locally

Requires Node.js 20.19+ or 22.12+ (https://nodejs.org).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Linting & formatting

ESLint (with React, React Hooks and React Refresh rules) checks code quality. Prettier handles formatting. `eslint-config-prettier` stops the two from conflicting. Config files: `eslint.config.js` and `.prettierrc.json`.

```bash
npm run lint           # report lint problems
npm run lint:fix       # auto-fix what ESLint can
npm run format         # format all files with Prettier
npm run format:check   # check formatting without writing (useful in CI)
```

## Tests

End-to-end tests use Playwright (desktop Chrome + Pixel 7 mobile). The dev server starts automatically.

```bash
npx playwright install chromium   # first time only
npm test                          # run all tests
npm run test:ui                   # interactive runner
npm run test:report               # open the last HTML report
```
