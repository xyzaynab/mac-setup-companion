import type { Unit } from "@/lib/workbench/content-types";
import { SUPPLEMENTAL } from "./supplemental";

/** Onboarding route into the core manual. Text is source-derived, verbatim. */
export const START_HERE: Unit = {
  id: "start-here",
  source: "start",
  title: "Start Here — the five-step first pass",
  summary: "A first pass through the system before working the manual chapter by chapter.",
  status: "populated",
  companions: ["search-flow", "downloads-flow"],
  steps: [
    {
      id: "orient",
      title: "1. Orient",
      lead: "Make Finder show you where things are.",
      body: [
        {
          kind: "p",
          text: "In Finder → Settings, show the Path Bar and filename extensions. Pin your real inbox (Downloads) and current project folders in the sidebar.",
        },
      ],
    },
    {
      id: "retrieve",
      title: "2. Retrieve",
      lead: "Prove retrieval works before building on it.",
      body: [
        {
          kind: "p",
          text: "Locate one known file by name, then by a phrase inside it (Command-F). Fix any demonstrated search problem before adding anything else—see the Search Flow sheet.",
        },
      ],
    },
    {
      id: "reduce-clutter",
      title: "3. Reduce new clutter",
      lead: "Give captures a destination, or no file at all.",
      body: [
        {
          kind: "p",
          text: "Set a real Screenshots folder from Screenshot toolbar → Options → Save to. Use Control plus the capture shortcut for a clipboard-only capture when you do not need a file.",
        },
      ],
    },
    {
      id: "one-queue",
      title: "4. Make one queue",
      lead: "One tag, one saved search.",
      body: [
        {
          kind: "p",
          text: "Create a Review tag in Finder → Settings → Tags. Save a Finder search for Review-tagged files as a Smart Folder you will actually reopen.",
        },
      ],
    },
    {
      id: "automate-one",
      title: "5. Automate exactly one repetition",
      lead: "Trust comes before triggers.",
      body: [
        {
          kind: "p",
          text: "Build one Shortcut around selected files, test it on copies, then attach a Folder or Time-of-Day trigger only after you trust it.",
        },
      ],
    },
    {
      id: "start-here-rule",
      title: "The Start Here rule",
      lead: "Keep the system this small until it behaves.",
      body: [
        {
          kind: "note",
          text: "One inbox (Downloads), a few named project folders, one Review tag, one saved search, and one selected-file Quick Action. Add automatic routing only after watching a rule behave correctly on copies.",
        },
      ],
    },
  ],
};

/** Contextual companion for the search chapters, especially 09–13. */
export const SEARCH_FLOW: Unit = {
  id: "search-flow",
  source: "search",
  title: "Search & Indexing: Troubleshooting Flow",
  summary: "Diagnose before repairing. Companion to core chapters 09–13.",
  status: "populated",
  steps: [
    {
      id: "known-file",
      title: "1. Establish one known file",
      body: [
        {
          kind: "p",
          text: "Navigate to it directly in Finder. Confirm its name, location, extension, and that it opens. Download it if it is cloud-only.",
        },
      ],
    },
    {
      id: "two-tests",
      title: "2. Test filename search, then phrase search, separately",
      body: [
        {
          kind: "p",
          text: "Use the same folder scope both times. Record which one fails; they diagnose different problems.",
        },
      ],
    },
    {
      id: "check-settings",
      title: "3. Check settings without resetting anything",
      body: [
        {
          kind: "p",
          text: "In System Settings → Spotlight, are the needed result categories enabled? Is the folder or disk on the Search Privacy exclusion list? Is Finder's own scope toggle correct?",
        },
      ],
    },
    {
      id: "match-symptom",
      title: "4. Match the symptom to its likely cause",
      body: [{ kind: "p", text: "Then apply only that fix." }],
    },
    {
      id: "reindex-small",
      title: "5. Reindex the smallest affected location",
      body: [
        {
          kind: "p",
          text: "If unresolved: Search Privacy → add the folder → wait → remove it → close Settings → allow it to reindex.",
        },
      ],
    },
    {
      id: "retest",
      title: "6. Repeat the tests from step 2",
      body: [
        {
          kind: "p",
          text: "If one is fixed but the other is not, treat that as a second problem rather than rebuilding again with the same theory.",
        },
      ],
    },
  ],
};

/** Execution companion for chapter 14 and related routing/automation chapters. */
export const DOWNLOADS_FLOW: Unit = {
  id: "downloads-flow",
  source: "downloads",
  title: "Downloads & Desktop: Organization Flow",
  summary: "Four roles, three tiers, and a safe migration order. Companion to chapter 14.",
  status: "populated",
  steps: [
    {
      id: "four-roles",
      title: "Define the four roles",
      lead: "Every file on the machine is doing one of these jobs.",
      body: [
        {
          kind: "ul",
          items: [
            "Inbox = arrival point; not yet decided → Downloads.",
            "Temporary workspace = currently active; will be filed or discarded soon → Desktop or a dated Working folder.",
            "Action queue = needs a decision or task before it is done → visible Review folder or Review tag.",
            "Permanent archive = decided, stable, and named for retrieval → Documents/Projects organized by project or area.",
          ],
        },
      ],
    },
    {
      id: "tier-minimal",
      title: "Tier 1 — Minimal",
      body: [
        {
          kind: "p",
          text: "Downloads as sole inbox; weekly five-minute pass by Date Added; inspect with Space; delete or move; no tags or automation.",
        },
      ],
    },
    {
      id: "tier-native",
      title: "Tier 2 — Native",
      body: [
        {
          kind: "p",
          text: "Add a Review tag, a Smart Folder scoped to Review + Downloads/Desktop, and a dated Working folder.",
        },
      ],
    },
    {
      id: "tier-automated",
      title: "Tier 3 — Automated",
      body: [
        {
          kind: "p",
          text: "Hazel rules for known file types and age-based review; exclude “Keep here.”",
        },
      ],
    },
    {
      id: "migration",
      title: "Safe migration order",
      body: [
        {
          kind: "ol",
          items: [
            "Clear Downloads first, then Desktop.",
            "Use a dated holding folder.",
            "Do not force every decision at once.",
            "Process batches of 10–20.",
          ],
        },
      ],
    },
  ],
};

export const COMPANION_UNITS: Unit[] = [START_HERE, SEARCH_FLOW, DOWNLOADS_FLOW, SUPPLEMENTAL];
