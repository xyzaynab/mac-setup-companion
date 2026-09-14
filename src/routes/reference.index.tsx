import { createFileRoute, Link } from "@tanstack/react-router";
import { Blocks } from "@/components/workbench/Blocks";
import { Shell, SourceBadge } from "@/components/workbench/Shell";
import { UNITS, unitLabel } from "@/lib/workbench/library";
import { useWorkbench } from "@/lib/workbench/store";

export const Route = createFileRoute("/reference/")({
  head: () => ({
    meta: [
      { title: "Reference mode — Mac Setup Companion" },
      {
        name: "description",
        content:
          "Read the loaded source material straight through: core manual chapters, Start Here, and the search and downloads companions.",
      },
      { property: "og:title", content: "Reference mode — Mac Setup Companion" },
      {
        property: "og:description",
        content: "All loaded macOS manual source material, without completion UI.",
      },
    ],
  }),
  component: ReferencePage,
});

function ReferencePage() {
  const { docs } = useWorkbench();
  return (
    <Shell>
      <h1 className="text-[19px] font-semibold tracking-tight">Reference</h1>
      <p className="mt-1.5 max-w-[66ch] text-[13px] text-muted-foreground">
        Source material only — no steps to complete here. Chapters without loaded source text show
        their exact title and position.
      </p>

      <div className="mt-8 space-y-10">
        {UNITS.map((u) => (
          <section key={u.id} className="max-w-[66ch]">
            <div className="flex flex-wrap items-center gap-2">
              <SourceBadge source={u.source} />
              <Link
                to="/learn/$unitId"
                params={{ unitId: u.id }}
                search={{ step: 0 }}
                className="text-[11px] text-muted-foreground hover:text-foreground"
              >
                open in focus mode
              </Link>
            </div>
            <h2 className="mt-2 text-[15px] font-semibold leading-snug">{unitLabel(u)}</h2>
            {u.status === "pending" ? (
              <p className="mt-2 text-[13px] text-muted-foreground">Source content to be loaded.</p>
            ) : (
              <div className="mt-3 space-y-5">
                {u.steps.map((s) => (
                  <div key={s.id}>
                    <h3 className="text-[13.5px] font-medium">{s.title}</h3>
                    <div className="mt-1">
                      <Blocks blocks={s.body} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {docs.length > 0 && (
          <section className="max-w-[66ch]">
            <SourceBadge source="imported" />
            <h2 className="mt-2 text-[15px] font-semibold">Imported HTML sources</h2>
            <div className="mt-2 divide-y divide-border border-y border-border">
              {docs.map((d) => (
                <Link
                  key={d.id}
                  to="/read/$docId"
                  params={{ docId: d.id }}
                  className="block px-1 py-2 text-[13px] hover:bg-secondary"
                >
                  {d.title}
                  <span className="ml-2 text-[11px] text-muted-foreground">{d.fileName}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </Shell>
  );
}
