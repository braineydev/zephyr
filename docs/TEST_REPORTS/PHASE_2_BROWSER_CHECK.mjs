import { mkdir, writeFile } from "node:fs/promises";

const expectedIds = [
  "main-home", "intro", "features", "arrival", "reception", "sanctuary",
  "amenities", "interiors", "executive-lounge", "floating-pool", "rooftop-club",
  "floor-plans", "why-westlands", "location", "lifestyle", "team", "contact",
];
const widths = [360, 390, 414, 576, 768, 1024, 1280, 1440];
const height = 900;
const port = 9444;
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
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
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

await send("Page.enable");
await send("Runtime.enable");
await send("Network.enable");
await send("Log.enable");
const results = [];
await mkdir("docs/SCREENSHOTS", { recursive: true });

for (const width of widths) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768,
    screenOrientation: { type: width < 768 ? "portraitPrimary" : "landscapePrimary", angle: 0 },
  });
  await send("Page.navigate", { url: "http://127.0.0.1:3001" });
  await new Promise((resolve) => setTimeout(resolve, 900));
  await send("Runtime.evaluate", {
    expression: `(async () => {
      const images = [...document.querySelectorAll(".scene img")];
      images.forEach(image => { image.loading = "eager"; });
      await Promise.all(images.map(image => image.decode().catch(() => null)));
    })()`,
    awaitPromise: true
  });  const screenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  await writeFile(`docs/SCREENSHOTS/phase2-${width}x${height}.png`, Buffer.from(screenshot.data, "base64"));
  await send("Runtime.evaluate", { expression: "document.querySelector('.wordmark').focus()" });
  await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 });

  const evaluation = await send("Runtime.evaluate", {
    returnByValue: true,
    awaitPromise: true,
    expression: `(() => {
      const root = document.documentElement;
      const sections = [...document.querySelectorAll('#main-content > section')];
      const ids = sections.map(section => section.id);
      const headings = [...document.querySelectorAll('#main-content h1, #main-content h2')].map(el => el.tagName);
      const pageLinks = [...document.querySelectorAll('.section-index a')].map(link => link.getAttribute('href'));
      const menu = document.querySelector('.menu-trigger');
      const menuState = {
        tag: menu.tagName,
        name: menu.innerText.trim(),
        ariaExpanded: menu.getAttribute('aria-expanded'),
        ariaDisabled: menu.getAttribute('aria-disabled'),
        focused: document.activeElement === menu,
        focusOutline: getComputedStyle(menu).outlineStyle,
      };
      const headerBottom = document.querySelector('.site-header').getBoundingClientRect().bottom;
      const anchorChecks = sections.map(section => {
        section.scrollIntoView({ behavior: 'instant', block: 'start' });
        const heading = section.querySelector('h1, h2');
        return { id: section.id, sectionTop: Math.round(section.getBoundingClientRect().top), headingTop: Math.round(heading.getBoundingClientRect().top), headerBottom: Math.round(headerBottom) };
      });
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, behavior: 'instant' });
      const rail = document.querySelector('.progress-rail');
      return {
        viewport: innerWidth,
        documentClientWidth: root.clientWidth,
        documentScrollWidth: root.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        ids,
        pageLinks,
        headings,
        menuState,
        progressRailPresent: Boolean(rail) && rail.getAttribute('aria-hidden') === 'true',
        anchorChecks,
        amenityCount: document.querySelectorAll(".amenity-grid .amenity").length,
        amenityColumns: document.querySelector(".amenity-grid") ? getComputedStyle(document.querySelector(".amenity-grid")).gridTemplateColumns.split(" ").length : 0,
        amenityRows: document.querySelector(".amenity-grid") ? getComputedStyle(document.querySelector(".amenity-grid")).gridTemplateRows.split(" ").length : 0,
        images: [...document.querySelectorAll(".scene img")].map(img => ({ src: img.getAttribute("src"), loaded: img.complete && img.naturalWidth > 0, naturalWidth: img.naturalWidth })),
      };
    })()`
  });
  const data = evaluation.result.value;
  if (!data) throw new Error(`No browser measurements returned at ${width}px`);
  results.push({ width, ...data });
}

for (const width of [390, 1440]) {
  await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768, screenOrientation: { type: width < 768 ? "portraitPrimary" : "landscapePrimary", angle: 0 } });
  await send("Page.navigate", { url: "http://127.0.0.1:3001" });
  await new Promise((resolve) => setTimeout(resolve, 1500));
  for (const id of expectedIds) {
    await send("Runtime.evaluate", { expression: `document.getElementById(${JSON.stringify(id)}).scrollIntoView({ behavior: "instant", block: "start" })` });
    await new Promise((resolve) => setTimeout(resolve, 180));
    const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    await writeFile(`docs/SCREENSHOTS/phase2-section-${id}-${width}.png`, Buffer.from(shot.data, "base64"));
  }
}
const failed = [];
for (const result of results) {
  if (result.viewport !== result.width) failed.push(`${result.width}px viewport mismatch`);
  if (result.documentScrollWidth > result.documentClientWidth || result.bodyScrollWidth > result.documentClientWidth) failed.push(`${result.width}px horizontal overflow`);
  if (JSON.stringify(result.ids) !== JSON.stringify(expectedIds)) failed.push(`${result.width}px section IDs/order mismatch`);
  if (JSON.stringify(result.pageLinks) !== JSON.stringify(expectedIds.map((id) => `#${id}`))) failed.push(`${result.width}px section anchor links mismatch`);
  if (result.headings.filter((tag) => tag === "H1").length !== 1 || result.headings.filter((tag) => tag === "H2").length !== 16) failed.push(`${result.width}px heading hierarchy mismatch`);
  if (!result.menuState.focused || result.menuState.focusOutline !== "solid" || result.menuState.ariaExpanded !== "false" || result.menuState.ariaDisabled !== "true") failed.push(`${result.width}px menu accessibility shell mismatch`);
  if (result.images.some(image => !image.loaded)) failed.push(`${result.width}px broken image: ${result.images.filter(image => !image.loaded).map(image => image.src).join(", ")}`);
  if (result.amenityCount !== 15) failed.push(`${result.width}px amenity count mismatch`);
  if (result.width < 768 && (result.amenityColumns !== 3 || result.amenityRows !== 5)) failed.push(`${result.width}px amenity grid is not 3x5`);
  if (!result.progressRailPresent) failed.push(`${result.width}px progress rail shell missing`);
  if (result.anchorChecks.some((anchor) => anchor.headingTop < anchor.headerBottom)) failed.push(`${result.width}px anchor heading hidden behind fixed header`);
}
if (browserErrors.length) failed.push(`Browser runtime exceptions: ${browserErrors.join("; ")}`);

const report = {
  date: new Date().toISOString(),
  browser: "Google Chrome headless with Chrome DevTools Protocol; system-installed Chrome",
  url: "http://127.0.0.1:3001",
  viewports: widths,
  results,
  browserErrors,
  status: failed.length ? "FAIL" : "PASS",
  failures: failed,
};
await writeFile("docs/TEST_REPORTS/PHASE_2_BROWSER.json", `${JSON.stringify(report, null, 2)}\n`);
socket.close();
console.log(JSON.stringify({ status: report.status, failures: failed, viewports: results.map(({ width, viewport, documentClientWidth, documentScrollWidth, bodyScrollWidth }) => ({ width, viewport, documentClientWidth, documentScrollWidth, bodyScrollWidth })) }, null, 2));
if (failed.length) process.exitCode = 1;


