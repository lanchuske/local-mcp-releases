---
name: Messages & team chat on Mac (Local MCP)
description: Use when the user wants to read or search iMessage, Microsoft Teams, Slack, WhatsApp or Signal on their Mac — things cloud connectors can't reach. Powered by Local MCP, local-only.
---

# Messages & team chat via Local MCP

Local MCP reads the user's local message stores on their Mac — iMessage (Messages.app), Microsoft Teams, Slack, WhatsApp, Signal — which cloud connectors physically cannot access.

## Core tools
- iMessage: `list_message_chats`, `read_messages`, `search_messages`.
- Teams: `teams_list_chats` / `teams_list_channels` / `teams_read_chat_messages` / `teams_read_channel_messages`.
- Slack: `slack_list_channels` / `slack_read_channel_messages` / `slack_search_messages`.
- WhatsApp / Signal: `whatsapp_*` / `signal_*` readers.
- Sending: `send_message` (iMessage) and `teams_send_message` preview before sending — never send silently.

## Good practice
- Reading is local and fast; summarize conversations rather than dumping every line.
- For "did X text me about Y", use `search_messages`.
- Teams/Slack/WhatsApp/Signal require the respective app to be set up on the Mac; if a tool says it's not connected/synced, relay that setup step to the user.
- Any send is preview-first — show the recipient + text, confirm, then send.
