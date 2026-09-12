import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-sm font-semibold tracking-tight">Mac Setup Workbench</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/import">Import</NavLink>
          </nav>
          <span className="ml-auto hidden text-xs text-muted-foreground sm:block">
            Everything stays on this Mac
          </span>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8">{children}</main>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      className="rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      activeProps={{ className: "bg-secondary text-foreground" }}
    >
      {children}
    </Link>
  );
}

export function ProgressBar({ pct, tone = "primary" }: { pct: number; tone?: "primary" | "violet" }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
      <div
        className={`h-full rounded-full transition-[width] duration-300 ${
          tone === "violet" ? "bg-violet" : "bg-primary"
        }`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
