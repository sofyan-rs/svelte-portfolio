# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev          # Start dev server
bun run build        # Build for production (outputs to .svelte-kit/cloudflare/)
bun run preview      # Build + run with Wrangler (local Cloudflare Workers simulation)
bun run check        # Type-check with svelte-check
bun run lint         # Prettier check + ESLint
bun run format       # Auto-format with Prettier
bun run deploy       # Build + deploy to Cloudflare Workers
bun run gen          # Regenerate Wrangler/Cloudflare types
```

No test suite exists in this project.

## Architecture

Single-page SvelteKit portfolio deployed to **Cloudflare Workers** via `@sveltejs/adapter-cloudflare`. The entire site is one route (`src/routes/+page.svelte`) with a shared layout (`+layout.svelte`).

**Data layer** — all content is static TypeScript in `src/lib/data/`:

- `project.data.ts` — `IProject[]` array; each entry has `type`, `techUsed`, `image`, `link`, `git`
- `skill.data.ts` — flat object with `languages`, `mobile`, `frontend`, `backend` string arrays
- `experience.data.ts` — `IExperience[]` array with `role`, `company`, `period`, `description`

To add/update content, edit only these data files — no backend or CMS involved.

**Component** — `src/lib/components/project-card.svelte` is the only reusable component. It uses Svelte 4-style `export let project` prop (not Svelte 5 runes). The main page mixes both styles: layout uses Svelte 5 `$props()`, page uses `$:` reactive declarations.

**Styling** — TailwindCSS v4 with custom theme tokens in `src/app.css`. Color palette is dark (`#0a0a0b` background, `#111113` cards, `#262626` borders). Custom fonts: Geist (sans), Geist Mono (mono), Plus Jakarta Sans (display).

**Project images** live at `static/img/ss-project/<filename>.webp`. The card falls back to a styled placeholder if the image fails to load.

**Deployment** — `wrangler.jsonc` targets Cloudflare Workers with `nodejs_compat` flag. The build artifact is `.svelte-kit/cloudflare/_worker.js`.

**mdsvex** is configured (`.svx` extension support) but not currently used — available for adding markdown-based pages/posts.
