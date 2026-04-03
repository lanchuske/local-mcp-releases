# Pilot MCP — Your AI agent for Mac

[![npm](https://img.shields.io/npm/v/local-mcp)](https://www.npmjs.com/package/local-mcp)
[![platform](https://img.shields.io/badge/platform-macOS-blue)](https://local-mcp.com)
[![smithery badge](https://smithery.ai/badge/@lanchuske/local-mcp)](https://smithery.ai/server/@lanchuske/local-mcp)

**Give Claude, Cursor, Windsurf, or any AI agent native access to your Mac — Mail, Calendar, Teams, OneDrive, Notes, OmniFocus, and 80+ more tools. Everything runs locally. Your data never leaves your machine.**

```bash
npx -y local-mcp@latest setup
```

> Installs in 2 minutes. Auto-configures Claude Desktop, Cursor, Windsurf, VS Code, and Zed. No cloud. No API keys. No credit card for the 14-day trial.

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
| **Stocks** | "What's Apple trading at?" · "Show me Tesla's 6-month chart" |

82 tools total. Read operations run instantly. Destructive actions (send email, delete event) show a preview and ask for confirmation first.

---

## Install

```bash
npx -y local-mcp@latest setup
```

Auto-detects and configures: **Claude Desktop · Claude Code · Cursor · Windsurf · VS Code · Zed**

Restart your AI client once. That's it.

**Requirements:** macOS 13+, Node.js 18+, Apple Silicon or Intel

---

## Add to Smithery

[![Install on Smithery](https://smithery.ai/badge/@lanchuske/local-mcp)](https://smithery.ai/server/@lanchuske/local-mcp)

Use Pilot MCP from Claude.ai, ChatGPT or any cloud AI client via the Smithery cloud connector.

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

### Microsoft Teams without tokens

Teams reads messages directly from the local IndexedDB LevelDB cache at `~/Library/Containers/com.microsoft.teams2/...`. No OAuth. No Graph API. No Microsoft account tokens. Works even when Teams is offline.

### Cloud Relay (optional)

Claude.ai and ChatGPT can't reach localhost. Enable Cloud Relay in the menu bar app — a secure WebSocket tunnel routes cloud requests to your local server. Your data is encrypted in transit and never stored on our servers.

---

## Privacy

- Your email, calendar, contacts, files, and messages **never leave your Mac**
- No telemetry beyond anonymous heartbeats (version + OS + uptime, no content)
- The only outbound request to our servers is license validation
- GDPR and CCPA compliant by architecture — not just by policy

---

## Pricing

| Plan | Price | Includes |
|------|-------|---------|
| Trial | Free, 14 days | All 82 tools, no credit card |
| Pro | [local-mcp.com/#pricing](https://local-mcp.com/#pricing?utm_source=github) | Full access, priority support |

---

## Support

- **In your AI client:** ask Claude to run `report_bug` or `request_feature`
- **GitHub:** open an issue
- **Email:** support@local-mcp.com
- **Website:** [local-mcp.com](https://local-mcp.com?utm_source=github)
