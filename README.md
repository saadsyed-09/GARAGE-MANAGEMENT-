# Garage Manager — Final Liquid Glass Update

Mobile-first garage/workshop management app.

## Included
- Dashboard, inventory/stock, billing, customers, staff/attendance, expenses, reports and settings.
- Green premium liquid-glass UI with floating pill navigation.
- Bundled automotive garage background (`garage-bg.png`).
- Settings: cars / green / dark / custom wallpaper presets, opacity, upload/reset background, upload/remove app logo, theme and font-size controls.
- Local JSON backup/restore.

## Build APK with GitHub Actions
1. Upload the contents of this project folder to the repository root (including `.github/workflows/main.yml`).
2. Open Actions → Build Garage Manager APK → Run workflow.
3. Wait for the workflow to finish successfully.
4. Open the successful run and download `Garage-Manager-APK` under Artifacts.

The workflow uses Node.js 22 and prepares the `www` web-assets directory before Capacitor sync.

## Important
App data is stored locally on the device. Export a JSON backup before reinstalling/updating or clearing app data.
