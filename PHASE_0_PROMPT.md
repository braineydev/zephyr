# CODEX EXECUTION PROMPT — PHASE 0
## Zephyr Westlands — REFERENCE AND ASSET LOCK

**Phase:** 0 — REFERENCE AND ASSET LOCK  
**Prerequisite:** No prior phase. This is the required first phase.  
**Required user sign-off phrase:** `APPROVE PHASE 0`

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


# PHASE 0 — REFERENCE AND ASSET LOCK

## Objective

Discovery/readiness only. Establish source truth, current workspace baseline, page map, assets, rights, content approvals, integration requirements and unknowns. This is not an implementation phase.

## Prerequisite gate

No prior phase. This is the required first phase.

## Authorized scope — do these tasks only

### Required tasks

1. **Workspace/repository baseline**
   - Identify the opened VS Code workspace root. Confirm it is the intended Zephyr project workspace; do not assume the current directory is correct.
   - Inspect existing files, app framework, routing, package manager, scripts, dependencies, lockfiles, Git branch/status/remotes/recent commits, environment files (names only; never print secrets), current app behaviour and existing uncommitted user work.
   - Record actual Node/runtime/package-manager versions from this machine, OS/shell and relevant browser/device constraints. Do not substitute versions from another environment.
   - If the repository is empty/nonexistent, record it and ask the user to confirm the intended project location. Do not initialise the app.

2. **Read supplied project references**
   - Locate and read the Technical Reconstruction Blueprint, Master Recreation Prompt, current Phase 0 Reference & Asset Lock package, both screen recordings/montages, and any owner-supplied asset/content pack.
   - If files are missing, list exact missing paths and request them. Do not say you inspected missing files.
   - Reconcile the existing Phase 0 report with this workspace. It previously recorded `P0-001` as blocked because the repository was not mounted in the earlier inspection session. Resolve this only after inspecting the actual VS Code workspace.

3. **Reference map**
   - Confirm all 17 sections and anchors in the Project Context above.
   - Record observed desktop navigation destinations: Home; Sunken Sanctuary; Amenities; Interiors; Executive Lounge; Rooftop Club; Floor Plans; Location; Team.
   - Document desktop/mobile composition differences and observed interactions. Explicitly list unknown states: mobile menu-open state; complete carousel slides/timing; 2-bedroom Interiors state; 2-bedroom Floor Plans state; all Building floors options; View larger behaviour; Explore Map destination/action; priority-list destination/form; brochure target; Privacy Settings behaviour.
   - Keep evidence labels. Do not invent missing states.

4. **Asset inventory and rights**
   - Validate the existing 42-record manifest if present; do not assume a listed asset physically exists. Expand/repair fields as required.
   - Inspect every available local image, SVG, font, video, PDF and plan file. Record dimensions, aspect ratio, format, file size, opening/validation outcome, source/owner, rights status, intended section, desktop/mobile crop/focal point and alt text.
   - Required critical groups: Zephyr wordmark/lockups; GY Group identity; crystal hero art/animation; hero night mountain/water environment and mobile editorial visual; exterior/arrival/reception/sanctuary/pools/lounge/rooftop renders; apartment interiors; 1-bedroom and 2-bedroom plans; Standard floor plan and any verified additional plans.
   - Required supporting groups: all 15 amenity icons; Westlands/lifestyle imagery; map style/markers/data; current approved brochure; privacy/legal copy; original licensed fonts.
   - Record availability as `PRESENT_VALIDATED`, `PRESENT_UNVALIDATED`, `REQUESTED`, `MISSING`, `RIGHTS_UNVERIFIED`, `APPROVED_SUBSTITUTE` or equivalent clearly defined states.
   - Public accessibility is not proof of a licence. Do not download/use assets in production without approval. A video frame is reference evidence, not a production asset.

5. **Content verification**
   - Maintain an entry for development description, location, residence types, 27 floors, three pools, Level 24 lounge, rooftop club, features, amenity names, Why Westlands cards, location/neighbourhood details, travel-time claims, team/developer credits, price/status, telephone and email.
   - Each entry must include exact content, source URL/file/timecode/page, checked date, evidence label, approval status and publish decision.
   - Recording copy remains draft until owner-approved. Recheck public facts and pricing when relevant. Do not silently reconcile conflicts.

6. **Functional discovery and decisions**
   - Determine/record priority-list form destination, approved fields, consent copy, lead recipient/system, data owner/access/retention and error/success requirements. Do not submit real personal data.
   - Locate the current brochure and record public-distribution approval.
   - Determine whether analytics/non-essential cookies are intended and whether privacy settings are genuinely needed.
   - Identify map requirements, desired 3D behaviour, exact verified marker coordinates/data, provider/style, attribution, terms, token handling and budget. Recording shows OpenStreetMap attribution but does not identify original engine/provider.
   - Record hosting/domain/DNS owner, preview/production environments and release authority. No deployment or DNS changes.
   - Confirm preferred technical direction only after repository inspection. Next.js App Router + TypeScript is recommended, not mandatory if an existing suitable codebase or user instruction says otherwise.
   - Confirm browser/device support and the viewport matrix: 360, 390, 414, 576, 768, 1024, 1280, 1440 CSS px.

7. **Risk and readiness registers**
   - Reconcile and maintain `docs/OPEN_ISSUES.md`, `docs/DECISIONS.md`, `docs/PROJECT_STATE.md`, `docs/ASSET_MANIFEST.csv`, `docs/CONTENT_VERIFICATION.md` and this phase report.
   - Each issue has ID, severity, effect, evidence gap, owner, exact required action and status. Make no undocumented P0 blocker.
   - Separate items that block Phase 0 sign-off from items that can remain explicitly tracked and block a later phase gate (for example, missing lead credentials may block Phase 4, while missing hero art blocks Phase 2 unless an exact substitute is approved).

## Required deliverables

- Inspected workspace/environment/repository baseline report.
- Reconciled 17-section page map and desktop/mobile interaction/state inventory.
- Validated `docs/ASSET_MANIFEST.csv` and asset inventory/evidence folder.
- `docs/CONTENT_VERIFICATION.md` with provenance and approval states.
- `docs/OPEN_ISSUES.md` and `docs/DECISIONS.md`.
- `docs/PROJECT_STATE.md` with current phase, status, repository baseline and approval field.
- `docs/PHASE_0_REFERENCE_AND_ASSET_LOCK.md` complete report.
- Clear asset gate list: present and validated / missing / requested / rights-unverified / approved substitute.

## Validation and exit criteria

### Validation and exit criteria

- [ ] Correct VS Code workspace/repository identified and inspected; framework, scripts, package manager, lockfile, Git state and existing user work recorded.
- [ ] Actual local runtime versions recorded (not guessed).
- [ ] Blueprint, master prompt and available recordings/source files inspected; missing sources listed precisely.
- [ ] All 17 page sections/anchors and desktop menu destinations recorded.
- [ ] Desktop/mobile differences and known/unknown interaction states documented.
- [ ] Every required asset category has a manifest entry and truthful availability/rights status; files labelled validated were actually opened/checked.
- [ ] Content verification records source/date/evidence label/approval for every material claim.
- [ ] Priority list, brochure, privacy/analytics, map, hosting and deployment decisions are recorded as approved or open.
- [ ] Risks and blockers have IDs, owners and actions; no P0 blocker is undocumented.
- [ ] Technical direction and viewport/browser support are documented.
- [ ] All Phase 0 documentation is internally consistent and readable.
- [ ] No Phase 1 code or app scaffolding was created.

**Important:** Assets or owner decisions may remain open at Phase 0 sign-off only when status, owner, impact and downstream gate are explicit. Phase 2 cannot pass its asset gate until every critical visual asset is physically present and validated or a specific substitute is explicitly approved. Phase 4 cannot pass without approved real integration destinations/credentials and legal/privacy requirements.

## Prohibited work in this phase

No Next.js app creation, no page/component implementation, no styling, no map implementation, no lead form, no integration, no speculative dependency installation, no Phase 1 code. Inspection/cataloguing scripts only if necessary.

## Final instruction to Codex

Execute Phase 0 only. Start by reading the current project state, previous phase report and open issues. Work in the actual VS Code workspace. Do not presume a file, asset, approval, integration or test exists until you verify it. Complete this phase's deliverables and tests, update all project records, then stop. If any mandatory criterion is unmet, report `BLOCKED` or `IN_PROGRESS` and ask for the precise missing input. If all criteria pass, report `READY_FOR_SIGN_OFF` and ask the user to reply exactly `APPROVE PHASE 0`. Do not start another phase in this run.
