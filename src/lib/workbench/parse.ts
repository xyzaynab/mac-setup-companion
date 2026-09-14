import type { Category, Doc, Step } from "./types";

const BLOCKED = new Set(["SCRIPT", "STYLE", "LINK", "META", "IFRAME", "OBJECT", "EMBED", "BASE"]);

function sanitize(root: Element | DocumentFragment) {
  const all = root.querySelectorAll("*");
  all.forEach((el) => {
    if (BLOCKED.has(el.tagName)) {
      el.remove();
      return;
    }
    for (const attr of Array.from(el.attributes)) {
      const n = attr.name.toLowerCase();
      if (n.startsWith("on")) el.removeAttribute(attr.name);
      if (n === "style") el.removeAttribute(attr.name);
      if (
        (n === "href" || n === "src") &&
        attr.value.trim().toLowerCase().startsWith("javascript:")
      ) {
        el.removeAttribute(attr.name);
      }
    }
    if (el.tagName === "A") {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noreferrer noopener");
    }
  });
}

const slug = (s: string, i: number) =>
  `${i}-${s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)}`;

/**
 * Splits a local HTML guide into ordered steps: each heading (h1-h4) starts a
 * step that owns every element up to the next heading. Source markup inside a
 * step is preserved, only sanitized.
 */
export function parseHtmlToSteps(html: string): { title: string; steps: Step[] } {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const container = doc.querySelector("main") ?? doc.body;
  sanitize(container);

  const docTitle =
    doc.querySelector("title")?.textContent?.trim() ||
    container.querySelector("h1")?.textContent?.trim() ||
    "Untitled guide";

  const headings = Array.from(container.querySelectorAll("h1, h2, h3, h4"));
  const steps: Step[] = [];

  if (headings.length === 0) {
    return {
      title: docTitle,
      steps: [{ id: "0-document", level: 1, title: docTitle, html: container.innerHTML, path: [] }],
    };
  }

  // Intro content before the first heading.
  const intro: string[] = [];
  let node: ChildNode | null = container.firstChild;
  while (node && node !== headings[0]) {
    if (node.nodeType === 1) intro.push((node as Element).outerHTML);
    else if (node.nodeType === 3 && node.textContent?.trim())
      intro.push(`<p>${node.textContent}</p>`);
    node = node.nextSibling;
  }

  const stack: { level: number; title: string }[] = [];

  headings.forEach((h, i) => {
    const level = Number(h.tagName[1]);
    const title = h.textContent?.trim() || `Step ${i + 1}`;
    const body: string[] = [];
    let n = h.nextSibling;
    while (n && n !== headings[i + 1]) {
      if (n.nodeType === 1) body.push((n as Element).outerHTML);
      else if (n.nodeType === 3 && n.textContent?.trim()) body.push(`<p>${n.textContent}</p>`);
      n = n.nextSibling;
    }

    while (stack.length && (stack[stack.length - 1]?.level ?? 0) >= level) stack.pop();
    const path = stack.map((s) => s.title);
    stack.push({ level, title });

    steps.push({
      id: slug(title, i),
      level,
      title,
      html: (i === 0 ? intro.join("") : "") + body.join(""),
      path,
    });
  });

  return { title: docTitle, steps };
}

export function buildDoc(fileName: string, html: string, category: Category): Doc {
  const { title, steps } = parseHtmlToSteps(html);
  return {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    title,
    category,
    fileName,
    importedAt: Date.now(),
    steps,
  };
}
