# Zephyr Westlands — Codex Phase Prompt Pack

This package contains seven separate, phase-specific execution prompts for use with Codex integrated into VS Code. Each prompt is self-contained and repeats the project's evidence rules, scope restrictions, testing discipline and mandatory sign-off process.

## Files

- `00_CODEX_MASTER_GOVERNANCE.md` — project-wide governing rules and shared reference context.
- `PHASE_0_PROMPT.md` — Reference and Asset Lock.
- `PHASE_1_PROMPT.md` — Project Foundation.
- `PHASE_2_PROMPT.md` — Visual Structure.
- `PHASE_3_PROMPT.md` — Interactions.
- `PHASE_4_PROMPT.md` — Map and Conversion.
- `PHASE_5_PROMPT.md` — Visual Fidelity and Optimisation.
- `PHASE_6_PROMPT.md` — Final QA and Deployment.
- `ALL_PHASE_PROMPTS_COMBINED.md` — all seven prompts in one searchable document (reference only; do not ask Codex to execute all at once).

## Recommended setup in VS Code

1. Open the actual Zephyr project folder in VS Code.
2. Copy this prompt directory into the repository as `docs/codex-prompts/` or another clearly documented project path. Do not overwrite existing project documentation.
3. Extract the separate `Zephyr_Phase0_Reference_Asset_Lock.zip` package into a safe reference directory such as `reference/phase-0-lock/`. Merge documents carefully; preserve existing files. The reference package contains the desktop/mobile recordings, evidence frames, blueprint, previous master prompt and Phase 0 registers.
4. Start a Codex conversation in that workspace.
5. Paste the entire contents of `PHASE_0_PROMPT.md`, or ask Codex to read that exact file and follow it in full.
6. Review the report, tests and changes. If satisfied, type `APPROVE PHASE 0` into Codex. Codex must record the approval and stop.
7. Only then start a fresh Codex task with `PHASE_1_PROMPT.md`. Repeat through Phase 6.

## Critical rules

- Never give Codex all seven phase prompts with an instruction to execute them sequentially without checking back. You are the human approval gate.
- `APPROVE PHASE N` is phase sign-off; it is not permission to deploy. Phase 6 requires a separate `AUTHORIZE PRODUCTION DEPLOYMENT` instruction before any live release action.
- If a phase is `BLOCKED`, do not issue the next prompt. Resolve the blocker in the current phase and repeat validation.
- A phase report must include exact test commands and PASS / FAIL / NOT RUN / BLOCKED statuses.
- No real project facts, map coordinates, floor plans, credentials, lead recipients, prices, legal copy or rights should be invented.
- The original site's source framework and backend remain unknown unless independently verified.

## Project state files expected in the repository

`docs/PROJECT_STATE.md`, `docs/OPEN_ISSUES.md`, `docs/DECISIONS.md`, `docs/ASSET_MANIFEST.csv`, `docs/CONTENT_VERIFICATION.md`, and one report per phase under `docs/`.
