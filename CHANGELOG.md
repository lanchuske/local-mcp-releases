## v3.0.40 — 2026-04-10

Cleaner permission management. Also fixes Gmail/Exchange/iCloud inbox detection and Teams chat duplicates.

## v3.0.39 — 2026-04-10

Fixes a critical bug where macOS privacy panel was filling with duplicate LMCP entries on every update. Also fixes Gmail/Exchange/iCloud inbox detection and Teams chat duplicates.

## v3.0.37 — 2026-04-10

Smarter problem reports — Claude.ai now auto-attaches versions, permissions, recent logs, and tool history when something fails.

## v3.0.36 — 2026-04-10

Smarter problem reports — Claude.ai now auto-attaches versions, permissions, recent logs, and tool history when something fails.

## v3.0.35 — 2026-04-10

Bug reports and feature requests now reach the team. Feature Requests panel shows only real requests. Support email updated.

## v3.0.34 — 2026-04-10

Cloud connection more reliable. Tray reliably cleans up after crash. Permission warnings now appear after macOS resets them.

## v3.0.33 — 2026-04-10

Calendar/Contacts permissions: clearer error messages and a tray notification when macOS resets them after an update.

## v3.0.32 — 2026-04-10

VS Code setup now works correctly. Improved AI client detection.

## v3.0.31 — 2026-04-10

Faster cloud responses — list_emails and other tools no longer make the connector time out.

## v3.0.30 — 2026-04-10

Cloud connection status updates faster and more reliably.

## v3.0.29 — 2026-04-10

Fixes tray showing 'connecting' when the cloud tunnel is actually up.

## v3.0.28 — 2026-04-10

Cloud connection now self-heals after updates and network drops — no more stuck tunnels.

## v3.0.27 — 2026-04-10

Fix: the tray app now auto-updates correctly when the daemon does. Previously the daemon could keep updating its own binary while the tray stayed on the original installed version forever.

## v3.0.26 — 2026-04-10

One-click OAuth approval from the menu bar. When ChatGPT or Claude.ai web requests access, you get a notification on your Mac and click Approve once — no more copying tokens.

## v3.0.25 — 2026-04-10

Daemon now auto-updates itself: when a new version ships, the daemon downloads it and restarts within ~3 seconds without losing the cloud tunnel for long. No manual restart needed.

## v3.0.24 — 2026-04-10

Cloud Relay tunnel now stays connected even when you close every MCP client. The LMCP menu bar app keeps a dedicated daemon alive so Claude.ai web and ChatGPT keep working without needing Claude Desktop running in the background.

## v3.0.23 — 2026-04-10

Recent activity history shows your last MCP tool calls in the menu bar. Update notifications now include release notes inline. Behind the scenes: refresh tokens, revoke endpoint, faster admin telemetry, and security headers.

## v3.0.22 — 2026-04-10

Fix: list_emails and search_emails now work on Macs set to Spanish, French, German and 13 other languages. Previously they could return empty for accounts whose inbox was named in your local language (e.g. 'Bandeja de entrada' in Spanish).

## v3.0.21 — 2026-04-10

Tray icon now pulses when there is MCP activity — green for local stdio calls and indigo for Cloud Relay calls. New step-by-step guide for Claude.ai web setup. Tested end-to-end with real Mail.app accounts via Cloud Relay.

## v3.0.20 — 2026-04-10

Redesigned settings page with clearer Home dashboard and dedicated Connect tab. ChatGPT and Claude.ai web setup is now guided with copy-ready credentials in the menu bar. Settings page opens reliably after updates.

## v3.0.19 — 2026-04-10

Cloud Data Forwarding toggle now translated to 10 languages (Spanish, Portuguese, French, German, Italian, Dutch, Chinese, Japanese, Korean).

## v3.0.18 — 2026-04-10

Cloud Relay is now privacy-first by default. Cloud agents (claude.ai, sheet add-ins) only see setup tools unless you opt in. Toggle 'Cloud Data Forwarding' from the menu bar when you want them to access Mail, Calendar, Teams, and OneDrive on this Mac. Also fixes a duplicate connection issue when running multiple AI client conversations.

## v3.0.17 — 2026-04-08

Fixed tray build — now correctly compiles with TrayStrings.swift. LMCP branding in tray menu bar.

## v3.0.16 — 2026-04-08

Tray rebrand to LMCP. Server binary auto-updates on version mismatch.

## v3.0.15 — 2026-04-08

Server binary now auto-updates when a new version is available. Previously, machines could stay on old versions indefinitely. Also includes all recent bug fixes and the LMCP rebrand.

## v3.0.14 — 2026-04-06

LMCP is now free for all early adopters — no more trial countdown. Your license never expires. Also: new name (LMCP), PDF reading fixed, calendar dates corrected, OneDrive auto-download.

## v3.0.13 — 2026-04-06

LMCP is the new name. Same product, same tools, shorter name. Also includes: PDF reading fixed (native PDFKit), calendar all-day dates corrected, OneDrive files auto-download.

## v3.0.11 — 2026-04-06

PDF files now open reliably — no more dependency errors. Calendar all-day events show the correct end date. OneDrive files download automatically when your AI reads them — no need to open Finder first.

## v3.0.8 — 2026-04-05

Send rich HTML emails. You can now send beautifully formatted emails with tables, links, and styling using the new html_body parameter. Cloud connector discovery is smarter — AI agents get useful tool descriptions and one-command install instructions.

## v3.0.7 — 2026-04-05

Send rich HTML emails. The send_email tool now supports an html_body parameter, so you can send beautifully formatted emails with tables, links, and styling — directly from your AI agent.

## v3.0.6 — 2026-04-05

Settings page now dynamically shows all available services. NordVPN appears in both the menu bar tray and Settings when installed.

## v3.0.5 — 2026-04-05

NordVPN now appears in the menu bar tray with real-time connection status. Your VPN section shows whether you're connected or disconnected, updating automatically.

## v3.0.4 — 2026-04-05

Fixed: Contacts app no longer opens unexpectedly. A background process was briefly launching the Contacts app every minute — this is now resolved.

New: NordVPN integration. Check your VPN connection status, get server recommendations by country, and run diagnostics — all from your AI assistant. Connect/disconnect is still done in the NordVPN app.

## v3.0.3 — 2026-04-05

The app now speaks your language. Tray, settings, and web are available in Italian, Dutch, and 10 other languages — auto-detected from your system preferences.

## v3.0.2 — 2026-04-05

Teams integration is now more reliable with timeout protection. Email listing is faster for accounts with many folders. Better error messages for OneDrive cloud files and PowerPoint.

## v3.0.1 — 2026-04-05

Outlook integration now guides you to connect accounts through Mail.app for full email access. Claude Code is now automatically configured during setup. Smarter version numbering for more reliable updates.

## v3.0.0 — 2026-04-05

Version numbering is now clearer and more consistent. Under the hood, all version comparisons have been upgraded to full semantic versioning for more reliable updates.

## v2.13 — 2026-04-05

Smarter updates and self-healing. Excel and PowerPoint tools now auto-install dependencies. Improved AI client detection for Claude Desktop and Cursor. Leave a review directly from your AI assistant. Push notifications now reach your menu bar.

## v2.12 — 2026-04-04

Smarter updates. Your AI clients now auto-detect and connect to the latest version of Pilot MCP. Improved AI client detection for Claude Desktop, Cursor, Windsurf, and VS Code. Push notifications from the admin now reach your menu bar. Leave a review directly from your AI assistant with the new leave_review tool.

## v2.11 — 2026-04-04

Excel, Word, and PowerPoint now work out of the box — no manual setup needed.

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