# Gym Tracker — Frontend Starter (Milestone 1)

A Next.js App Router + TypeScript + Tailwind CSS v4 scaffold following the approved mobile-first design direction.

## Run locally

Prerequisites: Node.js 20.9+ (Node 22+ recommended), npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To typecheck: `npm run typecheck`; to lint: `npm run lint`.

## Current routes

- `/` — Home dashboard with a *development-only* mocked active-workout switch.
- `/workout` — workout logger placeholder.
- `/plans` — weekday plan overview using sample data.
- `/plans/edit?day=Mon` — plan editor placeholder.
- `/history` — history placeholder.
- `/profile` — profile placeholder.
- `/login` — Google-only login placeholder with an unauthenticated preview link.

## Design tokens

- Cream `#FFF9ED`, Soft Gold `#E8D3A8`, Champagne `#E3C28B`, Warm Taupe `#6B6254`, dark ink `#211F1B`.
- Sora headings, Space Grotesk body via `next/font/google`.
- Lucide icons, 48px controls, rounded cards.
- Mobile bottom navigation: Home · Plans · Add · History · Profile; desktop top navigation.

## IMPORTANT: Not implemented yet

This starter is **only milestone 1**. It does not implement Google authentication, backend integration, actual Save & Exit, workout data persistence, plans editing or the history calendar. The home "Active workout" toggle only saves a demo flag in localStorage and must not be mistaken for a saved workout. Do not use it with real workout data.

## Next milestones

1. Workout Logger: session state, recorded set cards, editors and localStorage draft recovery.
2. Plans editor and history calendar with real frontend state.
3. Spring Boot API, SQL storage, Google Identity Services, secure server sessions and cross-device Save & Exit.

## Development notes

Keep server-owned workout data and user authorizations on the Spring Boot API. Preserve localStorage only for local drafts and UX recovery. Enforce at most one active workout per user on the server. Workouts begin on first recorded set rather than opening the logger.

The first dependency installation may require internet access to download npm packages and Google fonts.
