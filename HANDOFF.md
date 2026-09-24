# Mac Setup Companion — Agent Handoff

## Purpose

Mac Setup Companion is the durable, local-first guided execution layer for *MacBook Air: A Connected macOS Working Manual*. It is not merely a reader: it presents one bounded action at a time, gives the user a way to verify the outcome, and keeps only explicitly completed work in browser-local progress.

The repository is the source of truth. Lovable is historical deployment context only.

## Repository and safety rules

- Repository: `/Users/zaynab/Documents/github/mac-setup-companion`
- Branch: `main`, with the current work committed locally.
- Read `AGENTS.md` before changing history. Never force-push, rebase, amend, or squash published Lovable commits.
- Keep each batch working. Do not push, deploy, create infrastructure, change DNS, or add third-party services unless the user expressly authorizes it.
- Preserve the visual language: dark steel-gray surfaces with restrained blue and purple accents. No gamification, streaks, points, quizzes, or celebratory mechanics.

## Run it locally

```sh
cd "/Users/zaynab/Documents/github/mac-setup-companion"
~/.bun/bin/bun install
~/.bun/bin/bun run dev
```

Open the address shown in the terminal (normally `http://localhost:8080`).

## Required verification gates

Run these before committing a meaningful batch:

```sh
~/.bun/bin/bunx vitest run
~/.bun/bin/bunx tsc --noEmit
~/.bun/bin/bun run build
~/.bun/bin/bun run lint
```

The established lint baseline is zero errors and seven existing `react-refresh/only-export-components` warnings. Do not introduce additional warnings.

## Content architecture

- `src/content/manual.ts` is the ordered core-manual registry.
- `src/content/core/00.ts` through `src/content/core/40.ts` each own one core chapter.
- `src/content/companions.ts` owns the Start Here, Search, and Downloads/Desktop companions.
- `src/content/supplemental.ts` owns optional configuration-reference content.
- `src/lib/workbench/content-types.ts` defines the content schema.
- `src/lib/workbench/progress.ts` owns pure progress transitions and local-storage-compatible state behavior.

The complete core manual is already populated: 41 chapters (00–40), with 165 required core steps. Chapters 00–02 are historically sensitive; preserve their exact content, including the restored Chapter 01.2 receipt wording.

## Canonical-content rule

Use the canonical connected macOS manual as the wording authority. Instructional scaffolding may introduce or frame source text, but may not quietly replace, abbreviate, or paraphrase canonical prose. When a canonical source is unavailable, do not invent its content; report the precise missing source.

The project content model is intentionally small:

- Step types: `orient`, `do`, `decision`, `try`, `reference`
- Block types: `p`, `ul`, `ol`, `note`, `verify`, `caution`, `details`
- Optional material: `requiredForProgress: false`

Add a model extension only when it is clearly necessary and covered by tests.

## Non-negotiable progress behavior

- `lastCore` is updated only by core-manual visits. Companion visits must never overwrite it.
- **Next** navigates only. It must never mark the current step complete.
- Completion changes only through the explicit **Mark complete** control.
- Optional/reference steps do not count toward core totals or completion.
- Notes are optional and stay browser-local.
- Browser storage persists notes and progress; migrations must preserve compatible saved data.

Relevant regression coverage lives in:

- `src/lib/workbench/progress-actions.test.ts`
- `src/content/core-content.test.ts`
- `src/lib/workbench/inline-markup.test.ts`

Maintain coverage for companion resume behavior, Next behavior, explicit completion, optional-step totals, 00→01→02→03 sequencing, and local-storage migration.

## Current verified baseline

The last full verification passed:

- 25 Vitest tests
- TypeScript check
- production build
- lint with zero errors and the seven established warnings only

The prior commits completing the content and deployment preparation are:

- `124dbb0 content: modularize and populate core manual`
- `db6b6a0 chore: complete references and prepare deployment`

Run the verification gates again before relying on this baseline after any dependency or platform change.

## Suggested workflow for future changes

1. Read this file, `AGENTS.md`, and the relevant content/test modules.
2. Add or refine a regression test first when changing behavior.
3. Make the smallest coherent change.
4. Run focused tests, then all four verification gates.
5. Check the affected route at desktop and narrow mobile widths.
6. Commit a focused, descriptive batch; leave the tree working.

## Deployment status

The repository is pushed to [github.com/xyzaynab/mac-setup-companion](https://github.com/xyzaynab/mac-setup-companion) and connected to the Vercel project `zaynab4/mac-setup-companion`. The initial deployment is live at [mac-setup-companion.vercel.app](https://mac-setup-companion.vercel.app), with Vercel deployment protection enabled. Do not disable that protection, alter domains, or change other infrastructure without the user's express authorization.

For a future release, push a clean commit to `main`, verify the linked Vercel build, then manually check the dashboard, core flow, companion flow, notes, completion, persistence, and import/reference routes.
