# Local MCP

**Connect Claude Desktop, Cursor, and other AI agents to your Mac's apps — privately, without cloud services.**

Local MCP is a native macOS MCP server that gives your AI assistant direct access to Mail, Calendar, Contacts, Microsoft Teams, OneDrive, OmniFocus, Reminders, Notes, Messages, Stocks, and more. Everything runs locally on your Mac. No cloud processing. No API keys. No data leaves your machine.

---

## What it can do

| Category | Tools |
|----------|-------|
| **Mail** | Read, search, send, reply, move emails · Save attachments · Multiple accounts (Gmail, Outlook, iCloud, Exchange) |
| **Calendar** | List, create and delete events · Multi-account |
| **Contacts** | Search and list contacts |
| **Microsoft Teams** | Read chats and channels · No OAuth or Microsoft API tokens needed |
| **OneDrive** | List, read, write, move, delete, search files |
| **Microsoft Outlook** | Read emails, search, send, list/create calendar events (direct Outlook.app access) |
| **Reminders & To Do** | List, create, complete · Includes Microsoft To Do via macOS sync |
| **OmniFocus** | List tasks, projects, tags · Create and complete tasks |
| **Notes** | Read, search, create notes |
| **Messages** | Read and search iMessage conversations |
| **Stocks** | Real-time quotes, historical charts, symbol search |
| **Safari** | Access bookmarks |
| **Finder** | Navigate and search files |
| **Documents** | Create and read Word, Excel, PowerPoint, PDF |

82 tools total. Read-only tools run immediately. Destructive operations (send email, delete file) show a preview and ask for confirmation.

---

## Install

```bash
npx -y local-mcp@latest setup
```

That's it. Local MCP auto-detects Claude Desktop, Cursor, Windsurf, VS Code, and Zed and configures them automatically. Restart your AI client once.

**Requirements:** macOS 12+, Node.js 18+

---

## How it works

```
Claude Desktop / Cursor / Windsurf / VS Code / Zed
        ↓  MCP protocol (stdio)
   local-mcp (this)
        ↓  JXA / AppleScript / EventKit / native APIs
   Mail · Calendar · Contacts · Teams · OneDrive · OmniFocus · …
```

Everything stays on your Mac. The MCP server starts on demand via stdio — no daemon, no LaunchAgent needed.

### Teams without tokens

Teams integration reads Microsoft Teams chats and channels directly from the local IndexedDB cache (`~/Library/Containers/com.microsoft.teams2/.../indexeddb.leveldb`) using the ccl_chromium_reader library. No OAuth, no Graph API, no Microsoft tokens required. Works even when Teams is offline.

### Optional: Cloud Relay

Connect to ChatGPT or Claude.ai web (which can't reach localhost) by enabling the Cloud Relay. Enter your email in the menu bar app — a secure WebSocket tunnel routes requests from the cloud to your local server. Your data still doesn't leave your Mac unencrypted.

---

## Pricing

- **Trial:** 14 days free, no credit card
- **Pro:** available at [local-mcp.com/#pricing](https://local-mcp.com/#pricing?utm_source=github)

[Get started →](https://local-mcp.com?utm_source=github)

---

## Support

- **Bug reports:** Use the `report_bug` tool in your AI client, or open an issue here
- **Feature requests:** Open an issue with the `feature request` label
- **Email:** support@local-mcp.com

---

## Privacy

- No telemetry beyond anonymous heartbeats (version, OS, uptime)
- No email content, calendar data, or file contents ever leave your Mac
- License validation is the only outbound request to our servers
