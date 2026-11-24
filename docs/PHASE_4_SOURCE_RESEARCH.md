# Phase 4 — Source Research

**Research date:** 2026-11-24 (Africa/Nairobi)  
**Authority:** Owner asked Codex to source the missing Phase 4 materials while the requested official delivery is pending. This authorizes research and the low-risk, labelled GY Group contact handoff; it does not authorize spending, creating provider accounts, signing terms on behalf of an organization, or collecting leads in this replica.

## Findings and proposed path

| Requirement | Finding | Proposed use / remaining gate |
|---|---|---|
| Map renderer/provider | MapLibre GL JS is an open-source browser renderer. OpenFreeMap publishes commercial-use public vector tiles without API key or per-request charge and lists a Dark style; attribution is required. Its public instance is provided as-is with no SLA, may be discontinued without notice, and its terms require organizational authority to accept. | **RECOMMENDED candidate:** MapLibre GL JS + OpenFreeMap Dark, $0 service fee. Visible attribution: `OpenFreeMap © OpenMapTiles Data from OpenStreetMap` (MapLibre may add attribution automatically). No account or secret key is required. Terms/service availability and third-party IP/map-area disclosure still need project owner acceptance before initialization. If uptime guarantees are required, MapTiler Flex is a commercial alternative currently listed at $30 USD/month plus overage; do not subscribe without budget approval. |
| Coordinates / POIs | GY Group's official homepage reports a city-level Nairobi coordinate `01 17 S | 36 49 E` and associates Zephyr with Westlands. It does not establish an exact building pin or coordinates for Emerald Springs/Nairobi Street Kitchen. The recordings can establish visible labels but not exact coordinates. | **BLOCKED:** do not convert the city coordinate or screenshots into a building/POI marker. Need an owner/developer-approved coordinate source or site/address pin. The map can later use a broad Westlands/Nairobi view only if explicitly labelled as area context, with no building marker. |
| Contact | GY Group's official Contact page lists direct line `0768 699 999`, `info@gygroup.ke`, and office `Euro Towers, 1st Floor, Muthithi Road, Westlands`. It also provides a GY-hosted enquiry form with Full Name, Email, Phone, Project Interest, and Message. | Implemented as labelled general GY Group Sales `tel:` / `mailto:` links plus an external link to `https://gygroup.ke/contact`. This is a user-directed public-source handoff. No local form, data capture, or submission is implemented. The official page is not Zephyr-specific; do not describe these contacts as a Zephyr-only sales desk. |
| Lead capture | The official GY Group contact page exposes the fields above, but the browser-visible page does not establish its server endpoint, CRM, data controller legal entity, retention schedule, or form consent basis. A separate footer newsletter checkbox reads “I agree to receive GY Group news and updates”; it is not consent wording for the contact form and must not be copied as such. | **BLOCKED for replica-side lead capture.** Use the official external contact page handoff only. To collect leads locally, the owner must identify controller, destination/processor, exact fields, lawful basis/consent wording, retention/deletion, cross-border processing and test authorization. |
| Brochure | Current official GY Group Zephyr/project pages expose “Get Early Access” / “Register interest” actions but no publicly linked current Zephyr PDF was found during this search. | **BLOCKED:** no brochure asset or redistribution rights to integrate. Direct users to official GY Group contact page to request current materials; do not download or reuse unrelated/third-party listing plans. |
| Privacy / analytics | The replica's source and direct dependency manifest contain no analytics or consent-manager integration. OpenFreeMap says it sets no cookies, but its Terms note requests may pass through Cloudflare; any map request necessarily exposes request metadata to the provider. GY Group's policies govern its own domain, not automatically this replica. | Keep non-essential trackers and a cookie-settings control absent in this reconstruction. If the map is enabled, disclose the external map service/request in project privacy documentation after owner/privacy review. No compliance claim or copied legal text. |

## Official / primary sources checked

- [GY Group Contact](https://gygroup.ke/contact), checked 2026-11-24: public phone/email, office, form labels, official GY Group footer.
- [GY Group Zephyr project page](https://gygroup.ke/projects/zephyr), checked 2026-11-24: Zephyr · Westlands, register-interest link, current project overview.
- [GY Group homepage](https://gygroup.ke/), checked 2026-11-24: general Nairobi city coordinate and current public Zephyr call-to-action; not an exact development pin or brochure.
- [OpenFreeMap overview](https://openfreemap.org/), checked 2026-11-24: commercial use allowed, no account/API key/request cap, no SLA, listed styles and attribution.
- [OpenFreeMap Quick Start](https://openfreemap.org/quick_start/), checked 2026-11-24: MapLibre-compatible style endpoint and integration guidance.
- [OpenFreeMap Terms](https://openfreemap.org/tos/), last updated 2026-11-24: service is as-is, organization signatory must have authority to bind it, Cloudflare may process requests, service may change/discontinue.
- [OpenStreetMap raster tile policy](https://operations.osmfoundation.org/policies/tiles/), checked 2026-11-24: community raster servers have limited capacity and best-effort availability; not selected as the commercial map host.
- [MapTiler Cloud pricing](https://www.maptiler.com/cloud/pricing/), checked 2026-11-24: Free is positioned for testing/personal/non-commercial use; Flex currently lists $30 USD/month plus overage; alternative only, no purchase made.
- [Kenya Data Protection Act, 2019](https://odpc.go.ke/wp-content/uploads/2024/02/TheDataProtectionAct__No24of2019.pdf), and [ODPC 2026 Data Protection Policy Guidance](https://odpc.go.ke/wp-content/uploads/2026/07/ODPC-%E2%80%93-Guidance-Note-for-Data-Protection-Policies.pdf), checked 2026-11-24: controller-defined purpose/lawful basis, data minimization, transparency, storage limitation, rights and vendor accountability require owner-specific data-handling decisions. This summary is project gating, not legal advice.

## What remains blocked

1. Exact Zephyr and included POI coordinates.
2. Owner acceptance of OpenFreeMap's terms, no-SLA risk, attribution, and map-request privacy disclosure (or a different provider/budget choice).
3. Local lead capture; external official-page handoff is the only implemented conversion route.
4. A current official brochure PDF and public-distribution permission.
5. Owner/privacy decision on any analytics/non-essential cookies for this reconstruction. No such technology is currently installed.
