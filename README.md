# Pilot MCP — Your AI agent for Mac

[![npm](https://img.shields.io/npm/v/local-mcp)](https://www.npmjs.com/package/local-mcp)
[![Glama](https://glama.ai/mcp/servers/lanchuske/local-mcp-releases/badge)](https://glama.ai/mcp/servers/lanchuske/local-mcp-releases)
[![smithery badge](https://smithery.ai/badge/@lanchuske/local-mcp)](https://smithery.ai/server/@lanchuske/local-mcp)
[![platform](https://img.shields.io/badge/platform-macOS-blue)](https://local-mcp.com)

**Give Claude, Cursor, Windsurf, or any AI agent native access to your Mac — Mail, Calendar, Teams, OneDrive, Notes, OmniFocus, and 80+ more tools. Everything runs locally. Your data never leaves your machine.**

```bash
curl -fsSL https://local-mcp.com/install | bash
```

> Installs in 2 minutes. Auto-configures Claude Desktop, Cursor, Windsurf, VS Code, and Zed. No cloud. No API keys. **Free during early access.**

⭐ **Like it? [Star this repo](https://github.com/lanchuske/local-mcp-releases)** — it helps others discover Pilot MCP.

<p align="center">
  <img src="assets/claude-tools.png" alt="Claude Desktop showing 78 tools across 15 categories with Pilot MCP" width="700">
</p>
<p align="center"><em>78 tools across 15 categories — Mail, Calendar, Teams, OneDrive, Notes, OmniFocus, and more</em></p>

<details>
<summary>Menu bar app</summary>
<p align="center">
  <img src="assets/tray-app.png" alt="Pilot MCP menu bar app" width="340">
</p>
<p align="center"><em>All your Mac apps connected — Mail, Calendar, Teams, OneDrive, and more</em></p>
</details>

---

## What your AI can do

| App | What you can ask |
|-----|-----------------|
| **Mail** | "Summarize my unread emails" · "Send a reply to Jana saying I'll be 10 minutes late" · "Find all emails from the contracts team last week" |
| **Calendar** | "What do I have tomorrow?" · "Schedule a team sync Friday at 3pm" · "Cancel my 2pm meeting" |
| **Contacts** | "Get Jana's phone number" · "Find everyone at Acme Corp" |
| **Microsoft Teams** | "What did the engineering channel say today?" · "Show me my last conversation with Marco" |
| **OneDrive** | "Find the Q1 report" · "Upload this summary to the shared folder" · "What's in my Documents?" |
| **Microsoft Outlook** | "Read my Outlook inbox" · "Send a meeting invite to the team" |
| **Reminders** | "Add a reminder to call the bank tomorrow at 9am" · "What's on my list?" |
| **OmniFocus** | "Show my overdue tasks" · "Create a task to review the contract" |
| **Notes** | "Search my notes for the API keys" · "Create a note with today's decisions" |
| **Messages** | "What did Ana send me this morning?" · "Search my iMessages for the address" |
| **Word / Excel / PowerPoint** | "Read this contract" · "Create a spreadsheet with these numbers" |
| **PDF** | "Summarize this PDF" |
| **Finder** | "Find all files named 'invoice' on my Mac" |
| **Safari** | "List my bookmarks in the Dev folder" |

82 tools total. Read operations run instantly. Destructive actions (send email, delete event) show a preview and ask for confirmation first.

---

## Install

```bash
curl -fsSL https://local-mcp.com/install | bash
```

Auto-detects and configures: **Claude Desktop · Claude Code · Cursor · Windsurf · VS Code · Zed**

Restart your AI client once. That's it.

**Alternative install:**

```bash
curl -fsSL https://local-mcp.com/install | bash
```

**Requirements:** macOS 12+, Apple Silicon or Intel

---

## How it works

```
Claude Desktop / Cursor / Windsurf / VS Code / Zed
        │  MCP protocol (stdio)
   Pilot MCP  ←  local-mcp npm package
        │  JXA · AppleScript · EventKit · native macOS APIs
   Mail · Calendar · Contacts · Teams · OneDrive · OmniFocus · …
```

The server starts on demand — no background daemon, no LaunchAgent. Each AI client spawns its own process when it needs it.

### Why native?

Most MCP servers call cloud APIs. Pilot MCP talks directly to macOS frameworks — EventKit for Calendar, AppleScript for Mail, native SQLite for Contacts. This means:

- **No API keys or OAuth** — works out of the box
- **No rate limits** — it's your own machine
- **Works offline** — no internet required for local apps
- **Sub-second** — no network round-trips

### Microsoft Teams without tokens

Teams reads messages directly from the local IndexedDB LevelDB cache. No OAuth. No Graph API. No Microsoft account tokens. Works even when Teams is offline.

### Cloud Relay (optional)

Claude.ai and ChatGPT can't reach localhost. Enable Cloud Relay in the menu bar app — a secure WebSocket tunnel routes cloud requests to your local server. Your data is encrypted in transit and never stored on our servers.

---

## Comparison with Alternatives

| Feature | Pilot MCP | apple-mcp | Composio | MS 365 Connector |
|---------|-----------|-----------|----------|-------------------|
| Runs locally | Yes | Yes | No (cloud) | No (cloud) |
| API keys needed | No | No | Yes | Yes (Azure AD) |
| Setup time | ~2 min | ~10 min | ~15 min | ~30 min |
| Total tools | 82+ | ~20 | Varies | ~15 |
| Microsoft Teams | Read (local cache) | No | Via Graph API | Via Graph API |
| OneDrive | Full CRUD | No | Via Graph API | Via Graph API |
| Calendar | List, create, delete | No | Via API | Via Graph API |
| Office docs | Create, read, edit | No | Limited | No |
| Notes & Reminders | Yes | Yes | No | No |
| Data privacy | 100% local | 100% local | Cloud processed | Cloud processed |
| Price | Free trial (14 days) | Free (OSS) | Free tier + paid | Free (with M365) |
| Platform | macOS only | macOS only | Cross-platform | Cross-platform |

---

## Privacy

- Your email, calendar, contacts, files, and messages **never leave your Mac**
- No telemetry beyond anonymous heartbeats (version + OS + uptime, no content)
- The only outbound request to our servers is license validation
- GDPR and CCPA compliant by architecture — not just by policy

---

## Add to Smithery

[![Install on Smithery](https://smithery.ai/badge/@lanchuske/local-mcp)](https://smithery.ai/server/@lanchuske/local-mcp)

Use Pilot MCP from Claude.ai, ChatGPT or any cloud AI client via the Smithery cloud connector.

---

## Support

- **In your AI client:** ask Claude to run `report_bug` or `request_feature`
- **GitHub:** [open an issue](https://github.com/lanchuske/local-mcp-releases/issues)
- **Email:** support@local-mcp.com
- **Website:** [local-mcp.com](https://local-mcp.com?utm_source=github)

---

## Roadmap

- Write support for Teams (send messages)
- Slack integration
- Google Drive (local sync folder)
- WhatsApp / Telegram
- Persistent AI memory across sessions
- Linux support

Have a feature in mind? Run `request_feature` from any AI client, or [open an issue](https://github.com/lanchuske/local-mcp-releases/issues).

---

⭐ **If Pilot MCP is useful to you, [star the repo](https://github.com/lanchuske/local-mcp-releases)** — it's the best way to help us grow.
