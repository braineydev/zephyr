# Developer setup

This is an independent reconstruction of the public Zephyr Westlands experience. It does not claim to use the original site's framework or services.

## Requirements

- Node.js 20.9 or newer (the inspected workspace currently has Node 24.15.0).
- npm (the inspected workspace currently has npm 11.12.1; use `npm.cmd` in PowerShell if script execution policy blocks `npm`).
- Network access to install dependencies on first setup.

## Commands

From the repository root:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open `http://localhost:3000`. The default port is 3000; Next.js selects the next available port if that port is occupied.

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run start
```

`start` serves the last production build on port 3000 by default. No environment variables are required for the foundation shell. Keep any future secrets in ignored `.env.local`; never commit their values.

## Browser foundation checks

After `npm.cmd run build`, start the production server in one terminal:

```powershell
npm.cmd run start -- --hostname 127.0.0.1
```

In another PowerShell terminal, start system Chrome with DevTools enabled, then run the browser check. Keep Chrome open while the script runs:

```powershell
$chromeExecutable = Join-Path $env:ProgramFiles 'Google\Chrome\Application\chrome.exe'
$chromeArguments = @('--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run', "--user-data-dir=$((Get-Location).Path)\.phase1-debug-profile", '--remote-debugging-port=9444', 'about:blank')
Start-Process -FilePath $chromeExecutable -ArgumentList $chromeArguments -WindowStyle Hidden
Start-Sleep -Seconds 2
node docs/TEST_REPORTS/PHASE_1_BROWSER_CHECK.mjs
```

The script checks the eight required CSS widths, section order/anchors, heading structure, keyboard focus, fixed-header offsets, progress-rail shell, horizontal overflow, and browser runtime errors. It writes the JSON results and viewport captures under `docs/TEST_REPORTS/` and `docs/SCREENSHOTS/`. The temporary Chrome profile is ignored by Git.

## Foundation notes

- App Router + TypeScript were explicitly selected for this replica (decision D-009).
- Approximate palette values in `app/globals.css` are reconstruction tokens, not verified original CSS.
- No approved licensed font files were present. The current Arial/Helvetica system stack is a temporary fallback, not a match claim.
- The persistent Menu control is intentionally disabled until its interaction phase. The progress rail is a visual shell only; scroll tracking is deferred.
- Section text is clearly marked as placeholder copy where factual details or assets still need owner approval.
