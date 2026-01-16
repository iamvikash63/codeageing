# Copilot instructions for agent contributors

> Purpose: concise, actionable guidance to help AI agents be productive immediately in this repository. Keep edits small and verifiable.

## Quick summary (one line)
- Describe the app and its primary language(s) here (e.g., "Monorepo with Node services + React frontend" or "Python Flask microservice"). Replace this line when you inspect top-level files.

## What to read first 🔭
- Top-level files to inspect: `package.json`, `pyproject.toml`, `requirements.txt`, `README.md`, `docs/`, `src/`, `cmd/`.
- Look for entry points: common names are `src/index.ts`, `src/main.py`, `cmd/server/*` — replace with actual files when discovered.

## Architecture & boundaries (what to capture)
- State the high-level components and how they communicate: e.g., "frontend (React in `packages/web/`) ↔ API (Node/Express in `services/api/`) via JSON REST".
- Note any non-obvious choices (database per service, message queue, library forks) and where config lives (e.g., `env/*.sample`, `deploy/`).

## Developer workflows (explicit commands) 🔧
- Installing deps: add exact command (example: `npm ci` or `pip install -r requirements.txt`).
- Build: add exact command (example: `npm run build` or `dotnet build`).
- Test: add exact command and any environment variables required (example: `npm test -- --runInBand`).
- Start locally: exact dev run command (`npm start`, `uvicorn app.main:app --reload`).

> When you identify build/test/start commands, replace the placeholders above with the literal commands found in `package.json`, CI config, or `README.md`.

## Project conventions & patterns to follow ✅
- Code style and linting: point to config (`.eslintrc`, `pyproject.toml`, `prettierrc`).
- Testing patterns: e.g., test directories (`tests/`, `__tests__/`), naming (`*.spec.ts`), test runners (Jest, pytest) and where to add unit vs integration tests.
- Error handling or retry patterns: note helper functions or middleware (e.g., `utils/retry.ts`)

## Integration points & external dependencies 🌐
- Databases, queues, and external services: list services and relevant config files (e.g., `docker-compose.yml`, `infra/`).
- Feature flags, secrets manager, or CI tokens: point to how they are referenced (env vars, `config/`, `vault/`).

## PR & change expectations ✍️
- Small, focused PRs with description and a test demonstrating the change.
- Add or update relevant tests and `CHANGELOG` entry when behavior changes.
- When proposing changes touching infra or CI, include checklist of manual validation steps.

## Example patterns (paste real snippets after review)
- Example: "HTTP handlers return typed results and use `validate()` helper in `src/lib/validation.ts`"
- Example: "DB access uses `db/queryBuilder.js` and transactions must use `withTransaction(tx => ...)`"

## How to fill / update this document
- After an initial scan, update the Quick summary and Developer workflows with concrete commands and file references.
- Add short examples (1-2 lines) showing how code is structured for common tasks (adding an endpoint, updating a DB migration).

---

If you'd like, I can now:
1) Scan your repository and fill the placeholders with real files/commands, or
2) Keep this template and wait for you to point me to top-level files.

Please tell me which option you prefer and, if option (1), either grant access to the code or paste the top-level file listing.
