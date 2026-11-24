# CODEX EXECUTION PROMPT — PHASE 2
## Zephyr Westlands — VISUAL STRUCTURE

**Phase:** 2 — VISUAL STRUCTURE  
**Prerequisite:** Phase 1 must be `SIGNED_OFF`. Before starting, check the Phase 0 critical asset gate: every visual-critical asset must be physically present and validated, or a specific replacement must be explicitly USER-APPROVED. If any critical hero/crystal/architecture/interior/floorplan/icon asset is missing or rights-unverified without approved replacement, mark Phase 2 `BLOCKED` and do not silently use stock or video screenshots.  
**Required user sign-off phrase:** `APPROVE PHASE 2`

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


# PHASE 2 — VISUAL STRUCTURE

## Objective

Build all 17 visual sections to match the supplied desktop and mobile references using approved copy and approved assets. Interactions remain non-functional layout representations until Phase 3/4.

## Prerequisite gate

Phase 1 must be `SIGNED_OFF`. Before starting, check the Phase 0 critical asset gate: every visual-critical asset must be physically present and validated, or a specific replacement must be explicitly USER-APPROVED. If any critical hero/crystal/architecture/interior/floorplan/icon asset is missing or rights-unverified without approved replacement, mark Phase 2 `BLOCKED` and do not silently use stock or video screenshots.

## Authorized scope — do these tasks only

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

## Required deliverables

- Fully styled desktop/tablet/mobile implementations of the 17 sections.
- Approved media mapped in the asset manifest and integrated with correct crops/alt text.
- Data files for repeatable feature/amenity/category/media content where appropriate.
- Phase 2 before/after screenshots for all key sections at reference widths.
- Updated docs, issue/decision registers and `docs/PHASE_2_VISUAL_STRUCTURE.md`.

## Validation and exit criteria

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

## Prohibited work in this phase

No functional menu overlay, carousel state/drag, working interiors tabs, functional floorplan tabs/dropdown/lightbox, live 3D map, lead backend, brochure download service, privacy persistence or animation polish. These belong to later phases.

## Final instruction to Codex

Execute Phase 2 only. Start by reading the current project state, previous phase report and open issues. Work in the actual VS Code workspace. Do not presume a file, asset, approval, integration or test exists until you verify it. Complete this phase's deliverables and tests, update all project records, then stop. If any mandatory criterion is unmet, report `BLOCKED` or `IN_PROGRESS` and ask for the precise missing input. If all criteria pass, report `READY_FOR_SIGN_OFF` and ask the user to reply exactly `APPROVE PHASE 2`. Do not start another phase in this run.
