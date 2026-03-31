# Local MCP

**Connect Claude Desktop, Cursor, and other AI agents to your Mac's apps — privately, without cloud services.**

Local MCP is a native macOS MCP server that gives your AI assistant direct access to Mail, Calendar, Contacts, Microsoft Teams, OneDrive, and more. Everything runs locally on your Mac. No cloud processing. No API keys. No data leaves your machine.

---

## What it can do

| Category | Tools |
|----------|-------|
| **Mail** | Read, search, send, reply, move emails · Save attachments · Multiple accounts (Gmail, Outlook, iCloud, Exchange) |
| **Calendar** | List and create events · Multi-account |
| **Contacts** | Search and list contacts |
| **Microsoft Teams** | Read chats and channels · No OAuth or Microsoft API tokens needed |
| **OneDrive** | List, read, write, move, delete, search files |
| **Reminders** | List and create reminders |
| **Notes** | Read and search notes |
| **Messages** | Read conversations |
| **Safari** | Access bookmarks |
| **Finder** | Navigate and search files |
| **Outlook** | Read emails and calendar (native macOS Outlook) |
| **Documents** | Create and read Word, Excel, PowerPoint, PDF |

62 tools total. Read-only tools run immediately. Destructive operations (send email, delete file) show a preview and ask for confirmation.

---

## Install

```bash
npm install -g local-mcp
```

That's it. Local MCP auto-detects Claude Desktop, Cursor, Windsurf, VS Code, and Zed and configures them automatically.

**Requirements:** macOS 12+, Node.js 18+

---

## How it works

```
Claude Desktop / Cursor
        ↓  MCP protocol
   local-mcp (this)
        ↓  JXA / AppleScript / native APIs
   Mail.app · Calendar · Contacts · Teams · OneDrive
```

Everything stays on your Mac. The MCP server runs as a background process and communicates with AI clients via stdio or SSE.

### Optional: Cloud Relay

Connect to ChatGPT or Claude.ai web (which can't reach localhost) by enabling the Cloud Relay. Enter your email in the menu bar app — a secure WebSocket tunnel routes requests from the cloud to your local server. Your data still doesn't leave your Mac unencrypted.

---

## Pricing

- **Trial:** 14 days free, no credit card
- **Pro:** $49/year · unlimited tools, all features

[Get started →](https://local-mcp.com)

---

## Support

- **Bug reports:** Use the "Report a Bug" button in the menu bar app, or open an issue here
- **Feature requests:** Open an issue with the `feature request` label
- **Email:** support@local-mcp.com

---

## Privacy

- No telemetry beyond anonymous heartbeats (version, OS, uptime)
- No email content, calendar data, or file contents ever leave your Mac
- License validation is the only outbound request to our servers
- Full details: [local-mcp.com/privacy](https://local-mcp.com/privacy)
