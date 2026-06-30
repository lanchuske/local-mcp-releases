# Security & architecture

This document explains what Local MCP (LMCP) is, what it does and doesn't do with your
data, and how to verify it — so security reviewers, directory scanners, and privacy-conscious
users can audit it even though the macOS client is distributed as a signed binary.

## What's in this repo vs. what's the binary

- **This public repo** (`local-mcp-releases`) contains the **npm wrapper** (`server.js`,
  `package.json`), the install/config metadata (`mcp.json`, `llms-install.md`), the Cursor
  skills/rules, and docs. The npm wrapper has **no `postinstall`/install scripts** — verify
  with `npm view local-mcp` (no `scripts.postinstall`).
- **The macOS client** (`LocalMCPTray.app` + the embedded MCP server) is a **closed-source
  Swift binary**, distributed via the notarized DMG / `curl | bash` installer. It is the
  component that talks to your Mac's apps.

## How to verify the binary is genuine

The client is signed with a real **Apple Developer ID** and **notarized** by Apple. After
install, verify:

```bash
codesign -dvvv /Applications/LocalMCPTray.app 2>&1 | grep Authority
# Authority=Developer ID Application: Magno Partners Consulting (F7S4WH844B)

spctl -a -vvv /Applications/LocalMCPTray.app
# source=Notarized Developer ID  → Apple has scanned this build for malware
```

Notarization means Apple has already run an automated malware scan on every release.

## What data goes where

- **Tool calls run on-device.** LMCP reads your apps directly through macOS frameworks
  (EventKit for Calendar/Reminders, CNContactStore for Contacts, JXA/AppleScript for
  Mail/Messages/Notes, the local LevelDB/SQLite stores for Teams/Slack/iMessage). Email,
  message, calendar and file **contents are processed locally and are never sent to our
  servers**.
- **What LMCP's backend receives:** anonymous heartbeats (version, OS, a machine UUID) for
  update/availability, and license validation. **Not** your tool inputs or outputs.
- **The optional Cloud Relay** (off by default; you enable it in the menu-bar app to use
  web AIs like ChatGPT/Claude.ai/Grok): an **encrypted WebSocket tunnel** that lets a cloud
  AI *trigger* a tool on your Mac. The tool still runs locally; the relay forwards the request
  and the response **without persisting tool responses**. For desktop/CLI clients (Claude
  Desktop, Cursor, VS Code) the relay isn't used at all — nothing leaves the Mac.

So the honest framing is: **tools execute on your machine; for desktop clients nothing leaves
the Mac; the relay is an opt-in encrypted path for web AIs.** We do not claim "no cloud
exists" — we claim your data is processed locally and not stored by us.

## Permissions

LMCP only works with the macOS permissions you explicitly grant (Automation, Full Disk Access,
Calendar/Contacts/Reminders) via the standard system prompts. It requests nothing silently;
revoking a permission in System Settings disables the corresponding tools.

## No prompt injection / no instruction-override

The bundled skills and rules use preview-before-send for any write/send action and contain no
hidden instructions to the model. Destructive tools (send, delete, move) require explicit
confirmation.

## Reporting a vulnerability

Email **security@local-mcp.com** (or open a private advisory on this repo). We aim to respond
within 72 hours. Please don't file public issues for security reports.
