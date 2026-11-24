import { mkdir, writeFile } from "node:fs/promises";

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
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++nextId;
  pending.set(id, { resolve, reject });
  socket.send(JSON.stringify({ id, method, params }));
});

await send("Page.enable");
await send("Runtime.enable");
await send("Page.navigate", { url: "http://127.0.0.1:3001" });
await new Promise((resolve) => setTimeout(resolve, 700));

const recordings = [
  { file: "20261120-1229-16.2553657.mp4", label: "desktop-reference" },
  { file: "zephyr_mobile.mp4", label: "mobile-reference" },
];
const metadata = [];
await mkdir("docs/SCREENSHOTS", { recursive: true });

for (const recording of recordings) {
  const result = await send("Runtime.evaluate", {
    awaitPromise: true,
    returnByValue: true,
    expression: `new Promise((resolve, reject) => {
      document.body.innerHTML = "";
      document.body.style = "margin:0;background:#091b30;color:white;font:14px sans-serif";
      const video = document.createElement("video");
      video.src = "/media/${recording.file}";
      video.muted = true;
      video.preload = "auto";
      video.onloadedmetadata = () => resolve({ duration: video.duration, width: video.videoWidth, height: video.videoHeight });
      video.onerror = () => reject(new Error("Could not decode ${recording.file}"));
      document.body.appendChild(video);
    })`,
  });
  const info = result.result.value;
  if (!info?.duration) throw new Error(`Missing video metadata for ${recording.file}`);
  metadata.push({ ...recording, ...info });

  const sheet = await send("Runtime.evaluate", {
    awaitPromise: true,
    returnByValue: true,
    expression: `(async () => {
      const video = document.querySelector("video");
      const cols = 3, rows = 5, tileW = 440, tileH = 285;
      const canvas = document.createElement("canvas");
      canvas.width = cols * tileW; canvas.height = rows * tileH;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#091b30"; ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < cols * rows; i++) {
        const time = video.duration * i / (cols * rows - 1);
        await new Promise((resolve) => { video.onseeked = resolve; video.currentTime = time; });
        const x = (i % cols) * tileW, y = Math.floor(i / cols) * tileH;
        const scale = Math.min((tileW - 20) / video.videoWidth, (tileH - 44) / video.videoHeight);
        const w = video.videoWidth * scale, h = video.videoHeight * scale;
        ctx.drawImage(video, x + (tileW - w) / 2, y + 8 + (tileH - 44 - h) / 2, w, h);
        ctx.fillStyle = "#dce6fa"; ctx.font = "13px sans-serif";
        ctx.fillText((Math.round(time * 10) / 10) + "s", x + 10, y + tileH - 12);
      }
      document.body.innerHTML = "";
      document.body.appendChild(canvas);
      return { width: canvas.width, height: canvas.height };
    })()`
  });
  const dimensions = sheet.result.value;
  await send("Emulation.setDeviceMetricsOverride", { width: dimensions.width, height: dimensions.height, deviceScaleFactor: 1, mobile: false });
  const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true });
  await writeFile(`docs/SCREENSHOTS/${recording.label}-contact-sheet.png`, Buffer.from(shot.data, "base64"));
}

await writeFile("docs/TEST_REPORTS/PHASE_2_REFERENCE_METADATA.json", `${JSON.stringify({ date: new Date().toISOString(), metadata }, null, 2)}\n`);
socket.close();
console.log(JSON.stringify(metadata, null, 2));
