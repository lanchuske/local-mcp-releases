## v3.0.160 — 2026-05-01

One-click install: download the extension file and open it in Claude Desktop — no terminal needed. Auto-updates included. Also improved Outlook email guidance and privacy enhancements.

## v3.0.159 — 2026-05-01

One-click install: download the .mcpb extension and drop it into Claude Desktop. Also improved Outlook guidance — email tools now explain how to connect Exchange accounts.

## v3.0.158 — 2026-05-01

Your AI agent connects automatically. LMCP now detects when you install a new AI client and offers to configure it with one click — no manual config editing needed.

## v3.0.157 — 2026-05-01

Privacy improvement: problem reports now ask for your permission before sending, show a preview of what will be sent, and only include anonymous technical data. No personal information is ever transmitted.

## v3.0.156 — 2026-04-30

Email setup: LMCP now asks for your email during install. Teams and Slack connect faster on Windows. Search and list emails are smarter — no more timeouts on multi-account setups.

## v3.0.155 — 2026-04-30

Faster setup: LMCP now auto-restarts your AI client after install — no manual restart needed. Calendar events can now target a specific calendar by name.

## v3.0.154 — 2026-04-29

Notes search 10x faster with native query. Notes listing uses batch access (3 calls vs 200). Cloud relay on Windows. Enhanced tray with activity feed. Heartbeat every 5 min. 40 QA tests. Code-signed Windows binaries.

## v3.0.150 — 2026-04-28

Improved reliability of Email and Notes tools. Fixed Teams detection for accounts set up recently. Internal performance improvements.

## v3.0.147 — 2026-04-27

Uninstall now fully cleans AI client configs, security fixes for loopback binding and update verification

## v3.0.146 — 2026-04-27

Cross-platform Desktop Extension support: install Local MCP in Claude Desktop on macOS or Windows in two clicks.

## v3.0.145 — 2026-04-27

Language selector in tray, uninstall with feedback, bug fixes

## v3.0.144 — 2026-04-26

Fixed an issue where LocalMCPTray could not auto-start when launched from Claude Desktop on some machines. Fixed a bug where auto-updates could reset Calendar and Contacts permissions. Improved error messages when LocalMCPTray fails to install.

## v3.0.143 — 2026-04-26

Download for Windows button. Standalone installer — no Node.js required. 57 tools including daily briefing.

## v3.0.141 — 2026-04-26

57 Windows tools including daily briefing. System tray app. Auto-update. App detection telemetry. 3 new Windows setup guides.

## v3.0.140 — 2026-04-26

Windows installer now works with Microsoft Store Claude Desktop. Fixed MSIX path detection and npx command wrapper.

## v3.0.139 — 2026-04-26

Windows support (beta). 52 tools for Outlook, OneDrive, Excel, Teams, Slack and more. Install on Windows: npx local-mcp setup.

## v3.0.138 — 2026-04-25

Fixed a silent connection failure for users with multiple Node.js versions installed via nvm. If Claude Desktop was picking up an old Node version, LMCP would fail to start with no visible error. Now shows a clear message with the fix, and the correct Node version is always used automatically.

## v3.0.137 — 2026-04-25

Calendar permissions are now detected correctly — users with Add Events Only will see a fix prompt. Setup now works without Python or Homebrew on any Mac. Roo-Cline and Claude Code are now supported as AI clients in the tray. Email searches on machines with many accounts are more reliable.

## v3.0.136 — 2026-04-25

Install setup now captures which AI client was configured. Email prompt errors are now reported correctly. Bug fixes and reliability improvements.

## v3.0.135 — 2026-04-25

LMCP now restarts automatically if it stops unexpectedly — no more 'Local MCP is not running' errors after an update. The menu bar icon stays visible and reconnects on its own.

## v3.0.134 — 2026-04-25

Update reliability: LMCP now restarts cleanly after downloading an update — no more dropped connections in Claude Desktop. Search emails is faster, with a timeout so it never hangs on large mailboxes. Notes tools now work even when Notes.app is closed.

## v3.0.133 — 2026-04-24

Setup wizard now exits cleanly after completing instead of hanging in the terminal.

## v3.0.132 — 2026-04-24

Fixed a startup error that prevented the setup wizard from completing on fresh installs.

## v3.0.131 — 2026-04-24

Settings email now saves and shows instantly. Tray shows a banner when the server updates itself — prompting you to start a new conversation in your AI client.

## v3.0.125 — 2026-04-24

Fixed a crash that occurred when running multiple tool calls at startup. Messages, Notes, Safari, and Mail permission prompts now appear correctly when the app first launches.

## v3.0.124 — 2026-04-24

Fixed a false notification about missing Calendar and Reminders permissions. Messages now properly requests Automation access on first use.

## v3.0.123 — 2026-04-24

Mail, Safari, Notes, and Messages tools now work reliably on macOS 26 Tahoe. Fixed a permissions issue where system automations were silently blocked on newer macOS versions.

## v3.0.122 — 2026-04-24

Email, Notes, Messages, and Safari tools no longer lose access after an update. Fixed a reliability issue where tool permissions would reset each time the app updated.

## v3.0.121 — 2026-04-23

Email is faster (removed a per-message blocking call that caused timeouts on Exchange accounts). Teams chat messages now show better diagnostics when empty. OmniFocus tools handle missing app gracefully. Tray stays visible and auto-restarts after crashes.

## v3.0.120 — 2026-04-23

Fixed iMessage conversations not loading in list_message_chats.

## v3.0.119 — 2026-04-23

Mail, Messages, Notes, and Safari now reliably request the required permissions on first launch.

## v3.0.118 — 2026-04-23

Fixed a bug that could prevent the app from updating to newer versions on some Mac configurations.

## v3.0.117 — 2026-04-23

Fixed a bug where the app could get stuck on an older version and stop receiving updates.

## v3.0.116 — 2026-04-23

Automation permissions for Mail, Messages, Notes, and Safari are now requested automatically on first launch. No more silent permission failures after updates.

## v3.0.116 — 2026-04-23

Automation permissions for Mail, Messages, Notes, and Safari are now requested automatically on first launch. No more silent permission failures after updates.

## v3.0.115 — 2026-04-23

First-time setup now automatically installs the background process that handles Automation permissions for Mail, Messages, Safari, and Notes. This prevents permission resets after future updates.

## v3.0.114 — 2026-04-23

Automation permissions for Mail, Messages, and Safari no longer reset after updates. A new stable co-process handles all JXA automation so macOS grants it permanent access.

## v3.0.113 — 2026-04-22

Notes, Messages, Safari, and OmniFocus tools are now fully operational. Fixed a parsing bug that caused all JXA-based tools to return errors since manifest v9.

## v3.0.112 — 2026-04-22

Email, Calendar, Contacts, Notes, and Messages tools restored. Fixed a regression introduced in the previous release that caused several tools to appear unavailable or fail with permission errors on macOS 26.x.

## v3.0.111 — 2026-04-22

Settings now shows the manifest version. Bug fixes and stability improvements.

## v3.0.110 — 2026-04-22

New: report issues and request integrations directly from Claude. Added to-do list support. Performance improvements and bug fixes.

## v3.0.109 — 2026-04-22

The admin panel now shows which manifest version is running on each machine.

## v3.0.108 — 2026-04-22

Added support for JetBrains IDEs and Continue as AI client options. Settings and services can now update automatically.

## v3.0.106 — 2026-04-22

Reminders management is now complete — mark reminders done, delete them, and browse your lists directly from Claude.

## v3.0.105 — 2026-04-21

Calendar, Contacts, and Reminders tools now load dynamically — faster updates without reinstalling.

## v3.0.103 — 2026-04-21

Calendar, Contacts, and Reminders now show correctly as active after you've granted permission in System Settings. Fixed a display bug where these services appeared as 'Permission needed' even with Full Access enabled.

## v3.0.102 — 2026-04-21

Calendar, Contacts, and Reminders permissions now prompt correctly with the Local MCP icon.

## v3.0.101 — 2026-04-21

All macOS privacy dialogs (Calendar, Contacts, Reminders) now show the Local MCP icon. Reliability and performance improvements.

## v3.0.100 — 2026-04-21

Auto-updates now apply seamlessly without breaking your Claude Desktop connection. Silent tool failures are now automatically tracked and surfaced in the admin panel.

## v3.0.99 — 2026-04-21

Calendar and Reminders status in the menu bar now accurately reflects actual permissions. Fixed a rare issue where Calendar and Reminders could show as available even after macOS reset their permissions. Permission request dialogs now appear proactively for all three services on first launch.

## v3.0.98 — 2026-04-21

WhatsApp now available for all users. The app automatically installs and keeps WhatsApp tools up to date alongside every other update — no manual setup required. Contacts and Calendar permissions work reliably after updates. Fixed an issue where permissions could appear lost after an update, and another where the system permission dialog would never appear for Contacts. Cleaner System Settings: resolved an issue that caused multiple duplicate entries to accumulate in Privacy & Security over time.

## v3.0.97 — 2026-04-20

Tray Install button now triggers updates immediately. Fixed duplicate permissions notice after update. Better guidance when Teams channels or emails aren't accessible.

## v3.0.96 — 2026-04-20

Fixes a permission prompt that appeared when installing on macOS Sonoma and Sequoia. Email reliability improvements for Exchange and Outlook accounts — messages found by search are now accessible via read. Better error messages when Mail automation permission is not granted.

## v3.0.95 — 2026-04-20

Removed Microsoft 365 directory tools (connect_m365_account, search_m365_directory). These required Azure Active Directory setup and went against local-first principles. Your org directory is still searchable via Contacts — macOS syncs Exchange contacts locally through Contacts.app, no authentication required.

## v3.0.92 — 2026-04-20

You can now edit existing calendar events directly — change the title, time, location, or notes without canceling and recreating. Works with recurring events too (update just this one or all future occurrences).

## v3.0.91 — 2026-04-20

Email categories for Outlook/Exchange accounts, faster file search.

## v3.0.90 — 2026-04-20

Exchange email now works reliably. Read and search messages across all Exchange folders — including Sent Items and nested mailboxes — without errors or missing results.

## v3.0.89 — 2026-04-19

Anonymous cloud relay activation — no more email prompts during curl|bash installs. Cloud connect works out of the box; link an email later at local-mcp.com/settings to sync across Macs. (LMC-605)

## v3.0.85 — 2026-04-19

Bug fixes: graceful 45s drain before auto-update prevents dropped tool calls; self-update now restarts in stdio mode (fixes ~48 stuck machines); Gmail IMAP save_attachment retry fix; recover tray-less stuck machines; tray shows Not connected after 60s timeout. New: TCC auto-prompt for Calendar/Contacts/Reminders on startup; WhatsApp Connect button in tray menu.

## v3.0.84 — 2026-04-19

Fixed a crash where the tray showed as offline when WhatsApp was connected. Fixed duplicate tray icons appearing in the menu bar. Fixed background processes that were not cleaned up during a session. Improved monitoring for machines that go temporarily offline.

## v3.0.83 — 2026-04-19

- Fixed an issue where Excel files with only numbers wouldn't open
- Fixed zombie processes that accumulated when AI clients disconnected
- Permission setup is now faster — grant access directly from the menu bar
- Machines stuck on old versions will now update automatically

## v3.0.82 — 2026-04-18

Morning briefing in one call. New daily_brief tool combines your calendar, reminders, and inbox into a single morning overview. Also includes: improved setup flow, chat history blob handling fix, notification improvements, and UI rebrand to LMCP.

## v3.0.81 — 2026-04-18

v3.0.81: Fix TCC permission cascade, OneDrive cloud placeholders, daemon tunnel conflicts. Add fleet health monitoring, activation nudge, tray suggestions.

## v3.0.80 — 2026-04-18

Connection stability: fixes server disconnections after updates. Your Claude Desktop connection now stays alive through auto-updates.

## v3.0.79 — 2026-04-18

Connection stability: LMCP no longer disconnects from Claude Desktop after updates.

## v3.0.78 — 2026-04-18

Stability fix: resolves server disconnections after auto-update. Your tools stay connected now.

## v3.0.77 — 2026-04-18

Startup fix: automatically cleans up stale processes from previous versions. Resolves 'Server disconnected' errors after updates. Slack now visible in the menu bar.

## v3.0.76 — 2026-04-18

Tray fix: resolves 'Offline' status showing on all services after v3.0.74 update. Slack channels now visible in the menu bar. All your tools and data are safe — just a display fix.

## v3.0.75 — 2026-04-18

File reading is more reliable — Excel and Word tools no longer hang on cloud-synced files. If macOS resets app permissions after an update, the menu bar now shows a Fix Permissions prompt to get you back on track quickly.

## v3.0.74 — 2026-04-18

LMCP now guides you from install to first tool call. Smart prompts suggest what to try based on your connected apps. A new Recipes tab shows ready-to-use workflows you can copy and paste. Plus: Slack channel reading is here.

## v3.0.73 — 2026-04-17

OmniFocus is now instant. Previously, checking tasks could hang for up to 60 seconds when OmniFocus wasn't installed — now it responds immediately with a clear message. Cloud relay handles multiple requests simultaneously for faster email access.

## v3.0.72 — 2026-04-17

Email is more reliable. When Mail.app isn't running, you'll get a clear message instead of a long wait. Excel now handles iCloud files seamlessly. Calendar events with all-day dates and email replies work better. First-time users get helpful example prompts to get started faster. Several stability improvements for Ventura users.

## v3.0.71 — 2026-04-16

Fixed a bug where sending an email would leave a duplicate message in the Drafts folder.

## v3.0.70 — 2026-04-16

v3.0.70: fix list_emails JXA timeout on Ventura+Exchange (FB-C1D537) — budget whose() probe loops to 3s, preventing 13-probe×3s=39s overrun

## v3.0.69 — 2026-04-16

fix(mail): cache dateSent() + proactive outreach needed for D2494FB7 (LMC-39)

## v3.0.68 — 2026-04-16

LMC-40: show TRIAL badge for trial users (was FREE / Early adopter)

## v3.0.67 — 2026-04-16

fix(mail): LMC-39 eager property capture — eliminates deferred Exchange round-trips from list_emails sort+serialize

## v3.0.66 — 2026-04-16

LMC-29: lower stale_warning threshold 10→7 to push reinstall prompt to v3.0.56 stuck machines

## v3.0.65 — 2026-04-16

Teams IndexedDB fix (6910018) + identity tray prompt banner (ba9dea4) — CEO-approved bundle per LMC-9

## v3.0.63 — 2026-04-16

New onedrive_set_scope tool — your AI assistant can now restrict OneDrive access to a specific folder directly, no config file editing needed. Just ask: Restrict my OneDrive access to the Claude workspace folder.

## v3.0.62 — 2026-04-16

OneDrive folder scoping — restrict LMCP access to specific folders per OneDrive account. Configure allowed paths in config.json, enforced across all read, write, and delete operations. Built for enterprise teams with sensitive documents.

Smarter Safari automation — new back button tool, link extraction for navigating dashboards, and automatic page-load waiting after clicks.

Read 55+ file types from OneDrive — now supports HTML, TypeScript, Java, Go, Rust, SQL, Dockerfile, and many more code and config files.

New onedrive_file_info tool — get file size, dates, and type without listing the entire directory.

## v3.0.61 — 2026-04-16

Email is faster and more reliable on Exchange accounts. Inbox detection now uses a fast lookup before walking the mailbox tree, eliminating timeouts on deep folder hierarchies.

Smarter permission guidance. When a macOS permission is missing, your AI assistant now tells you exactly how to fix it before you hit an error.

Getting started suggestions. New users get concrete examples of what to ask — like Read my latest emails or What is on my calendar — so you can start using LMCP right away.

## v3.0.60 — 2026-04-15

The menu bar app now reads state directly from a shared file instead of polling your local server over HTTP, making it lighter and faster. Calendar now detects when macOS gives it limited access and shows a clear message explaining how to upgrade to full access in System Settings. The auto-updater no longer silently deadlocks on startup — a threading bug that prevented update telemetry from working since v3.0.54 has been fixed. Fresh installs no longer briefly flash an expired license warning. Activity counts in the menu bar now show cloud vs local calls separately.

## v3.0.59 — 2026-04-15

Reliability improvements to the auto-updater.

## v3.0.58 — 2026-04-15

Local MCP now gently asks for your email the first time you open the menu bar — so we can reach you if something breaks or when a major fix ships. You can dismiss the prompt and we won't ask again for a week, or permanently after a few dismissals. If you prefer to stay anonymous, just ignore it. No spam, no marketing — only important fixes and release notes.

## v3.0.56 — 2026-04-14

Email is much faster on corporate Outlook and Exchange accounts with lots of folders. Previously, asking Claude to 'check my unread email' could time out if your inbox was nested inside a deep folder tree. Now the email tool finds your inbox quickly and gracefully handles accounts that are mid-sync. Also fixed a documentation mismatch where the tool list mentioned Outlook-specific tools that didn't exist — the regular email tools work against Outlook accounts directly once you add them to Mail.app.

## v3.0.55 — 2026-04-14

Email now works reliably on Macs running in languages other than English. If your Mac's interface is in Spanish, French, German, Italian, Portuguese, Dutch, Japanese, Korean, Chinese, Russian, or most other languages, Claude and other AI agents can now find and read your inbox automatically without you having to spell out the exact mailbox name. This release also includes small behind-the-scenes improvements to the menu bar app and self-update health monitoring.

## v3.0.53 — 2026-04-14

Email is more reliable on accounts that take a moment to connect. When one account is slow, LMCP now moves on and shows you the messages from the rest instead of timing out. Saving attachments from Exchange mail is much more dependable too — LMCP retries automatically if the server is still downloading the file. OneDrive files open faster and give a clear message if they haven't finished syncing yet. The file reader now handles text files from banking systems and other legacy sources that use non-UTF-8 encodings. Calendar permission errors are clearer. Stock chart lookups are resilient to Yahoo rate limiting.

## v3.0.52 — 2026-04-12

Email attachments save reliably now. Reading emails on Exchange accounts is faster. OneDrive write errors show clear fix instructions.

## v3.0.51 — 2026-04-11

Cloud connections from Claude.ai and ChatGPT now work end-to-end. We fixed a routing bug that was preventing tool calls from reaching your Mac through the cloud relay, and we improved how permissions survive across updates so you should see fewer 'permission denied' messages right after auto-update.

## v3.0.48 — 2026-04-11

Listing emails on Macs with multiple accounts is now reliable — no more timeouts when asking Claude to read your inbox.

## v3.0.47 — 2026-04-11

Teams chat reading is now resilient to corrupted or outdated records in Microsoft Teams' local storage — no more empty results or errors when asking Claude to read a Teams conversation.

## v3.0.46 — 2026-04-11

list_emails is now reliable with multiple Mail accounts on macOS Sequoia — no more stalls or empty results when you ask Claude to check your inbox.

## v3.0.45 — 2026-04-11

Better admin telemetry for TCC permission state — we can now spot machines that need permission re-enabling after macOS updates.

## v3.0.44 — 2026-04-11

Admin analytics now reflect the real number of tool calls per machine — previously stuck at zero for stdio clients.

## v3.0.43 — 2026-04-11

Tray email changes now sync to the admin dashboard and cloud relay in real time.

## v3.0.42 — 2026-04-11

Microsoft Teams now works for all users (multi-tenant). Cleaner admin push messages. Better warnings for outdated installs.

## v3.0.41 — 2026-04-11

Fixes 4 bugs found during QA: better error messages for missing files, admin trial-users dashboard, cleaner errors when reading missing chats/notes, and correct version number in tray About box.

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