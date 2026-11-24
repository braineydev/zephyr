import { mkdir, writeFile } from "node:fs/promises";

const targets = await fetch("http://127.0.0.1:9444/json/list").then((response) => response.json());
const target = targets.find((entry) => entry.type === "page");
if (!target) throw new Error("No Chrome page target available through DevTools.");
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});
let id = 0;
const pending = new Map();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const callbacks = pending.get(message.id); pending.delete(message.id);
  message.error ? callbacks.reject(new Error(message.error.message)) : callbacks.resolve(message.result);
});
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const requestId = ++id; pending.set(requestId, { resolve, reject });
  socket.send(JSON.stringify({ id: requestId, method, params }));
});
await send("Page.enable"); await send("Runtime.enable");
await send("Page.navigate", { url: "http://127.0.0.1:3001" });
await new Promise((resolve) => setTimeout(resolve, 500));

const clips = [
  { file: "zephyr_mobile.mp4", label: "mobile", width: 576, height: 1280, times: [4.3, 8.6, 17.3, 21.6, 25.9, 34.5, 43.1, 47.4, 51.8, 56.1, 60.2] },
  { file: "20261120-1229-16.2553657.mp4", label: "desktop", width: 1002, height: 1032, times: [0, 8.4, 16.8, 21.1, 29.5, 37.9, 42.1, 54.8, 58.8] },
];
await mkdir("docs/SCREENSHOTS", { recursive: true });
for (const clip of clips) {
  await send("Emulation.setDeviceMetricsOverride", { width: clip.width, height: clip.height, deviceScaleFactor: 1, mobile: false });
  await send("Runtime.evaluate", { expression: `document.body.innerHTML = '<video muted playsinline style="display:block;width:100vw;height:100vh;object-fit:contain;background:#091b30" src="/media/${clip.file}"></video>'` });
  await send("Runtime.evaluate", { expression: `document.querySelector('video').load()` });
  await new Promise((resolve) => setTimeout(resolve, 700));
  for (const time of clip.times) {
    await send("Runtime.evaluate", { awaitPromise: true, expression: `new Promise(resolve => { const v=document.querySelector('video'); v.onseeked=resolve; v.currentTime=${time}; })` });
    const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    const stamp = String(time).replace(".", "-");
    await writeFile(`docs/SCREENSHOTS/reference-${clip.label}-${stamp}s.png`, Buffer.from(shot.data, "base64"));
  }
}
socket.close();
console.log("Captured selected full-resolution reference frames at the listed timeline points.");
