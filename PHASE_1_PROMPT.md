# CODEX EXECUTION PROMPT — PHASE 1
## Zephyr Westlands — PROJECT FOUNDATION

**Phase:** 1 — PROJECT FOUNDATION  
**Prerequisite:** Phase 0 must be `SIGNED_OFF`. Read its approved technical decision, workspace baseline, asset/content registers and unresolved issues. If repository or stack differs from assumptions, follow the signed-off decision or stop for a decision update.  
**Required user sign-off phrase:** `APPROVE PHASE 1`

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


# PHASE 1 — PROJECT FOUNDATION

## Objective

Create/adapt the stable application shell and developer workflow. This phase establishes structure and reproducibility, not the finished design or complex interactions.

## Prerequisite gate

Phase 0 must be `SIGNED_OFF`. Read its approved technical decision, workspace baseline, asset/content registers and unresolved issues. If repository or stack differs from assumptions, follow the signed-off decision or stop for a decision update.

## Authorized scope — do these tasks only

### Required tasks

1. **Safe repository adaptation**
   - Inspect the current tree and Git status before edits. Preserve all user code and existing package manager/lockfile.
   - If a suitable app already exists, adapt it rather than recreating it.
   - Use the Phase 0 approved framework. If a new app was explicitly approved and Next.js App Router + TypeScript was selected, configure it in the confirmed directory. Do not initialise a second nested app accidentally.
   - Add only dependencies needed for this phase. No GSAP, carousel, map or form services unless already required by approved foundation decisions.

2. **Developer workflow**
   - Establish/verify scripts for dev, build, start, lint and type-check using the project's actual tooling.
   - Configure formatting and basic code quality only if compatible with the existing repository.
   - Document setup, environment prerequisites, install/start/build commands and expected ports.
   - Ensure secrets remain in ignored local environment files. Provide `.env.example` with variable names only if actually required; no real values.

3. **Application shell**
   - Create semantic document metadata, title/description placeholders grounded in approved content, language declaration, viewport setup and global layout.
   - Establish CSS reset, CSS variables/design token file using the approximate reference tokens from the blueprint. Mark values as reconstruction tokens, not original source values.
   - Establish the approved font-loading plan. Load actual approved licensed fonts if available; otherwise document a temporary fallback and do not claim a match.
   - Establish shared page container, section spacing primitives and responsive breakpoint tokens.
   - Create all 17 section shells with the exact order, unique IDs and meaningful placeholder labels/copy. They should not yet contain final detailed visual layouts.
   - Create the persistent Menu trigger shell and scroll-progress rail shell. Menu trigger must have button semantics, accessible name, visible focus and an appropriate initial `aria-expanded` state. Do not implement the navigation overlay behaviour here.
   - Establish anchor navigation and fixed-control scroll offset so section IDs can be reached without headings hiding behind controls.
   - Establish project structure for sections, chrome, shared UI, data, public media and docs, adapting to existing architecture rather than forcing the suggested tree.

4. **Responsive foundation**
   - Ensure shell layout works at all eight test widths: 360, 390, 414, 576, 768, 1024, 1280, 1440 CSS px.
   - No horizontal overflow. Mobile shell must stack; desktop shell may use wider containers. Avoid detailed art direction in this phase.

5. **Accessibility foundation**
   - Semantic landmarks, one meaningful page H1, logical heading order, skip link if appropriate, focus-visible treatment, button/link distinction and reduced-motion baseline.
   - Do not create inert-looking fake controls. Placeholder controls should be clearly non-operative and not misleading.

## Required deliverables

- Reproducible app shell in the approved workspace/framework.
- All 17 ordered section shells and anchor IDs.
- Shared global tokens/reset/container/breakpoint primitives.
- Menu trigger shell and scroll-progress rail shell.
- Developer setup/run/build documentation.
- Updated `docs/PROJECT_STATE.md`, decisions/issues and `docs/PHASE_1_PROJECT_FOUNDATION.md`.
- Test report and screenshots or browser captures for target widths.

## Validation and exit criteria

### Validation and exit criteria

- [ ] Phase 0 is recorded `SIGNED_OFF`.
- [ ] Existing repository/work is preserved; Git diff is reviewed.
- [ ] App starts with the documented command.
- [ ] Clean dependency install from the existing lockfile works (or limitation is documented and resolved before sign-off).
- [ ] TypeScript check passes (or equivalent type checker if stack is different).
- [ ] Lint passes; warnings are explained and approved if pre-existing.
- [ ] Production build passes.
- [ ] All 17 sections render in correct order with unique correct IDs.
- [ ] Anchor links land at the right section and fixed controls do not cover headings.
- [ ] Menu trigger is keyboard accessible with correct semantics; overlay behaviour is deferred.
- [ ] Scroll progress rail shell is present without blocking content; actual progress behaviour is Phase 3.
- [ ] No horizontal overflow at 360, 390, 414, 576, 768, 1024, 1280 and 1440 px.
- [ ] No broken imports, runtime errors or unhandled console errors.
- [ ] Setup instructions allow a fresh developer to run the project.

## Prohibited work in this phase

No finished section styling, no true navigation overlay, no carousels, no functional tabs/floor-plan selector, no map, no lead form/backend, no brochure integration, no privacy persistence, no visual optimisation. Only foundational shell and anchor behaviour.

## Final instruction to Codex

Execute Phase 1 only. Start by reading the current project state, previous phase report and open issues. Work in the actual VS Code workspace. Do not presume a file, asset, approval, integration or test exists until you verify it. Complete this phase's deliverables and tests, update all project records, then stop. If any mandatory criterion is unmet, report `BLOCKED` or `IN_PROGRESS` and ask for the precise missing input. If all criteria pass, report `READY_FOR_SIGN_OFF` and ask the user to reply exactly `APPROVE PHASE 1`. Do not start another phase in this run.
