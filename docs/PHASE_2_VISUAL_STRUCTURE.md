# Phase 2 — Visual Structure

**Status:** `SIGNED_OFF`  
**Date:** 2026-11-23 (Africa/Nairobi)  
**Phase 1 prerequisite:** `SIGNED_OFF`; exact `APPROVE PHASE 1` recorded in the state and Phase 1 report.  
**Owner direction:** temporary online substitutes authorized on 2026-11-23 while official Zephyr assets are pending. See D-011 and `docs/ASSET_CREDITS.md`.
**Owner sign-off:** `laets approve phase 2 and move to phase 3 for now` — 2026-11-23. The project owner accepted the documented known deviations in PH2-001 to proceed; they remain unresolved and are not represented as corrected.

## Scope completed

- Implemented all 17 section compositions in the required order, preserving IDs and anchors.
- Added responsive visual treatment, dark navy palette, burgundy interiors chapter, preview banner, draft content notices, and responsive image crops.
- Added ten Pexels stock photographs under the Pexels license and custom inline SVG illustrations for the 15 amenity labels. Every temporary photograph is captioned as illustrative and not Zephyr property photography. Generic plan image is explicitly marked not a Zephyr floor plan.
- Added data-backed section order, feature/amenity/category groups, map placeholder without coordinates, and developer shell without invented people.
- Kept tabs and Menu visibly nonfunctional; no live map, carousel, lead collection, brochure behavior, or animation implementation.
- Captured all eight responsive viewport widths plus each of the 17 sections at 390px and 1440px. Captures are under `docs/SCREENSHOTS/`.

## Reference review and mismatches found

Recordings were found in `public/media/`: `20261120-1229-16.2553657.mp4` (1002×1032, 58.97s) and `zephyr_mobile.mp4` (576×1280, 60.39s). Selected timeline frames and contact sheets are in `docs/SCREENSHOTS/reference-*.png`; metadata and repeatable capture scripts are in `docs/TEST_REPORTS/PHASE_2_REFERENCE_*.{json,mjs}`. The web tool could not open `https://zephyr.ke/`, but the supplied recordings provide direct visual evidence.

The current implementation has substantial differences from the supplied recordings:

1. **Header and menu:** reference shows a large ice-blue Menu button at the upper left with a hamburger mark. The preview has a compact `MENU +` control at upper right alongside a Zephyr wordmark.
2. **Type and alignment:** reference chapters use thin, widely tracked uppercase display headings, often centered, with restrained body text. The preview uses much larger mixed-case headings, left-aligned copy, and repeated numbered eyebrows that are not visible in many reference chapters.
3. **Feature chapter:** reference places a tall, saturated blue crystal on the left and four compact specification groups on the right. Preview uses a horizontal white quartz photo and a separate large heading column, shifting the composition significantly.
4. **Chapter rhythm:** reference mixes full-bleed imagery/video, centered text, and compact image/caption modules. Preview repeats a large copy + rectangular photo + disclaimer pattern and leaves excessive blank space between some chapters.
5. **Amenities and interiors:** the 3×5 amenity grid is present, but its 15 simple line glyphs do not resemble the detailed blue illustrations in the recording; the “A Day at the Spa” image/caption composition is absent. The burgundy chapter exists, but its copy alignment and static generic living-room image differ from the centered editorial/visual sequence in the reference.
6. **Floor plans:** reference shows centered section intro and tabs, a building-floor selector, and a colored plan viewport. Preview uses decorative tabs and a close-up photograph of a generic plan sheet; it does not reproduce the viewport composition or the illustrated building floor.
7. **Location:** reference shows a detailed dark map frame with Zephyr and nearby labels, controls, and OpenStreetMap attribution. Preview is an empty grid placeholder. Coordinates/provider remain unapproved, so factual markers cannot yet be reproduced.
8. **Why Westlands, team, and contact:** reference contains editorial neighbourhood copy/cards, a GY Group credit treatment, and a centered contact close with blue crystal, observed contact details, and priority-list CTA. Preview has generic unverified cards, a text placeholder brand mark, and an unrelated horizontal quartz photo with no contact composition.
9. **Assets and font:** temporary photography is visibly unrelated to the source renders, especially the hero/crystal, building, and interiors. The current system font also does not match the geometric display font visible in the recordings.

These are comparison findings, not approvals of marketing claims or of reference-site assets for production use. Project facts, amenity availability, contact details, marketing copy, and production media rights remain unapproved. The owner-approved substitute policy permits preview use only.

## Decisions

- **D-011 — USER-APPROVED:** Use online substitutes in the reconstruction preview until real assets are supplied; replace them afterward. This does not approve public deployment or imply the photos depict Zephyr.
- **RECOMMENDED:** Custom inline SVG amenity glyphs stand in temporarily for unavailable source icons; they are original to this reconstruction.
- **OBSERVED / TO VERIFY:** Section labels follow the provided prompt/register. Unverified claims and destination details are omitted or marked as pending.
- **PH2-002 — DEFERRED:** No immersive motion is implemented in Phase 2 because the phase prompt explicitly prohibits animation polish. Phase 3 owns observed interaction behavior (menu, carousel, and control states); Phase 5 owns scroll choreography, section transitions, hero video/poster, and reduced-motion refinement. The recordings show cinematic video media; exact motion timing/effects should be inventoried against the recordings before Phase 5. No autoplay or unobserved scroll effect is inferred.

## Files created or modified

- Modified: `app/page.tsx`, `app/globals.css`, `components/sections/story-section.tsx`, `docs/PROJECT_STATE.md`, `docs/OPEN_ISSUES.md`, `docs/DECISIONS.md`, `docs/CONTENT_VERIFICATION.md`, `docs/ASSET_MANIFEST.csv`, `public/media/README.md`.
- Created: ten files under `public/media/`, `docs/ASSET_CREDITS.md`, `docs/TEST_REPORTS/PHASE_2_BROWSER_CHECK.mjs`, `docs/TEST_REPORTS/PHASE_2_BROWSER.json`, and Phase 2 screenshots under `docs/SCREENSHOTS/`.
- Phase 1 signed-off records were retained.

## Validation

| Check | Status | Command / evidence |
|---|---|---|
| TypeScript | PASS | `npm.cmd run typecheck` |
| Lint | PASS | `npm.cmd run lint` |
| Production build | PASS | `npm.cmd run build` |
| Browser/layout checks | PASS | `node docs/TEST_REPORTS/PHASE_2_BROWSER_CHECK.mjs`; eight widths, all section IDs/order, anchor offsets, loaded images, menu semantics, amenity count/grid, runtime errors. See `docs/TEST_REPORTS/PHASE_2_BROWSER.json`. |
| Viewport screenshot capture | PASS | Same browser script; `docs/SCREENSHOTS/phase2-{360,390,414,576,768,1024,1280,1440}x900.png`. |
| Per-section captures | PASS | Same browser script; `docs/SCREENSHOTS/phase2-section-{id}-{390,1440}.png`. |
| Reference comparison | PASS | Both local recordings reviewed; metadata, contact sheets, selected frames, and discrepancy list recorded. The public reference page remains inaccessible through the available web tool. |
| Clean dependency install from lockfile | NOT RUN | Existing lockfile retained; Phase 1 recorded `npm.cmd ci` PASS. Not repeated during Phase 2. |

## Exit criteria

The owner explicitly accepted the listed visual differences to proceed to Phase 3. The unchecked corrective-fidelity item is therefore a documented sign-off exception (PH2-001), not a claim that those differences were fixed.

- [x] Phase 1 is `SIGNED_OFF`.
- [x] Critical preview imagery has a specific user-approved substitute and rights/source record; official media remains outstanding.
- [x] All 17 sections are implemented in exact order.
- [x] Desktop and mobile have distinct responsive compositions; amenity grid is 3×5 on mobile.
- [x] Interiors uses the distinct burgundy treatment.
- [x] Unapproved content is identified as working preview copy; no fabricated coordinates, people, travel times, plans, or lead integration.
- [x] Temporary photography is captioned as illustrative, not Zephyr property imagery; the generic plan is prominently disclaimed.
- [x] Reference recordings inspected and representative frames captured. **Visual comparison found the differences listed above; corrective visual pass remains in progress.**
- [x] Browser run reports no horizontal overflow, missing images, or runtime exceptions at all target widths.
- [x] Visual-only controls are clearly nonfunctional and do not imply working behavior.
- [ ] Corrective visual pass resolves the documented layout/type discrepancies; content claims remain draft until owner approval.

**Next permitted action:** Phase 2 is signed off with owner-accepted deviations; proceed to Phase 3. Preserve PH2-001 as unresolved for later visual refinement and keep factual map markers/unapproved copy deferred. Replace temporary assets when the Zephyr team supplies them.
