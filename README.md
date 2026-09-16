# Mac Setup Companion

Mac Setup Companion is the local-first guided execution layer for _MacBook Air: A Connected macOS Working Manual_. It turns the complete 41-chapter manual into one bounded step at a time, with explicit completion, optional notes, contextual troubleshooting companions, and browser-local progress.

The repository is the source of truth. The project retains its Lovable history and must not have published commits rebased, amended, squashed, or force-pushed.

## Current scope

- Core Manual Chapters 00–40 are populated in `src/content/core/00.ts` through `40.ts`.
- The Start Here, search troubleshooting, Downloads/Desktop, and configuration-reference companions are populated.
- Core resume uses `lastCore`; visiting companions does not replace it.
- Next navigates without completing a step. Completion changes only through the explicit completion control.
- Optional reference steps do not count toward core progress.
- Notes and progress stay in the browser's local storage.
- Imported HTML is parsed locally in the browser and is not uploaded to a backend.

## Local development

The verified package manager is Bun 1.4.2 or newer.

```sh
bun install
bun run dev
```

The development server normally opens at `http://localhost:8080`.

## Verification

Run every gate before publishing changes:

```sh
bunx vitest run
bunx tsc --noEmit
bun run build
bun run lint
```

The established lint baseline is zero errors and seven `react-refresh/only-export-components` warnings in existing shared component files. New errors or warnings are regressions.

## Content architecture

`src/content/manual.ts` is the ordered registry for the core manual. Each core chapter owns its metadata and guided content in a separate module under `src/content/core/`.

The content model intentionally stays small:

- step types: `orient`, `do`, `decision`, `try`, `reference`
- blocks: `p`, `ul`, `ol`, `note`, `verify`, `caution`, `details`
- `requiredForProgress: false` for optional reference material

The application may add instructional structure around canonical source wording, but canonical prose must not be silently paraphrased.

## Vercel readiness

The repository includes `vercel.json` with explicit TanStack Start framework detection. The existing production build uses TanStack Start with Nitro; no database, account system, or required runtime secrets are present.

To deploy later, after explicit authorization:

1. Push the desired clean commit to GitHub.
2. In Vercel, import that GitHub repository.
3. Leave the detected framework as **TanStack Start** and use the repository defaults; no custom output directory is required.
4. Deploy a preview first.
5. Verify the dashboard, a core chapter, a companion, notes, completion, refresh persistence, and imported-document routes.
6. Promote the verified deployment to production.

Do not add secrets with a `VITE_` prefix unless they are intentionally public: Vite includes such values in browser code.

No Vercel project, DNS record, deployment, or other external infrastructure is created by this repository preparation.

## Historical Lovable deployment

The earlier Lovable build remains at [mac-setup-companion.lovable.app](https://mac-setup-companion.lovable.app). It is historical deployment context, not the development source of truth.
