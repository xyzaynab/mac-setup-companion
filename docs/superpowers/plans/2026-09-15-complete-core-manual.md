# Complete Core Manual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modularize and populate all 41 core chapters from the canonical manual, preserve core progress semantics, verify the complete UX, and prepare—but do not perform—a Vercel deployment.

**Architecture:** Each chapter exports one typed `Unit` from `src/content/core/NN.ts`; `manual.ts` only orders units and phases. Existing progress state remains the persistence boundary, while pure transition helpers make navigation/completion semantics directly testable. Content is transcribed from the canonical Markdown without paraphrasing.

**Tech Stack:** React 19, TanStack Start/Router, TypeScript, Vite, Vitest, Tailwind CSS 4, Bun.

**Spec:** `docs/superpowers/specs/2026-09-15-complete-core-manual-design.md`

## Global Constraints

- Preserve the exact Chapter 00–02 data, including Chapter 01.2 wording.
- Never rewrite published history; commits are additive on `main` as authorized.
- Canonical manual prose and lists remain verbatim.
- Next never completes; only explicit completion changes completion.
- Companions never overwrite `lastCore` or count toward core progress.
- Optional references never count toward core totals.
- No gamification and no visual redesign.
- Each task ends with focused tests and a clean scoped commit.
- Full gates after each content batch: Vitest, TypeScript, build, lint.

---

### Task 1: Protect Progress Transitions and Baseline Content

**Files:**
- Create: `src/lib/workbench/progress-actions.test.ts`
- Create: `src/content/core-content.test.ts`
- Modify: `src/lib/workbench/progress.ts`

**Interfaces:**
- Produces: `visitPosition(state, unitId, step): ProgressState`
- Produces: `setStepState(state, unitId, stepId, value): ProgressState`
- Protects: literal Chapter 00–02 snapshots and canonical 00→01→02→03 order.

- [ ] **Step 1: Write failing transition tests**

Add tests using literal states that prove a companion visit changes `last` but preserves `lastCore`, a core visit changes both, navigation alone leaves `steps` unchanged, and only `setStepState` changes the selected completion key.

- [ ] **Step 2: Run the focused tests and verify RED**

Run: `bunx vitest run src/lib/workbench/progress-actions.test.ts`
Expected: FAIL because the pure transition helpers do not exist.

- [ ] **Step 3: Implement minimal pure helpers and delegate store actions to them**

Keep the existing public `progressActions` API. Pure helpers return new state objects and preserve all unrelated fields.

- [ ] **Step 4: Add Chapter 00–02 characterization tests**

Use explicit expected ids, titles, step ids, optional ids, and the restored receipt list. The production change caught is lost/reordered baseline content during modularization.

- [ ] **Step 5: Run focused and full tests**

Run: `bunx vitest run src/lib/workbench/progress-actions.test.ts src/content/core-content.test.ts src/lib/workbench/core-progress.test.ts`
Expected: PASS.

- [ ] **Step 6: Commit**

Commit: `test: protect core progress and baseline content`

### Task 2: Split Chapters 00–02 into Modules

**Files:**
- Create: `src/content/core/00.ts`
- Create: `src/content/core/01.ts`
- Create: `src/content/core/02.ts`
- Modify: `src/content/manual.ts`
- Delete: `src/content/core-00-02.ts`

**Interfaces:**
- Each module produces a named `Unit` export (`chapter00`, `chapter01`, `chapter02`).
- `CORE_UNITS` remains an ordered `Unit[]` consumed by `library.ts`.

- [ ] **Step 1: Move Chapter 00 into a typed unit module**
- [ ] **Step 2: Run characterization tests**
- [ ] **Step 3: Move Chapter 01 and run characterization tests**
- [ ] **Step 4: Move Chapter 02 and run characterization tests**
- [ ] **Step 5: Replace row mapping with ordered unit imports and remove the aggregate file**
- [ ] **Step 6: Run Vitest, TypeScript, build, and lint**
- [ ] **Step 7: Commit**

Commit: `refactor: split core chapters into modules`

### Task 3: Populate Tags Chapters 03–05

**Files:**
- Create: `src/content/core/03.ts`
- Create: `src/content/core/04.ts`
- Create: `src/content/core/05.ts`
- Modify: `src/content/manual.ts`
- Modify: `src/content/core-content.test.ts`

**Interfaces:** Produces populated `Unit`s for canonical chapters 03–05.

- [ ] **Step 1: Add failing structural assertions for 03–05**
- [ ] **Step 2: Verify RED because chapters are pending**
- [ ] **Step 3: Transcribe Chapters 03–05 into guided steps with canonical wording**
- [ ] **Step 4: Verify optional reference steps do not affect totals**
- [ ] **Step 5: Run all gates**
- [ ] **Step 6: Commit**

Commit: `content: add tag chapters 03 through 05`

### Task 4: Populate Search and Retrieval Chapters 06–09

**Files:** Create `src/content/core/06.ts` through `09.ts`; modify `manual.ts` and `core-content.test.ts`.

- [ ] Add failing structural assertions for 06–09 and verify RED.
- [ ] Transcribe 06–09, preserving the explicit query, live-original, indexing, and iCloud availability distinctions.
- [ ] Retain `search-flow` companion links.
- [ ] Run all gates.
- [ ] Commit: `content: add search chapters 06 through 09`.

### Task 5: Populate Search Repair Chapters 10–13

**Files:** Create `src/content/core/10.ts` through `13.ts`; modify `manual.ts` and `core-content.test.ts`.

- [ ] Add failing structural assertions for 10–13 and verify RED.
- [ ] Transcribe diagnosis before repair, bounded repair, supplement choice, and app workflows.
- [ ] Keep read-only Terminal material optional and source-backed.
- [ ] Run all gates.
- [ ] Commit: `content: add search repair chapters 10 through 13`.

### Task 6: Populate Files in Motion Chapters 14–16

**Files:** Create `src/content/core/14.ts` through `16.ts`; modify `manual.ts` and `core-content.test.ts`.

- [ ] Add failing structural assertions and verify RED.
- [ ] Transcribe the location roles, native routing recipe, and Hazel rule ordering.
- [ ] Preserve reversibility and `downloads-flow` companion links.
- [ ] Run all gates.
- [ ] Commit: `content: add files in motion chapters 14 through 16`.

### Task 7: Populate Capture and Preview Chapters 17–20

**Files:** Create `src/content/core/17.ts` through `20.ts`; modify `manual.ts` and `core-content.test.ts`.

- [ ] Add failing structural assertions and verify RED.
- [ ] Transcribe screenshots, text layers, Quick Look/Preview, context menus, Services, and sharing.
- [ ] Mark extended reference material optional where it should not block progress.
- [ ] Run all gates.
- [ ] Commit: `content: add capture chapters 17 through 20`.

### Task 8: Populate Across Devices Chapters 21–22

**Files:** Create `src/content/core/21.ts` and `22.ts`; modify `manual.ts` and `core-content.test.ts`.

- [ ] Add failing structural assertions and verify RED.
- [ ] Transcribe iCloud location/availability/recovery and Continuity capability distinctions.
- [ ] Run all gates.
- [ ] Commit: `content: add across devices chapters 21 and 22`.

### Task 9: Populate Windows and Display Chapters 23–28

**Files:** Create `src/content/core/23.ts` through `28.ts`; modify `manual.ts` and `core-content.test.ts`.

- [ ] Add failing structural assertions and verify RED.
- [ ] Transcribe problem selection, Stage Manager, Spaces, tiling, displays, widgets/Focus, and Font Book.
- [ ] Preserve supplemental companion links for 27–28.
- [ ] Run all gates.
- [ ] Commit: `content: add windows and display chapters 23 through 28`.

### Task 10: Populate Automation Chapters 29–38

**Files:** Create `src/content/core/29.ts` through `38.ts`; modify `manual.ts` and `core-content.test.ts`.

- [ ] Add failing structural assertions and verify RED.
- [ ] Transcribe the cross-system model and automation ladder before tool-specific chapters.
- [ ] Transcribe Shortcuts, Quick Actions, Tahoe automations, Automator, AppleScript, shell, launchd, and worked ideas.
- [ ] Keep advanced scheduling/reference material optional where source pedagogy makes it non-core.
- [ ] Run all gates.
- [ ] Commit: `content: add automation chapters 29 through 38`.

### Task 11: Populate Workflows and Upkeep Chapters 39–40

**Files:** Create `src/content/core/39.ts` and `40.ts`; modify `manual.ts` and `core-content.test.ts`.

- [ ] Add failing assertions that all 41 chapters are populated, ordered, uniquely identified, and have required steps; verify RED.
- [ ] Transcribe complete workflows and setup/upkeep guidance.
- [ ] Verify there are no pending core units or unresolved companion ids.
- [ ] Run all gates.
- [ ] Commit: `content: complete workflows and upkeep chapters 39 and 40`.

### Task 12: End-to-End UX and Deployment Readiness

**Files:**
- Create: `src/routes/core-ux.test.tsx` or equivalent route/helper tests
- Modify: route/components only for observed defects
- Modify: `README.md`
- Create or modify: Vercel configuration only if the verified build requires it

**Interfaces:** The user-visible dashboard, focus route, companion route, persistence, import/reference routes, and production build.

- [ ] **Step 1: Add failing behavior tests for any uncovered UX defect**

Cover resume from `lastCore`, Next not completing, explicit completion, notes persistence, and chapter transition targets at the lowest real boundary that exposes each behavior.

- [ ] **Step 2: Run the app and inspect desktop and narrow responsive layouts**

Verify dashboard, every core chapter state, companions, notes, import/reference routes, and refresh persistence. Record only reproducible defects.

- [ ] **Step 3: Fix each observed defect test-first**
- [ ] **Step 4: Document GitHub→Vercel deployment without deploying**
- [ ] **Step 5: Run final Vitest, TypeScript, build, lint, and browser verification**
- [ ] **Step 6: Commit**

Commit: `chore: verify ux and prepare deployment`

### Task 13: Completion Review

**Files:** No planned production changes.

- [ ] Read the design and plan against the final diff.
- [ ] Confirm every requirement maps to a test, inspection result, or documented deployment step.
- [ ] Run `git diff --check` and the complete verification suite from a clean state.
- [ ] Use `superpowers:requesting-code-review` and address actionable findings.
- [ ] Use `superpowers:verification-before-completion` before reporting success.
- [ ] Confirm the tree is clean and report commits, verification results, and any external action intentionally not taken.
