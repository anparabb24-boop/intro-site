# Intro Site

A Next.js personal site: static pages (Home, About, Contact) plus four
growing sections driven by Markdown files (Research, Badminton, Now).

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## How to add content (no code changes needed)

Each growing section reads every `.md` file in its folder under `content/`.
Add a new file, `git push`, and it appears on the site after the next
deploy.

| Folder                | Shows up on   | Frontmatter fields |
|------------------------|---------------|----------------------|
| `content/projects/`    | /research     | `title`, `date`, optional `links: [{label, url}]` |
| `content/reading/`     | /research     | `title`, `date` |
| `content/training/`    | /badminton    | `title`, `date` |
| `content/videos/`      | /badminton    | `title`, `date`, `youtube` (the video ID from the YouTube URL) |
| `content/now/`         | /now          | `title`, `date` |

Example file (`content/now/august-2026.md`):

```markdown
---
title: "August 2026"
date: "2026-08-01"
---

- **Reading:** ...
- **Working on:** ...
- **Training:** ...
- **Thinking about:** ...
```

For a video, the `youtube` field is just the ID from the URL:
`https://www.youtube.com/watch?v=ABC123` → `youtube: "ABC123"`.
Upload as **unlisted** on YouTube if you don't want it public-searchable —
it'll still embed fine.

Filenames don't matter (they just need to end in `.md` and be unique);
sorting is by the `date` field, newest first.

## Editing the static pages

`about.js`, `index.js`, and `contact.js` have inline placeholder text in
brackets — edit those directly in the file.

## Deploying (GitHub + Render)

1. Push this repo to GitHub.
2. In Render: **New → Blueprint**, point it at the repo. Render will read
   `render.yaml` and set everything up automatically (build command, start
   command, Node version).
3. Every `git push` to your main branch triggers an automatic redeploy.

No manual deploy steps after the first setup — adding a new Markdown file
and pushing is enough.

## Before going live

- Replace placeholder text in `about.js`, `index.js`, `contact.js`
- Replace email/LinkedIn/GitHub links in `contact.js`
- Add your resume PDF to `public/resume.pdf`
- Replace or remove the sample entries in `content/*/` (they're placeholders)
- Update `SITE_NAME` in `components/Layout.js`
