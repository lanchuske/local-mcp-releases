# Changelog

All notable changes to Local MCP are documented here.


## v1.107 — 2026-04-01
Settings page now loads correctly.

## v1.106 — 2026-04-01
Settings page now works correctly in all installation modes.

## v1.105 — 2026-04-01
Settings page now works correctly when running via npm/Claude Desktop.

## v1.104 — 2026-04-01
Tray now updates automatically when the server starts. Fixes the Install button not working on older tray versions.

## v1.103 — 2026-04-01
Fixed recurring permission dialog — Teams data is no longer accessed every 60 seconds in the background. The permission prompt now only appears when you actively use Teams tools, not constantly in the background.

## v1.102 — 2026-04-01
Fixed recurring permission dialog — server now has a stable code-signing identity that macOS remembers. No more repeated prompts after allowing once.

## v1.101 — 2026-04-01
Fixed recurring TCC permission dialog — the server binary now has a stable code-signing identity so macOS remembers the permission. No more repeated prompts.

## v1.100 — 2026-04-01
Install button now works correctly. Update banner shows whether it's a server or tray update.

## v1.99 — 2026-04-01
Tray now shows server status correctly in all installation modes. Restart button gives feedback while server is restarting. Tray version always visible in menu bar.

## v1.98 — 2026-04-01
The menu bar icon can now be hidden without stopping the MCP server. macOS and chip type now visible in the admin dashboard.

## v1.97 — 2026-04-01
Fixed permission dialogs appearing every 30 seconds in npm mode.

## v1.96 — 2026-04-01
Cloud Relay now connects reliably in all installation modes.

## v1.95 — 2026-04-01
Cloud Relay now connects reliably. All services (Mail, Calendar, etc.) now appear correctly in the menu bar.

## v1.94 — 2026-04-01
Improved reliability after Mac restart — menu bar now stays connected. Minor fixes and improvements.

## v1.93 — 2026-04-01
Menu bar icon now shows correctly in Finder and Launchpad. Server status is now visible in the menu bar after a Mac restart.

## v1.92 — 2026-03-31
Menu bar app now appears in /Applications for easy access. Fixed update button for all users.

## v1.91 — 2026-03-31
Install button now works correctly — server updates and restarts automatically. Fixed auto-update for npm users.

## v1.90 — 2026-03-31
Menu bar icon now updates automatically on Claude Desktop restart. Admin panel shows server and tray versions separately.
---

## v1.87 — 2026-03-31
More stable cloud connection. Clearer setup for ChatGPT and Claude.ai integration.

## v1.86 — 2026-03-31
Introducing suggested prompts — click + in Claude Desktop to see "Check my inbox", "Today's schedule" and more. Tap Report a Bug in the menu bar to send feedback instantly.

## v1.85 — 2026-03-31
You can now report bugs directly from the menu bar. Cleaner post-install instructions. Better experience for Windows users visiting the site.

## v1.84 — 2026-03-28
Deploy pipeline improvements across all distribution channels.

## v1.81 — 2026-03-28
Deploy pipeline improvements. All version numbers now sync automatically across npm, MCP Registry, and MCPB bundle.

## v1.76 — 2026-03-28
License activation from Settings UI. All 56 tools verified. Improved admin panel with trial days, plan type, and timezone. Quit stops all processes.

## v1.71 — 2026-03-28
Unique device tracking across all surfaces. Email change in Cloud Relay now updates correctly. Create email folders. 54 AI tools.

## v1.60 — 2026-03-28
Settings changes now persist correctly across restarts. Full UTF-8 support for calendar names in all languages.

## v1.56 — 2026-03-28
Fine-grained permissions — control Read and Write access separately for each email account, calendar, OneDrive folder, and Teams tenant. See available tools per service.

## v1.55 — 2026-03-28
Live log viewer with color-coded levels (errors in red, warnings in orange). Bug reports now automatically include diagnostic data for faster resolution.
