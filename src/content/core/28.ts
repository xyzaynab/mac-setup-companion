import type { Unit } from "@/lib/workbench/content-types";

export const chapter28: Unit = {
  id: "ch-28",
  source: "core",
  chapter: "28",
  title: "Readability and Font Book",
  phase: "Windows and display",
  status: "populated",
  steps: [
    {
      id: "overview",
      type: "orient",
      title: "Overview",
      body: [
        {
          kind: "p",
          text: "Improve the actual reading conditions first, then choose a typeface you personally like within those improved conditions — not the reverse.",
        },
        {
          kind: "p",
          text: "Start with readable display scaling (System Settings > Displays), each individual app's own text-size setting where one exists, sufficient contrast, and a comfortable line length for the window width you're actually reading in. A newly installed font cannot change every part of macOS at once, and installing one does not replace the system interface typeface used throughout menus and system dialogs — a font you install is available to the apps that let you choose a font, not a system-wide visual overhaul. Different apps expose genuinely different font controls (some offer a full font panel, others only a fixed handful of preset sizes), so test the actual specific place you read most: your document editor, a particular note-taking app, your browser's reader mode, or a code editor — whichever is where you spend the most actual reading time.",
        },
      ],
    },
    {
      id: "install-a-small-useful-set",
      type: "do",
      title: "Install a small, useful set",
      body: [
        {
          kind: "p",
          text: "Font Book installs and validates font files, and can flag validation warnings for a corrupted or malformed font file before you rely on it. Open a downloaded font file directly, or add it through Font Book itself, and then explicitly enable it within any app that offers a way to choose which installed fonts it will show you. Keep your installed collection to the fonts you genuinely and actually use; deactivate unnecessary duplicates or one-off experiments in Font Book rather than letting every font menu in every app grow indefinitely longer over time.",
        },
        {
          kind: "p",
          text: "Atkinson Hyperlegible Next is a free option from the Braille Institute, released in multiple weights, with letterforms specifically differentiated to reduce confusion between commonly similar-looking characters. Its companion Mono variant is intended specifically for equal-width text such as code listings and tables, where consistent character width matters for alignment. Choose any typeface, this one included, by actually reading a familiar full paragraph in it at your normal working size, and by checking a specific test string such as `0 O 1 l I` at that same size to see how distinctly each character reads to you personally. Personal comfort is the real decision criterion here, and this manual makes no claim that any particular typeface treats or corrects ADHD or dyslexia as a condition — legibility improvements can help reading comfort for many people without being a treatment for anything.",
        },
      ],
    },
    {
      id: "portability-matters-here-too",
      type: "orient",
      title: "Portability matters here too",
      body: [
        {
          kind: "p",
          text: "A font installed on this Mac is not automatically also installed on an iPad, or on a collaborator's own computer, even if you're both looking at what's nominally the same document. An editable document format can typically substitute a different available font automatically if the specific recipient's system lacks the one you used — usually gracefully, but not always attractively. A properly exported PDF with genuinely embedded, permitted-for-embedding fonts is the reliable option when a document's exact visual appearance absolutely must remain stable regardless of what fonts the recipient happens to have installed. Check the individual font's license terms specifically before distributing font files themselves to someone else — many licenses restrict redistribution even when the license permits your own personal use freely.",
        },
      ],
    },
    {
      id: "reduce-repeated-setup",
      type: "try",
      title: "Reduce repeated setup",
      body: [
        {
          kind: "p",
          text: "Use an app's own document template feature, or its default new-document style, to preserve a chosen font, size, spacing, and color scheme once, rather than resetting all of that by hand every single time you start something new. That template approach often saves considerably more repeated effort in practice than a Shortcut attempting to restyle every new document after the fact through the app's interface would. Where you do want automation here, use it specifically to create a fresh copy of the correct template file and open that copy directly in the correct project folder — a much simpler and more reliable automation target than attempting to drive an app's styling interface directly.",
        },
        {
          kind: "note",
          text: '**WORKS WITH —** Font Book supplies and manages the font itself; the individual app controls the actual text styles applied within its documents; a saved template preserves your styling decisions for reuse; an exported PDF preserves a specific, stable delivery layout for sharing. These four are related capabilities, but each has a genuinely distinct responsibility — conflating them is a common source of "why doesn\'t this look the same on the other computer."',
        },
        {
          kind: "p",
          text: "Sources: Apple, [Font Book installation](https://support.apple.com/guide/font-book/install-and-validate-fonts-fntbk1000/mac) and [collections](https://support.apple.com/guide/font-book/organize-fonts-into-collections-fntbk1004/mac); Braille Institute, [Atkinson Hyperlegible](https://brailleinstitute.org/freefont). Undated; accessed September 6, 2026. [Font Book settings](https://support.apple.com/guide/font-book/welcome/mac) and [exporting fonts and licenses](https://support.apple.com/guide/font-book/font-book-licenses-fntbk1005/mac). Undated; accessed September 6, 2026.",
        },
      ],
    },
  ],
  companions: ["supplemental"],
};
