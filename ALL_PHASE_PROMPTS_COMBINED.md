# ZEPHYR WESTLANDS — ALL CODEX PHASE PROMPTS

> Reference copy only. Execute one phase prompt at a time. Do not ask Codex to run this whole file as one task.

# MASTER GOVERNANCE

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



---

# PHASE 0 — REFERENCE AND ASSET LOCK

**Prerequisite:** No prior phase. This is the required first phase.

## Objective

Discovery/readiness only. Establish source truth, current workspace baseline, page map, assets, rights, content approvals, integration requirements and unknowns. This is not an implementation phase.

## Authorized scope

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

## Deliverables

- Inspected workspace/environment/repository baseline report.
- Reconciled 17-section page map and desktop/mobile interaction/state inventory.
- Validated `docs/ASSET_MANIFEST.csv` and asset inventory/evidence folder.
- `docs/CONTENT_VERIFICATION.md` with provenance and approval states.
- `docs/OPEN_ISSUES.md` and `docs/DECISIONS.md`.
- `docs/PROJECT_STATE.md` with current phase, status, repository baseline and approval field.
- `docs/PHASE_0_REFERENCE_AND_ASSET_LOCK.md` complete report.
- Clear asset gate list: present and validated / missing / requested / rights-unverified / approved substitute.

## Exit criteria

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

## Prohibited scope

No Next.js app creation, no page/component implementation, no styling, no map implementation, no lead form, no integration, no speculative dependency installation, no Phase 1 code. Inspection/cataloguing scripts only if necessary.

**Required sign-off:** `APPROVE PHASE 0`. Stop after reporting.

---

# PHASE 1 — PROJECT FOUNDATION

**Prerequisite:** Phase 0 must be `SIGNED_OFF`. Read its approved technical decision, workspace baseline, asset/content registers and unresolved issues. If repository or stack differs from assumptions, follow the signed-off decision or stop for a decision update.

## Objective

Create/adapt the stable application shell and developer workflow. This phase establishes structure and reproducibility, not the finished design or complex interactions.

## Authorized scope

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

## Deliverables

- Reproducible app shell in the approved workspace/framework.
- All 17 ordered section shells and anchor IDs.
- Shared global tokens/reset/container/breakpoint primitives.
- Menu trigger shell and scroll-progress rail shell.
- Developer setup/run/build documentation.
- Updated `docs/PROJECT_STATE.md`, decisions/issues and `docs/PHASE_1_PROJECT_FOUNDATION.md`.
- Test report and screenshots or browser captures for target widths.

## Exit criteria

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

## Prohibited scope

No finished section styling, no true navigation overlay, no carousels, no functional tabs/floor-plan selector, no map, no lead form/backend, no brochure integration, no privacy persistence, no visual optimisation. Only foundational shell and anchor behaviour.

**Required sign-off:** `APPROVE PHASE 1`. Stop after reporting.

---

# PHASE 2 — VISUAL STRUCTURE

**Prerequisite:** Phase 1 must be `SIGNED_OFF`. Before starting, check the Phase 0 critical asset gate: every visual-critical asset must be physically present and validated, or a specific replacement must be explicitly USER-APPROVED. If any critical hero/crystal/architecture/interior/floorplan/icon asset is missing or rights-unverified without approved replacement, mark Phase 2 `BLOCKED` and do not silently use stock or video screenshots.

## Objective

Build all 17 visual sections to match the supplied desktop and mobile references using approved copy and approved assets. Interactions remain non-functional layout representations until Phase 3/4.

## Authorized scope

### Required tasks

1. **Visual system**
   - Build the desktop and mobile art direction from the supplied recordings: midnight navy, deep navy panels, distinct burgundy Interiors chapter, ice-blue controls, muted blue headings, hairline borders, tracked uppercase labels, thin/regular display typography and generous negative space.
   - Use the approved/licensed font files. If unavailable, apply only the user-approved fallback and record its impact.
   - Ensure headings/captions/CTAs remain HTML text, never baked into images.
   - Respect image focal points with explicit desktop/mobile crop settings. Use original approved source media and responsive formats.

2. **Implement all 17 section layouts in order**
   - Hero: desktop crystal / mountain / reflective-water identity and “CHOOSE EXTRAORDINARY” lock-up; mobile editorial visual as shown in the recording. Use approved media.
   - This Is Zephyr: approved description, residence facts and two CTA visual treatments.
   - Features: gemstone artwork plus The Residences, Building, Security and Parking groups; desktop side-by-side, mobile image first then two-column specification groups.
   - Arrive at Zephyr: arrival/exterior imagery and narrative.
   - Main Reception: editorial text plus large reception imagery and visual carousel shell.
   - Sunken Sanctuary: courtyard/water/landscape imagery and centred copy.
   - Amenities: 15 matching amenity illustrations. Mobile must form a 3×5 grid. Follow with lifestyle imagery and “A Day at the Spa”/other approved editorial labels.
   - Interiors: deep-burgundy visual chapter with large interior renders and visually represented 1-/2-bedroom controls; functional switching is deferred to Phase 3.
   - Executive Lounge, Floating Pool, Rooftop Bar & Residence Lounge: separate visual chapters; do not merge them into one generic amenity card.
   - Floor Plans: three visual tabs (1 Bedroom, 2 Bedrooms, Building floors), Standard floor selector and plan viewport using only validated plan assets; visual controls are non-functional pending Phase 3.
   - Why Westlands: bordered editorial category cards; include only verified/approved categories and text. Sixth card must not be invented.
   - Location: create the visual map frame/poster and accessible textual fallback. Do not initialise or implement the real map in Phase 2.
   - Lifestyle in Westlands: image montage and approved Shop/Work/neighbourhood content.
   - Developer/Team: approved GY Group identity/credits only; no invented staff.
   - Contact: artwork and approved contact details/CTA treatment; do not submit leads.

3. **Desktop/mobile compositions**
   - Desktop wide editorial canvas and asymmetrical two/three-column arrangements consistent with recordings.
   - Mobile uses the demonstrated vertical narrative and stacked image/text chapters, not simply scaled desktop.
   - Mobile Menu trigger remains visible in the observed ice-blue treatment; the open overlay function is Phase 3.
   - Keep section IDs and anchor order intact.

4. **Content and data**
   - Repeated features, amenities, categories and image-caption groups should be data-driven.
   - Use approved content register only. If copy is pending owner approval, use clearly identified draft/reference copy only in local preview, or omit it until approval. Never publish an unapproved claim.
   - Do not invent floor data, additional plan states, neighbourhood travel times or people/credits.

## Deliverables

- Fully styled desktop/tablet/mobile implementations of the 17 sections.
- Approved media mapped in the asset manifest and integrated with correct crops/alt text.
- Data files for repeatable feature/amenity/category/media content where appropriate.
- Phase 2 before/after screenshots for all key sections at reference widths.
- Updated docs, issue/decision registers and `docs/PHASE_2_VISUAL_STRUCTURE.md`.

## Exit criteria

### Validation and exit criteria

- [ ] Phase 1 is `SIGNED_OFF`.
- [ ] Every critical visual asset is present and validated or has a specific written user-approved substitute.
- [ ] All 17 sections are visually implemented in exact order.
- [ ] Desktop layouts reproduce the observed hierarchy, spacing, imagery and alignment.
- [ ] Mobile layouts are purpose-designed and reproduce the demonstrated stacking and 3×5 amenity grid.
- [ ] Interiors burgundy chapter is distinct and consistent.
- [ ] All displayed content is approved or clearly marked as draft for preview only; no fabricated claims.
- [ ] All critical imagery uses approved production assets; no arbitrary stock placeholders remain.
- [ ] Screenshots are captured at relevant desktop and mobile sizes and compared to reference.
- [ ] No broken/missing media, major layout shift, horizontal overflow or significant console errors.
- [ ] Visual-only controls are clearly treated as not yet interactive; no false behaviour is represented as working.
- [ ] Content differences are documented and approved.

## Prohibited scope

No functional menu overlay, carousel state/drag, working interiors tabs, functional floorplan tabs/dropdown/lightbox, live 3D map, lead backend, brochure download service, privacy persistence or animation polish. These belong to later phases.

**Required sign-off:** `APPROVE PHASE 2`. Stop after reporting.

---

# PHASE 3 — INTERACTIONS

**Prerequisite:** Phase 2 must be `SIGNED_OFF`. Read the interaction inventory and unknown states. Only implement observed or USER-APPROVED behaviour. For unknown details, choose a conservative accessible equivalent only if the user approved that equivalence in the decisions log; otherwise leave it out and request a decision.

## Objective

Implement the visible local UI interactions and accessible state behaviour. Do not implement external map, lead-capture or brochure integrations (Phase 4).

## Authorized scope

### Required tasks

1. **Global menu overlay**
   - Open/close from the persistent Menu control; close button; backdrop click if reference/approved; desktop hover artwork state where approved; responsive mobile overlay geometry based on available capture/approved interpretation.
   - Correct `aria-expanded`, accessible name, focus management/trap while modal-like, Escape close, focus return, background scroll lock and body state cleanup.
   - Menu links navigate to the correct IDs. Use smooth scrolling only if it does not violate reduced-motion.
   - Do not allow hover-only access; mobile/touch and keyboard are first-class.

2. **Scroll progress rail**
   - Calculate document progress safely; update on scroll and resize without costly layout loops. Avoid blocking content. Expose a meaningful accessible value only if treated as a progress indicator; otherwise mark decorative.

3. **Carousels**
   - Implement all confirmed reception, amenity/lifestyle and other section carousels using the project's chosen accessible carousel approach.
   - Desktop previous/next buttons; mobile swipe; correct slide/caption/alt text sync; disabled states at ends or approved loop behaviour; keyboard controls as appropriate; focus and screen-reader labels.
   - Do not introduce autoplay unless observed or owner-approved. If autoplay is approved, provide pause control and respect reduced motion.

4. **Interiors configuration selector**
   - 1-bedroom / 2-bedroom controls update active state, corresponding copy, image/gallery and related details together.
   - Do not invent the 2-bedroom image/copy. If state asset is missing, the corresponding control must be disabled/unavailable with honest explanation or Phase 3 must be blocked based on scope.

5. **Floor-plan interface**
   - Tabs: 1 Bedroom, 2 Bedrooms, Building floors. Use correct tab or button semantics and synchronized panel.
   - Implement only validated plan assets and owner-approved labels/options. Standard floor selector can show the observed Standard floor state (25 total; Block A 1–13; Block B 1–12) only if the project owner approves this copy.
   - Other floor options must be from supplied content, never invented.
   - Implement View larger as an accessible modal/lightbox only if its intended behaviour is confirmed or documented as an approved equivalent. Escape, close button, focus management and correct alt text required.

6. **General interaction quality**
   - Every visible control must perform its advertised local action or be disabled/removed until its later phase. No dead CTA presented as functional.
   - Ensure focus-visible, keyboard operation, proper labels/states, reduced-motion and touch behaviour.

## Deliverables

- Functional menu overlay, anchor navigation and progress rail.
- Functional accessible carousels and tab/selector state where approved data is available.
- Accessible floor-plan viewer/lightbox if approved.
- Interaction test plan and results; keyboard/focus evidence.
- Updated `docs/PHASE_3_INTERACTIONS.md`, PROJECT_STATE and issues/decisions.

## Exit criteria

### Validation and exit criteria

- [ ] Phase 2 is `SIGNED_OFF`.
- [ ] Menu opens/closes with pointer, touch and keyboard; Escape closes; focus returns; background scroll is handled.
- [ ] Every navigation item reaches the correct section and URL/hash behaviour is correct.
- [ ] Scroll progress accurately tracks scroll and does not cover content.
- [ ] Carousels update slide, image, alt text and caption together; arrows and mobile swipe work.
- [ ] No unapproved autoplay or hover-only interaction.
- [ ] Interiors selector updates image/copy/active state together or unavailable content is honestly blocked/disabled.
- [ ] Floor-plan tabs and approved floor selector states work and expose accessible selection semantics.
- [ ] View larger is keyboard-operable and focus-safe if included.
- [ ] Reduced-motion preference is respected.
- [ ] No dead controls, fabricated data, unhandled errors or accessibility-critical interaction failures.

## Prohibited scope

No 3D map or map provider, no real lead form/API/CRM, no brochure integration, no cookie/consent persistence, no production deployment. These belong to Phase 4 or 6.

**Required sign-off:** `APPROVE PHASE 3`. Stop after reporting.

---

# PHASE 4 — MAP AND CONVERSION

**Prerequisite:** Phase 3 must be `SIGNED_OFF`. Before coding, confirm explicit approved decisions for map provider/style/attribution/budget, lead fields/destination/consent/data owner, brochure file/public rights, contact data and analytics/cookie behaviour. If a required approval, asset, credential or provider term is missing, mark the relevant task BLOCKED and do not simulate it.

## Objective

Implement approved external/service-dependent functionality: neighbourhood map, lead capture, brochure, contact actions and privacy preferences where required.

## Authorized scope

### Required tasks

1. **Location map**
   - Use the Phase 0 approved provider. MapLibre GL JS is a recommendation only and may be used only with a production-approved style/tile source and terms.
   - Use verified and approved coordinates/labels for Zephyr, Emerald Springs and neighbourhood POIs. Never estimate coordinates from screenshots or invent landmarks.
   - Recreate dark visual style, map pitch/bearing/building treatment only to the extent supported by approved source/style capabilities. Controls must actually work: zoom, rotate, pitch/orientation, reset/home and any approved playback control.
   - Keep provider/OpenStreetMap attribution visible and correct. Comply with tile terms/rate limits and keep secrets server-side where applicable.
   - Load map lazily/near viewport or on interaction. Provide static poster, address and readable location list fallback for no WebGL, network or provider failure.
   - Do not claim this reproduces the original site's map engine.

2. **Priority List / lead capture**
   - Implement exactly the owner-approved fields, consent wording and destination. Do not add extra personal data.
   - Submit to approved CRM, email workflow or secure database using server-side endpoint/action. Never put provider secret keys in client bundle.
   - Validate client and server side; implement rate limiting/abuse protection, safe error handling and data minimisation appropriate to the approved destination.
   - Show success only after the server/integration confirms success. Network/provider failures must show accurate error and retry behaviour. Do not use a fake local success response.
   - Never send real personal data to a test destination without explicit approval. Use safe test data.

3. **Brochure**
   - Integrate the currently approved brochure PDF. Validate file is readable, current, approved for public distribution and downloadable/openable on mobile and desktop.
   - Use descriptive filename/label. No placeholder or unrelated document.

4. **Privacy / analytics**
   - If tracking/non-essential cookies are approved and used, implement a genuine settings/consent interface with correct categories, persistence, revocation and default behaviour according to owner-approved legal guidance.
   - If no non-essential technologies are used, remove/omit a misleading settings control and record why.
   - Do not invent privacy policy/legal copy or imply compliance without legal owner approval.

5. **Contact actions**
   - Confirm phone/email against approved source and implement `tel:` / `mailto:` links.
   - Verify contact links on desktop/mobile where possible.

6. **Operational configuration**
   - Add required environment variable names to `.env.example` without values; document local setup and production-only variables. Do not commit secrets.
   - Document provider limits, attribution, monitoring, error states and owner of integration.

## Deliverables

- Working approved map with functioning controls, attribution and fallbacks.
- Working owner-approved priority-list submission flow and honest success/error states.
- Current approved brochure integration.
- Real privacy-settings behaviour or documented reason for omission.
- Verified contact links.
- `.env.example` (names only), integration setup documentation and updated issue/decision logs.
- `docs/PHASE_4_MAP_AND_CONVERSION.md` and test evidence.

## Exit criteria

### Validation and exit criteria

- [ ] Phase 3 is `SIGNED_OFF`.
- [ ] Map provider/style/terms/attribution and exact marker data are approved and recorded.
- [ ] Map renders on supported browsers; approved controls operate; attribution is visible.
- [ ] Map fallback works when provider/network/WebGL is unavailable.
- [ ] Priority-list fields/destination/consent/data rules are owner-approved.
- [ ] Form validation and server-side failure/success paths are tested; success appears only after genuine confirmation.
- [ ] No secrets appear in client bundles, Git or logs.
- [ ] Brochure is the approved current file and works on desktop/mobile.
- [ ] Privacy settings correctly reflect actual trackers, or the unused control has been removed with approval.
- [ ] Phone and email are confirmed and functional.
- [ ] Network, provider failure, validation and retry scenarios are tested.
- [ ] All service/provider limitations are documented.

## Prohibited scope

No guessed map coordinates, unapproved paid map provider, fake lead success, dummy brochure, invented privacy terms, real lead submissions without explicit approval, production deployment. If approvals/credentials are missing, stay BLOCKED.

**Required sign-off:** `APPROVE PHASE 4`. Stop after reporting.

---

# PHASE 5 — VISUAL FIDELITY AND OPTIMISATION

**Prerequisite:** Phase 4 must be `SIGNED_OFF`. All visual sections and key interactions should exist. If a missing asset/content/integration prevents comparison, log it and request resolution; do not disguise the gap with unrelated content.

## Objective

Systematically compare the working site to desktop/mobile references, refine visual accuracy and improve performance, accessibility and responsive resilience without adding new product scope.

## Authorized scope

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

## Deliverables

- Visual discrepancy log with before/after evidence.
- Refined desktop/tablet/mobile experience.
- Media optimisation and loading notes.
- Performance measurement report with actual conditions and scores if available.
- Accessibility audit checklist/findings and remediation evidence.
- Updated `docs/PHASE_5_FIDELITY_AND_OPTIMISATION.md`, state, issues and test evidence.

## Exit criteria

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

## Prohibited scope

No new sections/features, no new business logic/integration, no content invention, no unapproved design changes. This is a refinement and optimisation phase, not scope expansion.

**Required sign-off:** `APPROVE PHASE 5`. Stop after reporting.

---

# PHASE 6 — FINAL QA AND DEPLOYMENT

**Prerequisite:** Phase 5 must be `SIGNED_OFF`. Confirm the owner has approved content, rights, privacy, integrations, domain/hosting and release owner. If production deployment is not authorised, complete release-readiness and preview validation only; clearly mark production deployment as NOT RUN/BLOCKED rather than claiming launch.

## Objective

Validate the production candidate end-to-end, secure its configuration, prepare release and rollback, deploy only after explicit deployment authorisation, and hand over the finished project.

## Authorized scope

### Required tasks

1. **Clean reproducibility**
   - Review final Git diff/status, branch and commit history. Confirm no accidental files, debug output, credentials, `.env` values or local artifacts are included.
   - Perform clean install using the committed lockfile in a clean environment where feasible.
   - Run lint, type check, unit/component, integration, end-to-end and production build commands that exist in the project. Do not add a large test stack solely for ceremony; fill genuine coverage gaps using project-appropriate tooling.

2. **Functional/regression testing**
   - Test menu and all anchors, scroll progress, every carousel/selector, floor-plan dialog, map controls/fallback, priority-list form, brochure, contact links and privacy behaviour.
   - Exercise empty/error/loading/success states and network/provider outages.
   - Confirm actual integration responses; do not rely on mocked success as production proof.

3. **Visual/device/browser matrix**
   - Run visual checks at 360, 390, 414, 576, 768, 1024, 1280 and 1440 CSS px.
   - Test supported modern desktop browsers and representative Android/iOS mobile profiles/devices available.
   - Check touch, keyboard-only, reduced motion, portrait/landscape where relevant, long content and slow network.

4. **Accessibility, SEO, security, privacy**
   - Run automated accessibility audits and manual keyboard walkthrough. Resolve critical/serious findings or obtain explicit written acceptance for non-blocking residual issues.
   - Validate title/description, canonical URL, Open Graph, robots/sitemap as appropriate, semantic headings, image alt text and no accidental noindex in production.
   - Verify no secrets in source/build artifacts; validate server endpoints, rate limiting, input handling, error redaction and dependency/security warnings.
   - Confirm legal/privacy text, cookie consent and lead handling align with owner approvals. No unsupported legal-compliance claim.

5. **Release configuration**
   - Confirm host, project settings, domain/DNS owner, runtime version, build command, output, required environment-variable names and secret storage method.
   - Check asset access, caching, redirects, headers, form/map provider production settings, analytics approval and monitoring/alert owner.
   - Create deployment checklist, smoke test checklist and rollback procedure with known-good commit/build.

6. **Deployment control**
   - Do not deploy, change DNS, point production domain, send real notifications or execute irreversible release actions without a distinct explicit user instruction: `AUTHORIZE PRODUCTION DEPLOYMENT`.
   - A phase sign-off phrase (`APPROVE PHASE 6`) is not by itself deployment authorisation.
   - If deployment is authorised, deploy the approved build only, record provider/deployment ID/URL/date, run post-deploy smoke tests and verify rollback route. Do not disclose secret values.
   - If no deployment authorization, produce a release-ready handover and state production deploy is NOT RUN; do not claim full live launch.

## Deliverables

- Complete final QA report with exact command results.
- Visual/browser/device and accessibility evidence.
- Security/privacy/SEO/performance review.
- Production configuration and environment-variable documentation without secret values.
- Deployment and rollback runbooks.
- Post-deployment smoke test evidence if deployment was separately authorised.
- Final source/asset/content approval and licence record.
- `docs/PHASE_6_FINAL_QA_AND_DEPLOYMENT.md` and final handover summary.

## Exit criteria

### Validation and exit criteria

- [ ] Phase 5 is `SIGNED_OFF`.
- [ ] Clean install succeeds from committed lockfile (or exception explicitly approved).
- [ ] Lint/typecheck/tests/build all run and pass, or deviations are clearly blocked/approved.
- [ ] All 17 sections and all interactive flows regression-tested.
- [ ] Network/provider failures, empty/loading/error states tested.
- [ ] Desktop/mobile viewport matrix and supported browser/device checks completed.
- [ ] Keyboard, reduced motion and accessibility audits completed; critical findings resolved.
- [ ] SEO metadata and indexing controls verified.
- [ ] No secret exposure; endpoints and dependencies reviewed.
- [ ] Content, asset rights, brochure, privacy and integrations have final approval records.
- [ ] Host/domain/environment configuration documented; no unauthorized DNS or production change.
- [ ] Rollback procedure documented and practical.
- [ ] If deployment separately authorised: deployment recorded and post-deploy smoke tests pass.
- [ ] If deployment not authorised: release readiness complete and production status honestly `NOT RUN`.
- [ ] Final handover/report is complete.

## Prohibited scope

No live deployment without separate explicit `AUTHORIZE PRODUCTION DEPLOYMENT`; no domain/DNS edits, no unapproved migrations, no unapproved lead/notification sends, no secrets printed, no unsupported launch claims.

**Required sign-off:** `APPROVE PHASE 6`. Stop after reporting.
