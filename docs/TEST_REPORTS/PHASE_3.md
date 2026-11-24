# Phase 3 Test Report — Interactions

**Date:** 2026-11-24 (Africa/Nairobi)  
**Environment:** Windows workspace; Node.js v24.15.0; Next.js 16.4.6; Google Chrome 157.0.8103.81 headless over Chrome DevTools Protocol; production build served locally on `127.0.0.1:3003`.

| Test | Status | Exact command | Result |
|---|---|---|---|
| TypeScript | PASS | `npm.cmd run typecheck` | Exit 0; `tsc --noEmit` completed. |
| Lint | PASS | `npm.cmd run lint` | Exit 0; no lint findings. |
| Production build | PASS | `npm.cmd run build` | Exit 0; static routes `/`, `/_not-found`, and `/icon.svg` generated. |
| Local production HTTP | PASS | `node -e "fetch('http://127.0.0.1:3003').then(r=>console.log(r.status))"` | HTTP 200. |
| Browser interaction tests | PASS | `node docs/TEST_REPORTS/PHASE_3_BROWSER_CHECK.mjs` | All eight widths have no horizontal overflow; menu input/focus behavior, all nine anchors, 0–100 progress, pointer/keyboard carousel state, mobile swipe, no autoplay, reduced motion, and disabled unavailable controls pass. No browser errors or failed resource responses. See `PHASE_3_BROWSER.json`. |
| Keyboard/focus visual evidence | PASS | Captured by browser interaction script | `../SCREENSHOTS/phase3-menu-desktop.png` and `../SCREENSHOTS/phase3-menu-mobile.png`; focus trap/return details also recorded in JSON. |

The initial browser run found the browser's implicit `/favicon.ico` request. An empty preview icon was added, the production build was regenerated, and the final browser run reported no failed resource responses. The initial failed run is not used as final validation evidence.
