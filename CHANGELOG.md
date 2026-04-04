## v2.10 — 2026-04-04

Reduced battery and network usage. Teams now connects automatically.

## v2.9 — 2026-04-04

Teams integration now works out of the box. Improved automatic component updates.

## v2.8 — 2026-04-04

Fixed automatic updates failing on restart. Improved reliability.

# Changelog

All notable changes to Local MCP are documented here.


## v1.142 — 2026-04-02
Removed duplicate To Do entry from the menu bar — To Do works via macOS Reminders sync and is shown there. Documentation updated to clarify how Microsoft To Do integrates.

## v1.141 — 2026-04-02
Admin panel now shows which AI client (Claude Desktop, Cursor, Windsurf, VS Code) is connected per machine.

## v1.140 — 2026-04-02
Fixed a conflict where the old server version kept running after upgrading, causing two processes to compete for the same port.

## v1.139 — 2026-04-01
New: Stocks tools — live quotes, historical chart data, and symbol search via Yahoo Finance. No API key required.

## v1.138 — 2026-04-01
New: Microsoft To Do tools — list, create, and complete tasks directly from your AI client. Works via macOS Reminders sync.

## v1.137 — 2026-04-01
New: `version_info` tool shows server, tray, and teams-proxy versions. `list_my_feedback` now shows live open/closed status of your submitted reports.

## v1.136 — 2026-04-01
Fixed item counts showing true/false instead of numbers. Calendar same-day queries now return all events for that day. Clearer error messages for Outlook, Messages, and Safari.

## v1.135 — 2026-04-01
Teams tools now work automatically without manual setup.

## v1.134 — 2026-04-01
Machine timeline and tool usage metrics in admin panel.

## v1.133 — 2026-04-01
Admin panel now shows tray version per machine.

## v1.132 — 2026-04-01
Cloud Relay stays connected reliably.

## v1.131 — 2026-04-01
Fixed settings page errors and Cloud Relay status display.

## v1.130 — 2026-04-01
Server status refreshes every 30 seconds. Updates install automatically in the background.

## v1.129 — 2026-04-01
Detailed logs now written to server.log for easier debugging.

## v1.128 — 2026-04-01
Cloud Relay connection reliability improvements. Machine activity now visible in dashboard.

## v1.127 — 2026-04-01
Server now checks for updates every 30 minutes automatically.

## v1.126 — 2026-04-01
Contacts now detected even without full permissions. Cloud Relay no longer shows "Connecting" when not configured.

## v1.125 — 2026-04-01
OmniFocus: inbox filter, defer dates, flagged tasks, and completed task support. New quick prompts for emails and calendar.

## v1.124 — 2026-04-01
Cloud Relay: connect Claude.ai and ChatGPT remotely without keeping a local connection open.

## v1.123 — 2026-04-01
Settings page can now detect and auto-configure Claude Desktop, Cursor, VS Code, Windsurf, and Zed.

## v1.111–v1.122 — 2026-04-01
Stability improvements, performance fixes, and internal pipeline updates.

## v1.110 — 2026-04-01
Admin: machines table now shows license email and online status.

## v1.109 — 2026-04-01
Beta channel support: mark machines as beta testers from the admin panel to receive builds before they go to all users.

## v1.108 — 2026-04-01
Setup wizard is now fully in English. Improved first-run experience.

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