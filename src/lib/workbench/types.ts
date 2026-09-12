export const CATEGORIES = [
  "Start Here",
  "Complete Connected macOS Working Manual",
  "Search and Indexing Troubleshooting",
  "Downloads and Desktop Organization",
  "Preview, Apps and Customization",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Step = {
  id: string;
  level: number;
  title: string;
  html: string;
  /** Titles of ancestor headings, outermost first. */
  path: string[];
};

export type Doc = {
  id: string;
  title: string;
  category: Category;
  fileName: string;
  importedAt: number;
  steps: Step[];
};

export type DocProgress = {
  completed: Record<string, true>;
  notes: Record<string, string>;
  lastStepIndex: number;
  updatedAt: number;
};

export type Progress = Record<string, DocProgress>;

export const emptyProgress = (): DocProgress => ({
  completed: {},
  notes: {},
  lastStepIndex: 0,
  updatedAt: Date.now(),
});
