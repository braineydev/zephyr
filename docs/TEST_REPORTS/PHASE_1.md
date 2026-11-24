# Phase 1 Test Report - Project Foundation

**Date:** 2026-11-23 (Africa/Nairobi)  
**Environment:** Windows PowerShell 5.1.26100.9711, Node.js v24.15.0, npm 11.12.1, Google Chrome 157.0.8103.81.  
**App framework:** Next.js 16.4.6, React 19.3.1, TypeScript 6.0.3 (locked in `package-lock.json`).

| Check | Status | Exact command | Result / evidence |
|---|---|---|---|
| Phase 0 prerequisite | PASS | Read `docs/PROJECT_STATE.md`, `docs/PHASE_0_REFERENCE_AND_ASSET_LOCK.md`, `docs/TEST_REPORTS/PHASE_0.md` | Phase 0 `SIGNED_OFF`; owner approval recorded. |
| Framework choice | PASS | Read D-009 in `docs/DECISIONS.md` | Owner-approved Next.js App Router + TypeScript for the reconstruction. |
| Workspace baseline / preservation | PASS | `Get-Location; Get-ChildItem -Force; rg --files -uu; git status --short --branch` | Initial workspace had prompt pack/docs only and no `.git`; all initial files remain. No existing app/source to overwrite. Git diff: NOT RUN because there is no repository metadata; files were manually reviewed. |
| Clean install from lockfile | PASS | `npm.cmd ci` | Installed 347 packages from `package-lock.json`, exit 0. |
| Development server | PASS | `npm.cmd run dev -- --hostname 127.0.0.1` | Next.js reported Ready at `http://127.0.0.1:3000`. |
| Lint | PASS | `npm.cmd run lint` | ESLint completed with no warnings/errors. |
| TypeScript | PASS | `npm.cmd run typecheck` | `tsc --noEmit`, exit 0. |
| Production build | PASS | `npm.cmd run build` | Next.js compiled, typechecked, prerendered `/` and `/_not-found`, exit 0. |
| Production server response | PASS | `npm.cmd run start -- --hostname 127.0.0.1`; `(Invoke-WebRequest -Uri http://127.0.0.1:3000 -UseBasicParsing).StatusCode` | Server ready on port 3000; HTTP 200. |
| Browser layout/accessibility/anchors | PASS | `node docs/TEST_REPORTS/PHASE_1_BROWSER_CHECK.mjs` | Chrome DevTools Protocol at exact CSS widths 360, 390, 414, 576, 768, 1024, 1280, 1440; all overflow, section order, IDs, links, headings, focus, rail, anchor-offset, and runtime-error checks passed. Full measurements in `PHASE_1_BROWSER.json`. |
| Production captures | PASS | Same browser check command | Eight production captures written to `docs/SCREENSHOTS/phase1-{width}x900.png`. |
| Browser runtime/console errors | PASS | Same browser check command | No runtime exceptions or console errors were recorded. |
| Git diff | NOT RUN | `git diff --stat; git diff --` | Workspace is not a Git repository. No Git initialization/commit/push was authorized or performed. Initial inventory and final file set were reviewed manually. |

## Browser evidence details

- Every target CSS viewport matched the requested width. At desktop widths `documentElement.clientWidth` excludes the standard 15 px scrollbar, and both document/body `scrollWidth` equal `clientWidth`, indicating no horizontal overflow.
- The rendered section IDs and anchor links match the required 17-item order exactly; heading structure is one H1 followed by 16 H2s.
- The Menu control is reached by keyboard Tab, has a visible focus outline, button semantics, `aria-disabled="true"`, and initial `aria-expanded="false"`. Its menu overlay remains deferred.
- Every anchor target heading clears the fixed header. The decorative progress rail is present without claiming to track scroll.
- Chrome was launched for this run with port 9444 and a temporary ignored workspace profile. The profile and browser process were removed after capture.

No dependencies beyond the approved foundation stack were added. No assets, factual marketing copy, map integrations, lead handling, analytics, or later-phase interaction behavior were implemented.
