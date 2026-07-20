# StudyDesk — DA & CSE Study Portal

Run the portal:

```bash
cd /path/to/study-desk
npm run dev
```

Open `http://localhost:3000`.

## Notes source

The deployed portal reads its bundled DA notes from `data/`:

- `DA_Full_Topic_Checklist.md`
- `DA_Formula_Sheet.md`

When CSE notes are ready, add them to `data/` with these exact names, commit, and redeploy:

- `CSE_Full_Topic_Checklist.md`
- `CSE_Formula_Sheet.md`

Each student's checklist progress is saved separately in the browser on this device. It is not uploaded anywhere.
