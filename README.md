# StudyDesk

StudyDesk is a focused study portal for CSE and DA preparation. It combines structured checklists, formula references, and personal progress tracking in one fast, clean interface.

Live site: https://study-desk-da-cse.vercel.app

## What it includes

- Complete CSE and DA topic checklists
- Searchable formula books with rendered mathematical notation
- Separate name-based profiles with synced progress
- A remembered CSE or DA selection for each profile
- Responsive design for desktop and mobile

## Notes and progress

The study content is bundled from Markdown files in `data/`:

- `CSE_Full_Topic_Checklist.md`
- `CSE_Formula_Sheet.md`
- `DA_Full_Topic_Checklist.md`
- `DA_Formula_Sheet.md`

Progress and each profile's last selected study track are stored in a private Vercel Blob store. Profiles are intended for a small, trusted study group and use a name-only sign-in flow.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To use cloud sync locally, configure the same Vercel Blob and session-secret environment variables used by the deployed project.

## Quality checks

```bash
npm run build
```

The project uses Next.js, React, TypeScript, KaTeX, and Vercel Blob.
