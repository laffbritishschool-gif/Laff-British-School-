# Laff British Montessori School — Frontend

Production-ready Next.js frontend for the school's public website, student portal, result checker and ID-card experience.

## Stack
- Next.js + TypeScript
- Responsive CSS
- Static export for Render or any static host
- Backend/API integration point via `NEXT_PUBLIC_API_URL`

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
The static output is generated in `out/`.

## Included
Home, About, Principal's Message, Academics, Admissions, News, Events, Gallery, Staff, Contact, secure Result Checker UI, Student Login/Portal UI and printable Student ID Card preview.

The result checker and portal are intentionally UI-only until the separate backend/API is connected. Do not place secrets in frontend environment variables.

School logo is referenced from the supplied public image URL and can later be moved into `/public` when a binary asset is added to the repository.
