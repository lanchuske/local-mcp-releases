# Installing Local MCP

Local MCP gives the assistant access to the user's **Mac** apps — Mail, iMessage,
Calendar, Contacts, Teams, Slack, WhatsApp, Notes, Reminders, OneDrive, Microsoft 365,
Notion, Zoom and Office docs — 180 local tools, 100% local, no API keys.

macOS only today (Windows/Linux users get a waitlist).

## Recommended: remote connector (works on any platform / client)

Add Local MCP as a remote MCP server:

```json
{
  "mcpServers": {
    "local-mcp": {
      "type": "streamableHttp",
      "url": "https://local-mcp.com/mcp"
    }
  }
}
```

This immediately exposes all 180 tools. They execute once the user installs the free
macOS app — calling any tool returns a one-click install link (~30 seconds).

## Alternative: local stdio (Mac only, fully local)

If the user is on a Mac and prefers a fully-local connection:

```json
{
  "mcpServers": {
    "local-mcp": {
      "command": "npx",
      "args": ["-y", "local-mcp"]
    }
  }
}
```

Then install the app:

```bash
curl -fsSL https://local-mcp.com/install | bash
```

(or download the notarized DMG from https://local-mcp.com).

## Notes
- No API keys, no OAuth, no cloud copies — data stays on the user's Mac.
- The remote URL (`https://local-mcp.com/mcp`) is also how web AIs (ChatGPT, Claude.ai,
  Grok) reach the user's Mac, via a secure relay.
