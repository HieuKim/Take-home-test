# User Directory

User Directory is a small React application for quickly browsing an internal list of users. It displays each user&apos;s name, role, and status, with a name search, an All/Active/Inactive status filter, a result count, an empty state, and a one-click way to clear both filters.

## Requirements

- Node.js 20.16 or newer
- npm 10 or newer

The project uses React 18, Vite 6, Vitest, and React Testing Library.

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Run the test suite once:

```bash
npm test
```

## Structure and state

- `src/data/users.js` contains the local source data.
- `src/components/UserFilters.jsx` renders the controlled search and status controls.
- `src/components/UserList.jsx` renders the result count, user cards, and empty state.
- `src/App.jsx` owns the only two pieces of state: `searchQuery` and `statusFilter`. The displayed list is derived directly from the source data and those values during render.
- `src/styles.css` contains the responsive layout, visual styling, and visible keyboard focus states.

The data is intentionally local. Search matches any part of a user&apos;s name, ignores letter case, and trims leading/trailing whitespace. Search and status filtering are combined with AND logic.

## Limitations and possible improvements

The directory is a static in-memory example, so it does not persist changes or load users from a service. A production version could add an API-backed data layer, loading/error states, pagination for larger datasets, richer user profiles, and automated end-to-end browser coverage.

## AI usage

See [AI_USAGE.md](AI_USAGE.md) for the prompts, assistance summary, implementation adjustments, and checks recorded for this exercise.
