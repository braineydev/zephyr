# Phase 4 — Map and Conversion

**Status:** `BLOCKED`  
**Date:** 2026-11-24 (Africa/Nairobi)  
**Prerequisite:** Phase 3 is `SIGNED_OFF`; exact owner approval `APPROVE PHASE 3` is recorded in the Phase 3 report and project state.  
**Invocation:** Owner supplied the Phase 4 prompt and said `Proceed` on 2026-11-24.  
**Phase 4 sign-off:** Not requested; mandatory work is blocked by missing approved requirements and materials.

## Scope assessment

Research found a supported public-source contact handoff, which is implemented as GY Group Sales phone/email links and an outbound GY Group contact-page link. The replica does not collect or send lead data. Map tiles, exact project coordinates, direct lead processing, brochure, and privacy-policy behavior remain blocked; no values or successful integrations were fabricated.

The existing `#location` section explicitly states that it contains no verified coordinates or map tiles and has an accessible text fallback. Application source and dependency inventory found no analytics/tracking integration and no privacy-settings control. A repository scan found no local lead form, brochure PDF, or privacy-settings control. General GY Group Sales contact links and an external GY Group enquiry-page link are now present. The current preview has no analytics integration or non-essential cookie setting control; enabling a third-party map still requires an owner-reviewed request/privacy decision.

## Blockers and required owner inputs

| Workstream | Status | Required approval/material |
|---|---|---|
| Location map | BLOCKED | Select provider/style; approve attribution, usage terms and budget; supply verified coordinates and labels for Zephyr, Emerald Springs, and any POIs to include; identify provider credential handling if required. Tracked in P1-006. |
| Priority List / lead capture | BLOCKED | Approve exact fields, destination/CRM, consent wording, data owner, retention/deletion rules, and safe test-data authorization. Tracked in P1-003. |
| Brochure | BLOCKED | Supply the current PDF and confirm public distribution rights. No PDF exists under `public/`. Tracked in P1-004. |
| Contact actions | RESOLVED for general GY Group handoff | Official GY Group Contact page lists the direct line and email; a labelled external handoff is implemented. This does not establish a Zephyr-specific lead endpoint. See C-015, C-020 and PH4-001. |
| Privacy / analytics | BLOCKED for policy decision; current control correctly omitted | Confirm whether analytics or non-essential cookies will be used. If yes, supply approved privacy copy, categories, defaults, persistence/revocation requirements and legal owner approval. Current inventory found no such technologies; see D-015 and P1-005. |

The owner asked Codex to source these items. Research resolved a general GY Group contact route and identified a map candidate; exact coordinates, legal authority to accept provider terms, lead-processing details, and the official brochure remain unavailable.

## Decisions

- **D-015 — OBSERVED / RECOMMENDED:** no analytics or consent-manager integration is present in the inspected application/dependency files; keep a privacy-settings control absent while the preview uses no non-essential tracking. This is an inventory finding, not a legal-compliance claim.
- **Proposed, not yet owner-approved:** MapLibre GL JS + OpenFreeMap Dark public style. Public use is free and commercial use is allowed, but there is no SLA and service can change or stop; the owner must accept the terms/privacy implications before map initialization. See `docs/PHASE_4_SOURCE_RESEARCH.md`.
- Reference map landmarks remain observations only; no guessed coordinates are wired into markers. Publicly verified GY Group contacts are labelled as general group channels, not as a Zephyr-specific lead desk.

## Files changed

- Modified: `components/sections/story-section.tsx`, `docs/PROJECT_STATE.md`, `docs/OPEN_ISSUES.md`, `docs/DECISIONS.md`, `docs/CONTENT_VERIFICATION.md`.
- Added: `docs/PHASE_4_MAP_AND_CONVERSION.md`, `docs/PHASE_4_SOURCE_RESEARCH.md`, `docs/TEST_REPORTS/PHASE_4.md`.
- No map or local lead service was added; dependencies and public media were not changed. `.env.example` was not created because the external contact links require no environment variables and no map/lead provider is approved.

## Validation

See `docs/TEST_REPORTS/PHASE_4.md`. TypeScript, lint, production build, and static rendered contact-link checks passed. Map, local form, provider-failure, brochure and contact click-through browser tests are **NOT RUN**; the underlying materials/services are unavailable or not approved.

## Exit criteria

- [x] Phase 3 is `SIGNED_OFF`.
- [ ] Map provider/style/terms/attribution and exact marker data are approved and recorded — BLOCKED (P1-006).
- [ ] Map renders with functioning approved controls and visible attribution — BLOCKED (provider/data absent).
- [ ] Map fallback on provider/network/WebGL failure is validated — NOT RUN (no map provider initialized).
- [ ] Lead fields/destination/consent/data rules are owner-approved — BLOCKED (P1-003).
- [ ] Genuine server-side form success/failure paths are tested — BLOCKED (no approved destination or contract).
- [ ] Secret handling is validated for an integration — NOT RUN (no integration or secrets configured).
- [ ] Current public brochure is approved and validated on desktop/mobile — BLOCKED (P1-004; no PDF supplied).
- [x] No local analytics/non-essential tracker is installed and no misleading cookie-settings control is present. Map-provider request disclosure remains blocked pending provider acceptance/review (P1-005).
- [x] General GY Group phone/email are publicly verified and rendered as labelled `tel:` / `mailto:` links; an official external contact-page link is provided. Browser click-through at desktop/mobile widths remains NOT RUN. Zephyr-specific lead processing remains blocked (P1-003).
- [ ] Network/provider failure, validation and retry scenarios are tested — BLOCKED (integrations unavailable).
- [x] Candidate provider/service limitations are documented; final selected-provider limitations remain pending owner acceptance.

## Next permitted action

Remain in Phase 4. The general GY contact handoff is implemented. To continue map/lead/brochure work, the owner must accept the proposed map service terms and privacy implications and provide verified project coordinates; approve a local lead-processing contract if desired; and supply the current brochure with distribution rights. Do not request `APPROVE PHASE 4` or start Phase 5 while mandatory criteria remain unmet.
