# Complete Core Manual Design

## Goal

Complete Mac Setup Companion as the durable guided execution layer for the canonical *MacBook Air: A Connected macOS Working Manual*. Preserve the verified Chapter 00–02 behavior and visual language, add Chapters 03–40 without rewriting the source, harden navigation and persistence, and leave the repository ready for a later GitHub/Vercel deployment step.

## Source of truth

The canonical source is the local Markdown file:

`/Users/zaynab/Documents/Codex/2026-09-04/my-laptop-is-13-inches-and-2/outputs/connected-macos-manual/Connected macOS Working Manual.md`

It contains Chapters 00–40. Canonical chapter titles, paragraphs, lists, examples, cautions, and closing guidance must not be silently paraphrased. Instructional scaffolding may organize and surround source wording, but must not replace it.

The existing Chapter 00–02 content, including the restored Chapter 01.2 receipt wording from commit `7fe70c0`, is a protected baseline. The architecture refactor must not change its rendered content or behavior.

## Global constraints

- Follow `AGENTS.md`; never rewrite published Lovable history.
- Work on the existing `main` branch, as explicitly authorized by the user.
- Preserve the current dark steel-gray design with restrained blue and purple accents.
- Preserve the current content vocabulary: `orient`, `do`, `decision`, `try`, `reference`; and `p`, `ul`, `ol`, `note`, `verify`, `caution`, `details`.
- Add a content type only when the canonical source cannot be represented accurately with the existing model.
- `Next` navigates only. It never marks a step complete.
- Only an explicit completion control changes completion state.
- Companion visits and companion progress never overwrite `lastCore` or count toward core progress.
- Steps with `requiredForProgress: false` remain readable and optionally completable but never count toward core totals.
- Notes remain optional.
- Do not add quizzes, points, streaks, badges, or other gamification.
- Keep the working tree passing the relevant verification gates after each batch.
- Prepare deployment configuration and documentation only. Do not deploy or mutate external infrastructure without separate authorization.

## Architecture

### Chapter modules

Create `src/content/core/00.ts` through `src/content/core/40.ts`. Each file exports one complete typed `Unit`. A chapter module owns:

- its fixed chapter number and title;
- its phase and companion links;
- its source-backed summary, when one exists;
- its ordered guided steps;
- its required-versus-optional progress markers.

This keeps each auditable source unit in one place. It also prevents metadata and content from drifting across separate registries.

`src/content/manual.ts` becomes a small composition layer. It imports the 41 units in canonical order, exports `CORE_UNITS`, and retains phase ordering used by the dashboard. It must not contain chapter prose.

The temporary aggregate `src/content/core-00-02.ts` is removed only after 00, 01, and 02 have been moved into individual modules and regression tests prove the rendered data is unchanged.

### Source-to-step transformation

Each chapter is divided into a short sequence that follows the established pedagogy:

1. brief orientation;
2. a real action or bounded decision;
3. an observable result or verification where the source supports one;
4. continuation into the next useful action.

Canonical paragraphs and list items remain verbatim inside blocks. Step titles and short leads may provide navigational scaffolding when needed, but must not reinterpret the source. Reference-heavy material can use `details` and `reference` steps. Any such step that should not block the execution path is marked `requiredForProgress: false`.

Reversible practice is preferred. Potentially destructive or difficult-to-reverse actions receive source-backed cautions and, where appropriate, instructions to test on copies or bounded folders.

### Progress and persistence

The existing core progress store remains the owner of:

- completion by `unitId::stepId`;
- optional notes;
- `last`, the most recently visited unit of any kind;
- `lastCore`, the most recently visited core position.

Core visits update both `last` and `lastCore`. Companion visits update only `last`. Navigation does not mutate completion. Completion changes only through the explicit mark-complete action.

Migration accepts legacy persisted state, preserves known completion entries and notes, and seeds `lastCore` from a legacy core `last` only when `lastCore` is absent. Malformed or partial storage falls back safely without erasing valid fields that can be retained.

The imported-document store remains separate from the core manual progress store. The UX pass will verify both paths without merging their schemas.

## Content batches

Chapters are implemented and verified in this order:

1. Architecture and protected baseline: 00–02
2. Tags: 03–05
3. Search and retrieval: 06–09
4. Search repair: 10–13
5. Files in motion: 14–16
6. Capture and preview: 17–20
7. Across devices: 21–22
8. Windows and display: 23–28
9. Automation: 29–38
10. Workflows and upkeep: 39–40

Each batch is independently reviewable and leaves the application runnable.

## Regression strategy

Tests exercise observable behavior and data contracts rather than checking implementation text. The protected suite covers:

- Chapter 00–02 unit data remaining unchanged through the architecture refactor;
- canonical core order beginning 00 → 01 → 02 → 03;
- companion visits preserving `lastCore`;
- Next/navigation leaving completion unchanged;
- only explicit completion actions changing completion;
- optional steps being excluded from unit and core totals;
- companion completion being excluded from core totals;
- localStorage migration preserving completion, notes, `last`, and `lastCore`;
- every chapter having a unique unit id, unique step ids within the chapter, the canonical number/title, populated status, and at least one required step after completion;
- all companion ids resolving to real units.

Before any production behavior or architecture change, add the relevant failing or characterization test and observe the intended failure. Refactors use characterization coverage to prove the existing output is stable.

## Verification gates

Every logical batch runs:

1. the focused Vitest files for the batch;
2. the complete Vitest suite;
3. `bunx tsc --noEmit`;
4. `bun run build`;
5. `bun run lint`.

The baseline lint allowance is zero errors and the seven existing `react-refresh` warnings. New warnings are treated as regressions.

Commits are scoped by architecture, behavior hardening, or chapter batch. No commit is amended, rebased, force-pushed, or squashed into published Lovable history.

## End-to-end UX pass

After all core chapters are populated, verify the app as a connected workflow:

- dashboard progress uses required core steps only;
- resume returns to `lastCore`, not the last companion;
- chapter transitions follow canonical order;
- Next does not complete work;
- Mark complete changes only the active step;
- companion links are contextual and return safely to the core path;
- notes persist and remain optional;
- no core chapter displays a pending-source state;
- responsive layouts remain usable on a 13-inch MacBook Air and narrower screens;
- imported documents and reference routes still work;
- refresh/relaunch preserves progress and notes.

Visual changes are limited to fixes required by these flows. The established visual system is not redesigned.

## Deployment readiness

The repository remains the source of truth. The final preparation pass documents the production build command, expected output directory/runtime, environment requirements, and a Vercel connection path from GitHub. It may add repository configuration when needed for a reproducible deployment, but it does not connect accounts, publish a deployment, change DNS, or modify Lovable.

## Completion criteria

The project is complete for this scope when:

- all 41 core chapters are modular and populated from the canonical source;
- the protected behavior and persistence tests pass;
- the full UX pass has no unresolved functional blockers;
- tests, TypeScript, production build, and lint meet the verification gates;
- pending core-source states are gone;
- deployment instructions/configuration are ready but no external deployment has been performed;
- the working tree is clean and all commits are descriptive and non-destructive to history.
