---
name: Teams & Slack on Mac (Local MCP)
description: Use when the user wants to read or search Microsoft Teams or Slack on their Mac — including channels and DMs that the Graph/Slack APIs make hard to reach. Powered by Local MCP, reading the local app stores.
---

# Teams & Slack via Local MCP

Local MCP reads the user's **local** Microsoft Teams and Slack data on their Mac (no Graph API, no Slack tokens) — including history the cloud APIs gate behind admin consent.

## Core tools
- Teams: `teams_list_teams`, `teams_list_channels`, `teams_list_chats`, `teams_read_channel_messages`, `teams_read_chat_messages`; send via `teams_send_message` / `teams_send_channel_message` (preview-before-send).
- Slack: `slack_list_workspaces`, `slack_list_channels`, `slack_read_channel_messages`, `slack_search_messages`.

## Good practice
- Reading is local; summarize threads rather than dumping every message.
- For "what did the team decide about X", use `teams_read_channel_messages` / `slack_search_messages`.
- These read the local app's synced store — if a tool reports not-synced/not-set-up, the user needs the Teams/Slack desktop app installed and signed in; relay that instead of retrying.
- Any send is preview-first: show the channel + text, confirm, then send.
