# Mac Setup Companion

Build a local-first tutorial-style Mac Setup Workbench for a MacBook Air user. This is not a passive reader. It should guide the user step by step through existing macOS setup/organization manuals and focused troubleshooting guides, with one actionable step at a time, clear section hierarchy, Back/Next, progress tracking, resume where left off, per-step notes, completion state, and contextual troubleshooting links. The user has existing HTML guides stored locally on their Mac, so the app must support importing/selecting local HTML files in the browser and parsing their headings/content into a guided workflow without uploading the files to a backend. Start with these source categories: Start Here, Complete Connected macOS Working Manual, Search and Indexing Troubleshooting, Downloads and Desktop Organization, and a shorter Preview/apps/customization guide. Preserve source detail rather than summarizing aggressively. Provide a dashboard showing sections and progress, a focused tutorial view, and a reference/read mode. Use a calm dark interface with restrained blue/purple accents, high readability on a 13-inch MacBook Air, low visual clutter, and no gamified look. The app should work as a standalone web app and be suitable for later PWA installation or Vercel deployment. Do not require user accounts or a database for the first version; keep progress and notes locally in the browser. Include a clear import screen and explain that files stay local. Build the first functional version now.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mac-setup-companion.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/00e93814-7e26-4b64-ba9b-74feff499084).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
