import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Shell } from "@/components/workbench/Shell";
import { buildDoc } from "@/lib/workbench/parse";
import { actions, useWorkbench } from "@/lib/workbench/store";
import { CATEGORIES, type Category, type Doc } from "@/lib/workbench/types";

export const Route = createFileRoute("/import")({
  head: () => ({
    meta: [
      { title: "Import your macOS guides — Mac Setup Workbench" },
      {
        name: "description",
        content:
          "Add your local HTML macOS setup and troubleshooting guides. Files are parsed in your browser and never uploaded.",
      },
      { property: "og:title", content: "Import your macOS guides — Mac Setup Workbench" },
      {
        property: "og:description",
        content:
          "Parse local HTML manuals into guided, step-by-step workflows. Nothing leaves your Mac.",
      },
    ],
  }),
  component: ImportPage,
});

type Pending = { fileName: string; html: string; title: string; steps: number; category: Category };

function ImportPage() {
  const navigate = useNavigate();
  const { docs } = useWorkbench();
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<Pending[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  async function handleFiles(files: FileList | File[]) {
    setError(null);
    const list = Array.from(files).filter((f) => /\.x?html?$/i.test(f.name));
    if (!list.length) {
      setError("Those files weren't HTML guides. Choose .html or .htm files.");
      return;
    }
    const next: Pending[] = [];
    for (const file of list) {
      const html = await file.text();
      const probe = buildDoc(file.name, html, CATEGORIES[0]);
      next.push({
        fileName: file.name,
        html,
        title: probe.title,
        steps: probe.steps.length,
        category: guessCategory(file.name, probe.title),
      });
    }
    setPending((p) => [...p, ...next]);
  }

  function addAll() {
    const built: Doc[] = pending.map((p) => buildDoc(p.fileName, p.html, p.category));
    actions.addDocs(built);
    setPending([]);
    navigate({ to: "/" });
  }

  return (
    <Shell>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight">Import your guides</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Choose the HTML manuals already saved on your Mac. They are read and split into steps
          right here in the browser — nothing is uploaded, and no account or server is involved.
          Your progress and notes are stored locally too, so you can close the tab and pick up where
          you stopped.
        </p>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            void handleFiles(e.dataTransfer.files);
          }}
          className={`mt-8 rounded-xl border border-dashed px-6 py-12 text-center transition-colors ${
            dragging ? "border-primary bg-surface" : "border-border-strong bg-surface/60"
          }`}
        >
          <p className="text-sm font-medium">Drop HTML guides here</p>
          <p className="mt-1 text-xs text-muted-foreground">
            .html or .htm — one or several at a time
          </p>
          <button
            onClick={() => inputRef.current?.click()}
            className="mt-5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Choose files
          </button>
          <input
            ref={inputRef}
            type="file"
            accept=".html,.htm,text/html"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && void handleFiles(e.target.files)}
          />
        </div>

        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

        {pending.length > 0 && (
          <section className="mt-8 space-y-3">
            <h2 className="text-sm font-semibold">Ready to add</h2>
            {pending.map((p, i) => (
              <div key={p.fileName + i} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{p.title}</p>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {p.fileName} · {p.steps} steps detected
                    </p>
                  </div>
                  <button
                    onClick={() => setPending((list) => list.filter((_, j) => j !== i))}
                    className="text-xs text-muted-foreground transition-colors hover:text-destructive"
                  >
                    Remove
                  </button>
                </div>
                <label className="mt-3 block text-xs text-muted-foreground">
                  Category
                  <select
                    value={p.category}
                    onChange={(e) =>
                      setPending((list) =>
                        list.map((item, j) =>
                          j === i ? { ...item, category: e.target.value as Category } : item,
                        ),
                      )
                    }
                    className="mt-1 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground outline-none focus:border-ring"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            ))}
            <button
              onClick={addAll}
              className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Add {pending.length} guide{pending.length > 1 ? "s" : ""} to the workbench
            </button>
          </section>
        )}

        <section className="mt-10 rounded-lg border border-border bg-surface/60 p-5">
          <h2 className="text-sm font-semibold">How your files are handled</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>Files are read in the browser only — there is no upload, no server, no account.</li>
            <li>
              Headings become sections and steps; the original text, lists and code are kept in
              full.
            </li>
            <li>Progress, completed steps and notes live in this browser's local storage.</li>
            <li>Clearing browser data for this site removes the imported guides and your notes.</li>
          </ul>
        </section>

        {docs.length > 0 && (
          <p className="mt-6 text-xs text-muted-foreground">
            {docs.length} guide{docs.length > 1 ? "s" : ""} already imported.
          </p>
        )}
      </div>
    </Shell>
  );
}

function guessCategory(fileName: string, title: string): Category {
  const s = `${fileName} ${title}`.toLowerCase();
  if (s.includes("start")) return "Start Here";
  if (s.includes("search") || s.includes("index") || s.includes("spotlight"))
    return "Search and Indexing Troubleshooting";
  if (s.includes("download") || s.includes("desktop") || s.includes("organiz"))
    return "Downloads and Desktop Organization";
  if (s.includes("preview") || s.includes("app") || s.includes("custom"))
    return "Preview, Apps and Customization";
  return "Complete Connected macOS Working Manual";
}
