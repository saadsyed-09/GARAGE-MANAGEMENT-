# GaragePro — Version 2.0

Mobile-first garage/workshop management app with premium Emerald Green and Blue themes.

## Version 2.0 updates
- Refreshed dashboard with quick actions, daily totals and recent bills.
- Minimal Garage Manager header and compact Settings shortcut.
- Emerald Green and Premium Blue theme options.
- Bill form includes payment mode, manually entered profit, stock items, and custom bill items (name, price and quantity) that do not deduct inventory.
- Reports show Earnings (actual amount received), Expenses, Profit (manual bill profit), Bills Count and Pending Customer Dues.
- Tap report summary cards to open a pie-chart breakdown for the selected date.
- Removed the separate Billing Payment History section.
- Improved JSON backup export and retained backup import.
- Added English release notes under Settings → information button.

## Important
- Earnings count actual received payments, not total billed.
- Profit is entered manually on each bill and appears in Reports for that bill's date.
- Data is stored locally on the device. Export a JSON backup before reinstalling/updating or clearing app data.

## Build APK with GitHub Actions
1. Upload the **contents** of this project folder to the repository root (including `.github/workflows/main.yml`).
2. Open **Actions → Build Garage Manager APK → Run workflow**.
3. Wait for the workflow to finish successfully.
4. Open the successful run and download `Garage-Manager-APK` under Artifacts.

The workflow uses Node.js 22 and prepares the `www` web-assets directory before Capacitor sync.

- Header branding updated to GaragePro (Garage in white, Pro in blue).


## GaragePro v2.0 Blue Theme Update
- Premium Blue theme now applies a complete blue/black/white palette across the app.
- Header title is displayed without a surrounding glass card.
- Emerald Green theme remains available in Settings.
- 
