import { mkdir, writeFile } from "node:fs/promises";

const widths = [360, 390, 414, 576, 768, 1024, 1280, 1440];
const height = 900;
const port = 9444;
const baseUrl = "http://127.0.0.1:3003";
const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
const target = targets.find((entry) => entry.type === "page");
if (!target) throw new Error("No Chrome page target available through DevTools.");

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let nextId = 0;
const pending = new Map();
const browserErrors = [];
const failedResponses = [];
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.method === "Network.responseReceived" && message.params.response.status >= 400) {
    failedResponses.push({ status: message.params.response.status, url: message.params.response.url });
  }
  if (message.method === "Runtime.exceptionThrown") browserErrors.push(message.params.exceptionDetails.text);
  if (message.method === "Log.entryAdded" && message.params.entry.level === "error") browserErrors.push(message.params.entry.text);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  }
});

function send(method, params = {}) {
  const id = ++nextId;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression, awaitPromise = false) {
  const response = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise });
  if (response.exceptionDetails) throw new Error(response.exceptionDetails.text);
  return response.result.value;
}

async function key(keyName, shift = false) {
  const codes = { Tab: [9, "Tab"], Escape: [27, "Escape"], ArrowRight: [39, "ArrowRight"] };
  const [virtualKey, code] = codes[keyName];
  await send("Input.dispatchKeyEvent", { type: "keyDown", key: code, code, windowsVirtualKeyCode: virtualKey, nativeVirtualKeyCode: virtualKey, modifiers: shift ? 8 : 0 });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key: code, code, windowsVirtualKeyCode: virtualKey, nativeVirtualKeyCode: virtualKey, modifiers: shift ? 8 : 0 });
}

async function clickElement(selector) {
  const point = await evaluate(`(() => { const r = document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect(); return { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2) }; })()`);
  await send("Input.dispatchMouseEvent", { type: "mouseMoved", x: point.x, y: point.y });
  await send("Input.dispatchMouseEvent", { type: "mousePressed", x: point.x, y: point.y, button: "left", clickCount: 1 });
  await send("Input.dispatchMouseEvent", { type: "mouseReleased", x: point.x, y: point.y, button: "left", clickCount: 1 });
}

async function touchTap(selector) {
  const point = await evaluate(`(() => { const r = document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect(); return { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2) }; })()`);
  await send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ id: 3, x: point.x, y: point.y, radiusX: 5, radiusY: 5, force: 1 }] });
  await send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
}

async function viewport(width) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768,
    screenOrientation: { type: width < 768 ? "portraitPrimary" : "landscapePrimary", angle: 0 },
  });
  await send("Page.navigate", { url: baseUrl });
  await new Promise((resolve) => setTimeout(resolve, 900));
}

await send("Page.enable");
await send("Runtime.enable");
await send("Log.enable");
await send("Network.enable");
await mkdir("docs/SCREENSHOTS", { recursive: true });

const responsive = [];
for (const width of widths) {
  await viewport(width);
  responsive.push(await evaluate(`(() => ({
    width: innerWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    menuButton: document.querySelector('.menu-trigger')?.getAttribute('aria-expanded'),
    rail: document.querySelector('.progress-rail')?.getAttribute('role'),
    sectionCount: document.querySelectorAll('#main-content > section').length,
    carouselCount: document.querySelectorAll('.local-carousel').length,
    noAutoplay: [...document.querySelectorAll('.local-carousel')].every((carousel) => !carousel.querySelector('video[autoplay]')),
  }))()`));
}

await viewport(1440);
await clickElement(".menu-trigger");
await new Promise((resolve) => setTimeout(resolve, 120));
const menuOpened = await evaluate(`(() => ({
  expanded: document.querySelector('.menu-trigger').getAttribute('aria-expanded'),
  modal: document.querySelector('#site-menu').getAttribute('aria-modal'),
  hidden: document.querySelector('#site-menu').hidden,
  focus: document.activeElement.className,
  bodyOverflow: document.body.style.overflow,
  linkTargets: [...document.querySelectorAll('#site-menu nav a')].map((link) => ({ href: link.getAttribute('href'), exists: !!document.querySelector(link.getAttribute('href')) })),
}))()`);
const desktopShot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile("docs/SCREENSHOTS/phase3-menu-desktop.png", Buffer.from(desktopShot.data, "base64"));
await clickElement(".menu-close");
await new Promise((resolve) => setTimeout(resolve, 120));
const pointerClosed = await evaluate("({ expanded: document.querySelector('.menu-trigger').getAttribute('aria-expanded'), hidden: document.querySelector('#site-menu').hidden, returnedFocus: document.activeElement === document.querySelector('.menu-trigger'), bodyOverflow: document.body.style.overflow })");
await clickElement(".menu-trigger");
await new Promise((resolve) => setTimeout(resolve, 120));
await key("Tab", true);
const wrappedBackward = await evaluate("document.activeElement.textContent.trim()");
await key("Tab");
const wrappedForward = await evaluate("document.activeElement.textContent.trim()");
await key("Escape");
await new Promise((resolve) => setTimeout(resolve, 120));
const escapeClosed = await evaluate(`(() => ({
  expanded: document.querySelector('.menu-trigger').getAttribute('aria-expanded'),
  hidden: document.querySelector('#site-menu').hidden,
  returnedFocus: document.activeElement === document.querySelector('.menu-trigger'),
  bodyOverflow: document.body.style.overflow,
}))()`);

await evaluate("document.querySelector('.menu-trigger').click()");
await new Promise((resolve) => setTimeout(resolve, 100));
await evaluate("document.querySelector('#site-menu a[href=\"#sanctuary\"]').click()");
await new Promise((resolve) => setTimeout(resolve, 900));
const anchorNavigation = await evaluate("({ hash: location.hash, expanded: document.querySelector('.menu-trigger').getAttribute('aria-expanded'), targetExists: !!document.querySelector(location.hash), focusTarget: document.activeElement.id })");

await evaluate("window.scrollTo({top:0,behavior:'instant'})");
await evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))", true);
const progressAtTop = await evaluate("Number(document.querySelector('.progress-rail').getAttribute('aria-valuenow'))");
await evaluate("window.scrollTo({top:document.documentElement.scrollHeight,behavior:'instant'})");
await evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))", true);
const progressAtBottom = await evaluate("Number(document.querySelector('.progress-rail').getAttribute('aria-valuenow'))");

await evaluate("document.querySelector('.chapter--reception .local-carousel').scrollIntoView({behavior:'instant',block:'center'})");
await evaluate("document.querySelector('.chapter--reception .local-carousel').focus()");
const carouselInitial = await evaluate(`(() => {
  const carousel = document.querySelector('.chapter--reception .local-carousel');
  return { caption: carousel.querySelector('.local-carousel__status').innerText, alt: carousel.querySelector('figure:not([hidden]) img').alt, src: carousel.querySelector('figure:not([hidden]) img').getAttribute('src'), previousDisabled: carousel.querySelector('button[aria-label^="Previous"]').disabled, nextDisabled: carousel.querySelector('button[aria-label^="Next"]').disabled };
})()`);
await key("ArrowRight");
const carouselAfterKey = await evaluate(`(() => {
  const carousel = document.querySelector('.chapter--reception .local-carousel');
  const image = carousel.querySelector('figure:not([hidden]) img');
  return { caption: carousel.querySelector('.local-carousel__status').innerText, alt: image.alt, src: image.getAttribute('src'), hiddenSlides: [...carousel.querySelectorAll('figure')].filter((slide) => slide.hidden).length };
})()`);
await clickElement('.chapter--reception .local-carousel button[aria-label^="Next"]');
const carouselAfterPointer = await evaluate(`(() => {
  const carousel = document.querySelector('.chapter--reception .local-carousel');
  const image = carousel.querySelector('figure:not([hidden]) img');
  return { caption: carousel.querySelector('.local-carousel__status').innerText, alt: image.alt, src: image.getAttribute('src'), previousDisabled: carousel.querySelector('button[aria-label^="Previous"]').disabled, nextDisabled: carousel.querySelector('button[aria-label^="Next"]').disabled };
})()`);
await evaluate("document.querySelector('.chapter--reception .local-carousel').scrollIntoView({behavior:'instant',block:'center'})");
await new Promise((resolve) => setTimeout(resolve, 3100));
const noAutoplay = await evaluate("document.querySelector('.chapter--reception .local-carousel__status').innerText");

await viewport(390);
await send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 1 });
await touchTap(".menu-trigger");
await new Promise((resolve) => setTimeout(resolve, 120));
const mobileShot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile("docs/SCREENSHOTS/phase3-menu-mobile.png", Buffer.from(mobileShot.data, "base64"));
await touchTap(".menu-close");
await new Promise((resolve) => setTimeout(resolve, 120));
const touchMenuClosed = await evaluate("({ expanded: document.querySelector('.menu-trigger').getAttribute('aria-expanded'), hidden: document.querySelector('#site-menu').hidden, returnedFocus: document.activeElement === document.querySelector('.menu-trigger'), bodyOverflow: document.body.style.overflow })");
await evaluate("document.querySelector('.chapter--reception .local-carousel').scrollIntoView({behavior:'instant',block:'center'})");
await send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 1 });
const swipeBefore = await evaluate("document.querySelector('.chapter--reception .local-carousel__status').innerText");
const touchPoint = await evaluate(`(() => { const r = document.querySelector('.chapter--reception .local-carousel__viewport').getBoundingClientRect(); return { x: Math.round(r.left + r.width * .75), y: Math.round(r.top + r.height * .5) }; })()`);
await send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ id: 1, x: touchPoint.x, y: touchPoint.y, radiusX: 5, radiusY: 5, force: 1 }] });
await send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ id: 1, x: touchPoint.x - 160, y: touchPoint.y, radiusX: 5, radiusY: 5, force: 1 }] });
await send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
await new Promise((resolve) => setTimeout(resolve, 200));
const swipeSlide = await evaluate("document.querySelector('.chapter--reception .local-carousel__status').innerText");

await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
const reducedMotion = await evaluate("({ preference: matchMedia('(prefers-reduced-motion: reduce)').matches, scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior })");
const stateFallbacks = await evaluate(`(() => ({
  interiorsActive: document.querySelector('.chapter--interiors .visual-tab--active')?.textContent.trim(),
  interiorsUnavailableDisabled: document.querySelector('.chapter--interiors button[disabled]')?.textContent.trim(),
  floorButtonsDisabled: [...document.querySelectorAll('.plan-controls button')].every((button) => button.disabled),
  floorSelectDisabled: document.querySelector('.floor-select-label select')?.disabled,
}))()`);

const failures = [];
for (const result of responsive) {
  if (result.scrollWidth > result.width || result.bodyScrollWidth > result.width) failures.push(`${result.width}px horizontal overflow`);
  if (result.sectionCount !== 17 || result.carouselCount !== 2 || !result.noAutoplay) failures.push(`${result.width}px shell or carousel count mismatch`);
}
if (menuOpened.expanded !== "true" || menuOpened.modal !== "true" || menuOpened.hidden || menuOpened.focus !== "menu-close" || menuOpened.bodyOverflow !== "hidden") failures.push("menu open state, focus, dialog semantics, or scroll lock failed");
if (menuOpened.linkTargets.some((entry) => !entry.exists) || menuOpened.linkTargets.length !== 9) failures.push("one or more menu anchors do not target a section");
if (pointerClosed.expanded !== "false" || !pointerClosed.hidden || !pointerClosed.returnedFocus || pointerClosed.bodyOverflow !== "") failures.push("pointer close did not restore menu, focus, and scrolling");
if (!wrappedBackward.includes("Team") || !wrappedForward.startsWith("Close")) failures.push("menu Shift+Tab/Tab focus wrapping failed");
if (escapeClosed.expanded !== "false" || !escapeClosed.hidden || !escapeClosed.returnedFocus || escapeClosed.bodyOverflow !== "") failures.push("Escape close, focus return, or body scroll restoration failed");
if (touchMenuClosed.expanded !== "false" || !touchMenuClosed.hidden || !touchMenuClosed.returnedFocus || touchMenuClosed.bodyOverflow !== "") failures.push("touch menu open/close did not restore focus and scrolling");
if (anchorNavigation.hash !== "#sanctuary" || anchorNavigation.expanded !== "false" || !anchorNavigation.targetExists || anchorNavigation.focusTarget !== "sanctuary") failures.push("menu anchor navigation/hash/focus failed");
if (progressAtTop > 1 || progressAtBottom < 99) failures.push("scroll progress did not track document bounds");
if (carouselInitial.alt.length === 0 || !carouselInitial.previousDisabled || carouselInitial.nextDisabled || carouselAfterKey.hiddenSlides !== 2 || carouselAfterKey.src === carouselInitial.src || carouselAfterKey.caption === carouselInitial.caption) failures.push("carousel keyboard, slide/caption/image sync, or initial button state failed");
if (carouselAfterPointer.previousDisabled || !carouselAfterPointer.nextDisabled || carouselAfterPointer.src === carouselAfterKey.src || carouselAfterPointer.caption === carouselAfterKey.caption) failures.push("carousel pointer next button or final disabled state failed");
if (noAutoplay !== carouselAfterPointer.caption) failures.push("carousel changed without user input (possible autoplay)");
if (swipeSlide === swipeBefore) failures.push("mobile touch swipe did not change the carousel slide");
if (!reducedMotion.preference || reducedMotion.scrollBehavior !== "auto") failures.push("reduced-motion scrolling preference was not respected");
if (!stateFallbacks.interiorsActive || !stateFallbacks.interiorsUnavailableDisabled || !stateFallbacks.floorButtonsDisabled || !stateFallbacks.floorSelectDisabled) failures.push("unavailable interior/plan states are not clearly disabled");
if (browserErrors.length || failedResponses.length) failures.push(`browser/resource errors: ${JSON.stringify({ browserErrors, failedResponses })}`);

const report = {
  date: new Date().toISOString(),
  browser: "Google Chrome via Chrome DevTools Protocol",
  url: baseUrl,
  viewportWidths: widths,
  responsive,
  menuOpened,
  pointerClosed,
  menuFocusWrap: { shiftTab: wrappedBackward, tab: wrappedForward },
  escapeClosed,
  touchMenuClosed,
  anchorNavigation,
  progress: { atTop: progressAtTop, atBottom: progressAtBottom },
  carousel: { initial: carouselInitial, afterArrowRight: carouselAfterKey, afterPointerNext: carouselAfterPointer, afterWait: noAutoplay, beforeTouchSwipe: swipeBefore, afterTouchSwipe: swipeSlide },
  reducedMotion,
  stateFallbacks,
  browserErrors,
  failedResponses,
  screenshots: ["docs/SCREENSHOTS/phase3-menu-desktop.png", "docs/SCREENSHOTS/phase3-menu-mobile.png"],
  status: failures.length ? "FAIL" : "PASS",
  failures,
};
await writeFile("docs/TEST_REPORTS/PHASE_3_BROWSER.json", `${JSON.stringify(report, null, 2)}\n`);
socket.close();
console.log(JSON.stringify({ status: report.status, failures, progress: report.progress, reducedMotion, menu: { open: menuOpened, pointerClosed, focusWrap: report.menuFocusWrap, escapeClosed, touchMenuClosed }, swipeSlide }, null, 2));
if (failures.length) process.exitCode = 1;
