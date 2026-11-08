# Documentation and examples

Astro and Starlight serve the documentation and all 16 interactive examples. Run commands from the repository root:

```sh
npm ci --prefix docs
npm run dev
```

Open http://localhost:4321/react-modal-sheet/. To try examples on a phone on the same network, run `npm run dev -- --host` and open the printed network URL with `/react-modal-sheet/` appended.

```sh
npm run docs:check
npm run docs:build
npm run docs:preview
```

The static site is built into `docs/dist/`. Search is available in the production build and preview.

The root `format:check`, `format:write`, `lint:check`, and `lint:write` commands also cover the docs. Oxfmt formats Astro templates, React components, configuration, and Markdown/MDX. Oxlint checks JavaScript/TypeScript and Astro script blocks; `docs:check` checks Astro templates and types. Generated files are excluded.

## Fonts

Configure body and heading fonts in the `fonts` array in `astro.config.mjs`. The defaults are Google Fonts’ Geist and Geist Pixel, respectively. Astro downloads and serves the font files locally; `src/components/docs-head.astro` loads and preloads them.

Keep the `--font-body` and `--font-heading` variable names when switching font families. `panda.config.ts` connects them to Starlight’s `--sl-font` and the custom `--sl-font-heading` variable. Change `--sl-font-heading-weight` there if the replacement heading font needs a different weight; Geist Pixel uses 400.

## Content and examples

Edit documentation in `src/content/docs/` and navigation in `astro.config.mjs`. Keep documentation here; the root README links readers to the site.

Example components, hooks, and assets live in `src/examples/`. Register examples in `src/examples/registry.ts`; Astro generates their fullscreen routes at `/playground/<example>/`. React components use Panda’s `styled()` object syntax, with definitions at the end of each component file. Astro templates use named `css()` classes in the same file. `panda.config.ts` owns document-level resets and theme defaults. The official Panda Vite plugin regenerates styles on save; `prepare` generates the ignored `styled-system/` helpers and types during dependency installation. The only authored CSS file declares cascade layer order. Old playground hash bookmarks redirect to the static routes.

The docs import the library directly from the repository's `src/` through a Vite alias. Editing library code or examples updates the running previews through hot module replacement. A separate library build, package linking, and a second development server are unnecessary.

Desktop previews use isolated iframes so portals and modal effects operate on the example's root. Shared inline examples show only the launch control and sheet. Fullscreen examples add a Starlight-inspired heading, a scrollable skeleton dashboard, and one link back to the example gallery. Custom app layouts keep their own content. Touch devices open examples fullscreen. Use a physical phone for native gestures and keyboard behavior.

## Server rendering

Server rendering is covered by the library's Node tests in `../test/ssr.test.tsx`. They check open-sheet markup, root IDs, and closed-sheet behavior without a browser or framework application:

```sh
npm ci
npm run test:ssr
```

## GitHub Pages

The site is configured for `https://temzasse.github.io/react-modal-sheet/`, including the repository base path. To change its destination, update `site` and `base` in `astro.config.mjs` and absolute links in documentation content.

### Deploy from your computer

Install the docs dependencies, then publish from the repository root:

```sh
npm ci --prefix docs
npm run docs:deploy
```

The command checks and builds the current local docs, then commits and pushes the contents of `docs/dist/` to the `gh-pages` branch on `origin`. It uses your existing Git credentials and identity. Local source changes are included in the build without committing them to your working branch. The published branch contains a `.nojekyll` file so GitHub serves Astro and Pagefind assets correctly.

After the first publish creates the branch, open the repository's **Settings → Pages**. Set **Source** to **Deploy from a branch**, choose **gh-pages** and **/(root)**, and save. Subsequent runs of `npm run docs:deploy` update the site without dispatching the repository's deployment workflow.

### Deploy with GitHub Actions

Alternatively, select **GitHub Actions** as the repository's Pages source and manually run the **Documentation Pages** workflow. It checks and builds the pushed source, uploads `docs/dist/`, and deploys to the `github-pages` environment. The workflow runs only when manually dispatched, never on push or pull request. Use the Pages source setting that matches your chosen deployment method.
