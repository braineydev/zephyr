# CODEX EXECUTION PROMPT — PHASE 5
## Zephyr Westlands — VISUAL FIDELITY AND OPTIMISATION

**Phase:** 5 — VISUAL FIDELITY AND OPTIMISATION  
**Prerequisite:** Phase 4 must be `SIGNED_OFF`. All visual sections and key interactions should exist. If a missing asset/content/integration prevents comparison, log it and request resolution; do not disguise the gap with unrelated content.  
**Required user sign-off phrase:** `APPROVE PHASE 5`

## Project context and reference truth

# Project context: Zephyr Westlands

- Reference website: https://zephyr.ke/
- Developer reference: https://gygroup.ke/projects/zephyr and https://gygroup.ke/
- Mission: reconstruct the public-facing Zephyr Westlands experience as a high-fidelity, responsive, cinematic, single-page architectural brand website.
- Reference evidence: user-provided desktop and mobile screen recordings, the Technical Reconstruction Blueprint v1.0, the Master Recreation Prompt v1.0, and the Phase 0 Reference & Asset Lock package.
- Important distinction: these materials describe visible output. They do **not** establish Zephyr's original source framework, CMS, backend, database, API, map provider, analytics or hosting implementation.

## Evidence labels

Use these labels in all registers and reports:

- **OBSERVED** — visible in one or both user-supplied recordings.
- **PUBLICLY VERIFIED** — found on an official public source on the date checked.
- **USER-APPROVED** — explicitly approved by the user/project owner.
- **RECOMMENDED** — an engineering/design choice for this reconstruction, not a claim about the original site.
- **TO VERIFY** — not sufficiently established.

Never silently promote an observation, recommendation or assumption into approved project fact.

## Required 17-section single-page architecture

1. Opening film / hero — `#main-home`
2. This Is Zephyr — `#intro`
3. Features — `#features`
4. Arrive at Zephyr — `#arrival`
5. Main Reception — `#reception`
6. Sunken Sanctuary — `#sanctuary`
7. Amenities — `#amenities`
8. Interiors — `#interiors`
9. Executive Lounge — `#executive-lounge`
10. The Floating Pool — `#floating-pool`
11. Rooftop Bar & Residence Lounge — `#rooftop-club`
12. Floor Plans — `#floor-plans`
13. Why Westlands — `#why-westlands`
14. Location map — `#location`
15. Life Beyond Your Door / Lifestyle in Westlands — `#lifestyle`
16. Developer / Team — `#team`
17. Contact — `#contact`

Desktop menu destinations observed: Home; Sunken Sanctuary; Amenities; Interiors; Executive Lounge; Rooftop Club; Floor Plans; Location; Team. The page map and section anchors are more comprehensive than the desktop menu list; preserve both appropriately.

## Visual reference tokens (approximate; not verified original CSS)

- Midnight navy `#081B32`
- Deep navy surface `#102A46`
- Interiors burgundy `#2B0711`
- Ice-blue control `#DCE6FA`
- Display blue `#AFC4EB`
- Body text `#E2E8F2`
- Hairline border `rgba(174,196,235,.24)`
- Near-black media `#03070D`

Typography direction: clean geometric sans-serif; thin/regular uppercase display headings with pronounced tracking; small uppercase eyebrows; readable calm body text. Exact fonts are unknown until licensed font files are found and validated.

## Responsive reference rules

- Proposed breakpoints (RECOMMENDED): mobile 0–767 CSS px; tablet 768–1023; desktop 1024–1439; wide desktop 1440+.
- Test widths: 360, 390, 414, 576, 768, 1024, 1280 and 1440 CSS px.
- Desktop uses a wide editorial canvas, generous margins and asymmetrical columns.
- Mobile uses a deliberate single-column story flow, not a shrunken desktop layout.
- Features: artwork beside four grouped information sets on desktop; artwork first, then two-column feature groups on mobile.
- Mobile amenities: 3-column × 5-row grid for 15 matching amenity illustrations.
- Interiors keeps the distinct burgundy chapter and compact 1-/2-bedroom selector.
- Floor-plan tabs precede a centred mobile plan; building-floor selector and plan stack vertically.
- Why Westlands cards become a single column on mobile.
- Map is portrait-friendly on mobile, with visible attribution and a readable text/list fallback.
- Contact becomes a vertical stack on mobile.
- Mobile body text should generally remain 16–18 CSS px where practical, line-height 1.45–1.7. Touch targets at least 44×44 CSS px. No horizontal overflow.

## Content observations requiring approval before publication

The mobile recording contains copy stating Westlands Road, 1/2/3-bedroom residences, 27 residential floors, three pools at three heights, a Level 24 Executive Lounge and a rooftop club. These are OBSERVED reference statements, not owner-approved final claims.

The recordings show contact text `Westlands Rd / Nairobi`, `+254 768 699 999`, and `info@gygroup.ke`. Treat as OBSERVED pending confirmation.

As checked on 23 November 2026, the official GY Group site publicly advertised Zephyr as Coming Soon, with 1-, 2- and 3-bedroom residences from KES 8.8M. Price and availability are time-sensitive; re-verify immediately before publication and do not publish price/status without owner approval.

Mobile amenities labels observed: Concierge; Residence Lounge; Games Room; Red Light Therapy; Blue Light Therapy; Spa; Cinema; Kids Play Area; Gym; Yoga; Restaurant; Book Café; Creative Studio; Co-work; Boardroom.

The Standard floor state shows 25 residences: Block A 1–13 and Block B 1–12. Other floor states/plans must not be invented.

Visible map context includes Zephyr, Emerald Springs and Nairobi Street Kitchen. The recording shows OpenStreetMap contributor attribution, but does not establish the original map engine/provider.

Why Westlands categories include Education, Socialize/Escape, Work, Connectivity and Health; a sixth category is unconfirmed. Travel-time statements are marketing content and must be independently verified or omitted.

## Recommended technical direction (not original-source claims)

Preferred where repository inspection and owner approval support it: Next.js App Router + TypeScript; CSS variables and CSS Modules; GSAP + ScrollTrigger only for selected motion; Embla or an accessible custom carousel; MapLibre GL JS with an explicitly approved production tile/style provider; responsive AVIF/WebP images; video posters and reduced-motion fallbacks; server-side lead endpoint only after form destination and privacy requirements are approved; Vercel or another approved compatible host.

Do not force this stack onto an existing project if the inspected repository or user decision establishes another suitable direction. Do not claim this is Zephyr's original stack.


## Mandatory execution contract

# Mandatory Codex execution contract

You are executing a controlled, phase-gated reconstruction. This prompt authorizes **only the named phase**. Do not start, scaffold, partially implement, or prepare code for a later phase.

## A. Phase lock and approval

The only valid sequence is Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6.

At the beginning of this run:
1. Read `docs/PROJECT_STATE.md` before changing anything.
2. Read this project's governing master prompt/blueprint and all relevant current phase reports, open issues, decisions and test evidence that exist in the workspace.
3. Confirm that the immediately preceding phase is `SIGNED_OFF` (except Phase 0, which has no preceding phase).
4. Confirm that the user has explicitly invoked this named phase prompt.
5. If state is missing, contradictory, or does not prove the prerequisite, stop and reconcile/document the discrepancy. Do not infer approval.

A phase is not signed off because code was written, tests pass, or the user says “continue”, “next”, “looks good” or similar. Require the exact phrase `APPROVE PHASE N` from the user for that phase. Record the wording and date in `docs/PROJECT_STATE.md` and the phase report. A different phrase counts only when the user clearly and explicitly states that they are signing off the named phase; record it verbatim.

After presenting a `READY_FOR_SIGN_OFF` report, STOP. Do not begin the next phase in the same run, even if approval arrives during the same run. Wait for a fresh invocation of the next phase prompt.

## B. Allowed statuses

Use only: `NOT_STARTED`, `IN_PROGRESS`, `BLOCKED`, `READY_FOR_SIGN_OFF`, `SIGNED_OFF`.

A phase may be `READY_FOR_SIGN_OFF` only when every mandatory exit criterion is evidenced. If any mandatory item fails or is not run, use `BLOCKED` or `IN_PROGRESS`, explain why and fix it before requesting approval. Only explicit approval changes it to `SIGNED_OFF`.

## C. Scope discipline

- Work only on tasks in the named phase.
- Do not implement future-phase features early “while you are there”. Record future dependencies in `docs/OPEN_ISSUES.md` and defer them.
- Do not refactor unrelated code or remove user work.
- Inspect the actual workspace before edits. Preserve the existing framework, package manager, lockfile and conventions unless a documented, approved change is necessary.
- Do not install speculative dependencies. Explain why a dependency is needed before adding it.
- Do not overwrite source assets, replace brand artwork with generic stock, or use recording screenshots as production assets unless the project owner explicitly approves that exact fallback and usage rights are clear.
- Never fabricate project facts, coordinates, floor plans, team biographies, destinations, integration success or test results.
- Never expose secrets in source code, chat, logs or commits. Use local environment variables/secret stores and document required variable names without values.
- Do not commit, push, deploy, modify DNS, send real leads or contact third parties unless explicitly authorised for that action.

## D. Evidence and testing honesty

For every test, mark exactly one: `PASS`, `FAIL`, `NOT RUN`, `BLOCKED`. Record exact command, environment, result and concise output/evidence. A test not run is not a pass. Do not claim the original site's framework/backend is known unless independently established. Use side-by-side screenshots where visual claims are made. Record limitations honestly.

## E. Required project records

Maintain these in the repository, adapting existing files without destructive replacement:

- `docs/PROJECT_STATE.md` — authoritative current phase/status, branch/commit if applicable, completed work, tests, blockers, approval record and next permitted action.
- `docs/OPEN_ISSUES.md` — issue ID, severity/impact, evidence gap, owner, required action, proposed resolution and status.
- `docs/DECISIONS.md` — dated decision, evidence label, rationale, alternatives and approval.
- `docs/CONTENT_VERIFICATION.md` — content, source/date, evidence label and approval state.
- `docs/ASSET_MANIFEST.csv` — asset ID, path/name, type, dimensions, ratio, source/owner, rights, section, desktop/mobile crop/focal point, alt text, availability and validation status.
- `docs/PHASE_N_[NAME].md` — phase report.
- `docs/TEST_REPORTS/` and `docs/SCREENSHOTS/` — relevant evidence.

Do not reset or erase earlier phase records. Update them append-only where practical and preserve signed-off history.

## F. End-of-phase report

At the end, provide:
1. Phase name and status.
2. Scope completed / not completed.
3. Files created or modified.
4. Decisions (with evidence labels).
5. Tests run with exact commands and PASS/FAIL/NOT RUN/BLOCKED results.
6. Visual/log evidence paths where relevant.
7. Defects, blockers and deferred items.
8. A tick-box exit-criteria list; every mandatory criterion must be checked before `READY_FOR_SIGN_OFF`.
9. Explicit sign-off request using `APPROVE PHASE N`.
10. Next permitted action: remain in this phase until sign-off; after sign-off, stop and wait for the next phase prompt.

Be practical and concise in progress updates. Do not spend time narrating routine actions. If blocked, ask only for the smallest specific missing decision/material. Do not silently bypass a gate.


# PHASE 5 — VISUAL FIDELITY AND OPTIMISATION

## Objective

Systematically compare the working site to desktop/mobile references, refine visual accuracy and improve performance, accessibility and responsive resilience without adding new product scope.

## Prerequisite gate

Phase 4 must be `SIGNED_OFF`. All visual sections and key interactions should exist. If a missing asset/content/integration prevents comparison, log it and request resolution; do not disguise the gap with unrelated content.

## Authorized scope — do these tasks only

### Required tasks

1. **Controlled visual comparison**
   - Use the supplied desktop/mobile recordings and selected frame references. Identify matching scroll/section positions and capture screenshots at the agreed CSS viewport widths.
   - Compare hero, intro, features, arrival, reception, sanctuary, amenity grid/gallery, Interiors, lounge/pool/rooftop, floor plans, Why Westlands, map, lifestyle/team and contact.
   - Tune typography family/weight/size/tracking, line breaks, content widths, section height, padding, alignment, negative space, border treatment, background transitions, image crop/focal point and CTA geometry.
   - Keep a visual discrepancy log with severity, reference screenshot, current screenshot, proposed fix and status. Fix high-impact mismatches first.
   - Do not claim pixel-perfect parity if source dimensions, font assets or unobserved states are unavailable. Document approved tolerances.

2. **Motion and media performance**
   - Refine scroll choreography/section transitions sparingly; remove jitter, excessive motion and layout-affecting animation.
   - Ensure hero video has poster fallback, correct loading/preload, no audio autoplay and reduced-motion/static behaviour.
   - Convert/serve responsive image variants (AVIF/WebP where appropriate), preserve quality and focal point; lazy-load non-critical media.
   - Reserve image/video dimensions/aspect ratios to reduce CLS. Avoid eager loading all carousels/media.
   - Defer map initialisation until needed; split optional code where measurable.

3. **Runtime and bundle review**
   - Inspect production build output, client/server boundaries, JS bundle and third-party dependencies.
   - Remove unused packages/code only when safe and within current scope. Avoid unnecessary hydration/client components.
   - Measure representative desktop/mobile performance using available tools. Record actual device/profile, network, date and limitations; do not invent Lighthouse/Core Web Vitals scores.

4. **Accessibility and responsive audit**
   - Review semantic landmarks, heading sequence, keyboard order, focus visibility, modal focus, labels, button names, contrast, alt text, touch target size, reduced motion, status messaging and map text fallback.
   - Test all eight widths: 360, 390, 414, 576, 768, 1024, 1280, 1440 px. Include at least one narrow mobile and one desktop browser/device profile.
   - Check long text, loading states, missing image fallback and menu/overlay at smaller heights.
   - No horizontal overflow, clipped controls or unreadable content.

## Required deliverables

- Visual discrepancy log with before/after evidence.
- Refined desktop/tablet/mobile experience.
- Media optimisation and loading notes.
- Performance measurement report with actual conditions and scores if available.
- Accessibility audit checklist/findings and remediation evidence.
- Updated `docs/PHASE_5_FIDELITY_AND_OPTIMISATION.md`, state, issues and test evidence.

## Validation and exit criteria

### Validation and exit criteria

- [ ] Phase 4 is `SIGNED_OFF`.
- [ ] All 17 sections compared with supplied references at agreed sizes.
- [ ] High-impact visual discrepancies fixed or explicitly accepted/documented.
- [ ] Desktop/mobile screenshot evidence is attached and indexed.
- [ ] No critical/broken media, obvious crop errors or horizontal overflow.
- [ ] Hero video/poster and reduced-motion fallback work.
- [ ] Non-critical media lazy loads; dimensions reserved; map initialisation deferred.
- [ ] No severe/critical accessibility defects remain; manual keyboard walkthrough complete.
- [ ] Touch targets/contrast/alt text/heading hierarchy reviewed.
- [ ] Performance metrics recorded honestly for representative profiles; no unsupported score claims.
- [ ] Earlier signed-off interactions and integrations pass regression checks.
- [ ] Final known deviations and user-approved tolerances documented.

## Prohibited work in this phase

No new sections/features, no new business logic/integration, no content invention, no unapproved design changes. This is a refinement and optimisation phase, not scope expansion.

## Final instruction to Codex

Execute Phase 5 only. Start by reading the current project state, previous phase report and open issues. Work in the actual VS Code workspace. Do not presume a file, asset, approval, integration or test exists until you verify it. Complete this phase's deliverables and tests, update all project records, then stop. If any mandatory criterion is unmet, report `BLOCKED` or `IN_PROGRESS` and ask for the precise missing input. If all criteria pass, report `READY_FOR_SIGN_OFF` and ask the user to reply exactly `APPROVE PHASE 5`. Do not start another phase in this run.
