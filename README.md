# LMCP — Give Your AI Native Access to Mac Apps

[![npm](https://img.shields.io/npm/v/local-mcp)](https://www.npmjs.com/package/local-mcp)
[![macOS 12+](https://img.shields.io/badge/macOS-12%2B-blue)](https://local-mcp.com)
[![GDPR](https://img.shields.io/badge/GDPR-compliant-green)](https://local-mcp.com/en/privacy)
[![smithery badge](https://smithery.ai/badge/@lanchuske/local-mcp)](https://smithery.ai/server/@lanchuske/local-mcp)

**LMCP connects your AI assistant to Mail, Calendar, Contacts, Microsoft Teams, Slack, WhatsApp, OneDrive, Notes, Reminders, OmniFocus, and more — 111 tools, all running locally on your Mac. No cloud. No API keys. No OAuth. Your data never leaves your machine.**

```bash
curl -fsSL 'https://local-mcp.com/install?ref=github' | bash
```

> Installs in 2 minutes. Auto-configures Claude Desktop, Claude Code, Cursor, Windsurf, VS Code, and Zed. **Free for the first 500 installs — yours forever.**

⭐ **Like it? [Star this repo](https://github.com/lanchuske/local-mcp-releases)** — it helps others discover LMCP.

<p align="center">
  <img src="assets/claude-tools.png" alt="Claude Desktop showing 111 tools across 18 categories with LMCP" width="700">
</p>
<p align="center"><em>111 tools across 18 categories — Mail, Calendar, Teams, Slack, WhatsApp, OneDrive, Notes, OmniFocus, and more</em></p>

<details>
<summary>Menu bar app</summary>
<p align="center">
  <img src="assets/tray-app.png" alt="LMCP menu bar app" width="340">
</p>
<p align="center"><em>Status at a glance — all your Mac apps connected</em></p>
</details>

---

## What your AI can do

| App | What you can ask |
|-----|-----------------|
| **Mail** | "Summarize my unread emails" · "Reply to Jana saying I'll be 10 minutes late" · "Find emails from the contracts team last week" |
| **Calendar** | "What do I have tomorrow?" · "Schedule a team sync Friday at 3pm" · "Cancel my 2pm meeting" |
| **Contacts** | "Get Jana's phone number" · "Find everyone at Acme Corp" |
| **Microsoft Teams** | "What did the engineering channel say today?" · "Show my last conversation with Marco" |
| **Slack** | "Summarize #engineering from today" · "What did Ana say in the #design channel?" |
| **WhatsApp** | "Summarize my WhatsApp from this morning" · "Find the chat with Carla about the trip" *(via the unofficial Wacli client — requires QR-code sign-in)* |
| **OneDrive** | "Find the Q1 report" · "Upload this summary to the shared folder" |
| **Outlook** | "Read my Outlook inbox" · "Search for invoices from last month" |
| **Reminders** | "Add a reminder to call the bank tomorrow at 9am" · "What's on my list?" |
| **OmniFocus** | "Show my overdue tasks" · "Create a task to review the contract" |
| **Notes** | "Search my notes for the API keys" · "Create a note with today's decisions" |
| **Messages** | "What did Ana send me this morning?" · "Search iMessages for the address" |
| **Word / Excel / PPT** | "Read this contract" · "Create a spreadsheet with these numbers" |
| **PDF** | "Summarize this PDF" |
| **Finder** | "Find all files named 'invoice' on my Mac" |
| **Safari** | "List my bookmarks in the Dev folder" |
| **Stocks** | "How is AAPL doing today?" · "Show me a chart of MSFT this month" |
| **NordVPN** | "Is my VPN connected?" · "Recommend a server in Japan" |

111 tools total. Read operations run instantly. Write operations (send email, delete event) show a preview and require confirmation.

---

## Install

```bash
curl -fsSL 'https://local-mcp.com/install?ref=github' | bash
```

Auto-detects and configures: **Claude Desktop · Claude Code · Cursor · Windsurf · VS Code · Zed**

Restart your AI client once. That's it.

**Requirements:** macOS 12+ (Monterey or later), Apple Silicon or Intel.

---

## How it works

```
┌─────────────────────────────────┐
│  Claude · Cursor · VS Code · …  │
└───────────┬─────────────────────┘
            │  MCP protocol (stdio)
┌───────────▼─────────────────────┐
│        LMCP server          │
│  JXA · EventKit · AppleScript   │
│  LevelDB · native macOS APIs    │
└───────────┬─────────────────────┘
            │
┌───────────▼─────────────────────┐
│  Mail · Calendar · Teams · …     │
│  Your Mac apps (local data)      │
└─────────────────────────────────┘
```

### Why native?

Most MCP servers call cloud APIs. LMCP talks directly to macOS frameworks:

- **EventKit** for Calendar — reads all providers (iCloud, Google, Exchange)
- **AppleScript/JXA** for Mail — works with any IMAP account
- **LevelDB** for Teams — reads the local IndexedDB cache, no Graph API needed
- **CNContactStore** for Contacts — native framework, no app launch required
- **File system** for OneDrive, Word, Excel, PowerPoint

This means: **no API keys, no OAuth, no rate limits, works offline, sub-second responses.**

### Microsoft Teams without Graph API

The most technically interesting part: Teams messages are read directly from the local LevelDB cache at:

```
~/Library/Containers/com.microsoft.teams2/.../IndexedDB/https_teams.microsoft.com_0.indexeddb.leveldb
```

No Azure AD registration, no tenant admin approval, no OAuth tokens. Just the messages already cached on your Mac.

### Cloud Relay (optional)

Claude.ai and ChatGPT can't reach localhost. Enable Cloud Relay in the menu bar app — a secure WebSocket tunnel routes requests to your local server. Your data is encrypted in transit and never stored.

---

## Comparison with alternatives

| Feature | **LMCP** | apple-mcp | Composio | MS 365 Connector |
|---------|:---:|:---:|:---:|:---:|
| **Runs locally** | ✅ | ✅ | ❌ Cloud | ❌ Cloud |
| **API keys needed** | ❌ None | ❌ None | ✅ Required | ✅ Azure AD |
| **Setup time** | ~2 min | ~10 min | ~15 min | ~30 min |
| **Total tools** | 91 | ~20 | Varies | ~15 |
| **Microsoft Teams** | ✅ Local cache | ❌ | Via Graph API | Via Graph API |
| **OneDrive** | ✅ Full CRUD | ❌ | Via Graph API | Via Graph API |
| **Calendar** | ✅ CRUD | ❌ | Via API | Via Graph API |
| **Email** | ✅ Full | ❌ | Via API | Via Graph API |
| **Office docs** | ✅ Create/Read | ❌ | Limited | ❌ |
| **Notes & Reminders** | ✅ | ✅ | ❌ | ❌ |
| **OmniFocus** | ✅ | ❌ | ❌ | ❌ |
| **iMessage** | ✅ Read | ❌ | ❌ | ❌ |
| **Data privacy** | 100% local | 100% local | Cloud | Cloud |
| **Price** | Free (first 500) | Free (OSS) | Freemium | Free (M365) |
| **Platform** | macOS | macOS | Cross-platform | Cross-platform |

---

## Privacy & security

- All data stays on your Mac — nothing is sent to external servers
- No API keys, OAuth tokens, or cloud accounts required
- Uses standard macOS TCC permissions (the same "Allow access?" prompts any app uses)
- Calendar, Contacts, and Reminders access can be revoked anytime in System Settings
- GDPR and CCPA compliant **by architecture** — there is no cloud component to process your data
- Destructive operations always show a preview and require explicit confirmation

---

## Supported AI clients

| Client | Transport | Auto-configured |
|--------|-----------|:---:|
| Claude Desktop | stdio | ✅ |
| Claude Code | stdio | ✅ |
| Cursor | stdio | ✅ |
| Windsurf | stdio | ✅ |
| VS Code (Copilot / Cline) | stdio | ✅ |
| Zed | stdio | ✅ |
| Claude.ai | Cloud Relay | Manual |
| ChatGPT | Cloud Relay | Manual |

---

## Roadmap

- [ ] Write support for Teams (send messages)
- [ ] Slack integration
- [ ] Google Drive (local sync folder)
- [ ] WhatsApp / Telegram
- [ ] Persistent AI memory across sessions
- [ ] Windows support

Have a feature in mind? Run `request_feature` from any AI client, or [open an issue](https://github.com/lanchuske/local-mcp-releases/issues).

---

## Uninstall

Run this in Terminal to completely remove LMCP:

```bash
curl -fsSL 'https://local-mcp.com/uninstall' | bash
```

This stops all background processes, removes the auto-start LaunchAgent, deletes the app and binaries, and cleans up the MCP entries from Claude Desktop, Cursor, and other AI clients. Your emails, calendar, and other data are never stored by LMCP and remain untouched.

---

## Support

- **In your AI client:** ask Claude to run `report_bug` or `request_feature`
- **GitHub:** [open an issue](https://github.com/lanchuske/local-mcp-releases/issues)
- **Email:** [ctpo@colibird.co](mailto:ctpo@colibird.co)
- **Website:** [local-mcp.com](https://local-mcp.com?ref=github)

---

## License

LMCP is proprietary software. Free for the first 500 installs — permanent license, no expiration. See [LICENSE](LICENSE) for details.

---

⭐ **If LMCP saves you time, [star the repo](https://github.com/lanchuske/local-mcp-releases)** — it's the best way to help others discover it.
