# LMCP — Context and Actions for Your AI

[![npm](https://img.shields.io/npm/v/local-mcp)](https://www.npmjs.com/package/local-mcp)
[![macOS](https://img.shields.io/badge/macOS-13%2B-blue)](https://local-mcp.com/download?ref=github-releases)
[![Windows](https://img.shields.io/badge/Windows-10%2B-blue)](https://local-mcp.com/download?ref=github-releases)

**Give your AI the context to get things done.** LMCP connects compatible assistants to your apps and accounts through the Model Context Protocol (MCP). Bring together relevant information from email, messages, calendars and files, then use tools to turn that context into useful action — with less searching and copying between apps.

Use it with **Claude, ChatGPT, Codex, Cursor** and other compatible MCP clients. Available integrations and connection methods vary by assistant, platform and permissions.

**[Download for Mac or Windows →](https://local-mcp.com/download?ref=github-releases)** · **[Explore the product](https://local-mcp.com/mcp-context)** · **[Setup guides](https://local-mcp.com/guides)**

This repository contains release information, documentation and the npm wrapper. The core binary is proprietary; documentation and scripts have their own license — see [LICENSE](LICENSE).

## More than one app's view of your information

An email, a message and a document may each contain only part of the answer. With compatible tools and access you authorize, your assistant can find those pieces across apps and accounts and use them together.

| What you ask | How connected context helps |
|---|---|
| “Tell me everything I still owe the architect — I can't remember her name.” | Search relevant messages, email and files to identify the person and assemble outstanding requests with their sources. |
| “Help organize my day so I can meet my commitments.” | Combine calendar events, tasks and relevant messages to propose a realistic plan and make supported updates when authorized. |
| “Prepare replies to customer orders using the inventory and plan dispatch.” | Read accessible order and inventory information, draft replies and use supported scheduling tools. Review proposed actions before authorizing execution. |

These illustrate workflows an assistant can build from available tools, not guaranteed autonomous outcomes. Sources must be accessible; assistant capabilities and each tool's permissions still apply.

## Apps and tools

Explore email, calendars, contacts, messages, tasks, files, documents, browser automation and other integrations. Examples include Apple Mail, Outlook, Microsoft Teams, Slack, WhatsApp, Signal, Google Drive, OneDrive, Microsoft 365, Notes, Reminders, Microsoft To Do, OmniFocus, Notion and ServiceNow.

**Not every integration is available on both operating systems.** Apple-native tools require macOS; connected services may need their own sign-in or permissions. Some tools use locally cached or synced data rather than a complete cloud account.

For current tools, requirements and platform coverage, use the **[tool reference](https://local-mcp.com/tools)** and **[guides](https://local-mcp.com/guides)** rather than a fixed count in this README.

## See it work

<p align="center">
  <img src="assets/claude-web-demo.gif" alt="Claude.ai using LMCP tools on a Mac to create a note and a reminder, including a consent dialog" width="700">
</p>

The recording shows a Mac workflow through Cloud Relay, not every platform or integration.

## Install and connect

1. **[Download LMCP for your operating system](https://local-mcp.com/download?ref=github-releases).** Follow the installer and onboarding steps.
2. Select your assistant and enable the compatible integrations you want to use.
3. Grant required permissions or sign in where needed, then follow the assistant-specific setup guide.

Supports **macOS 13+** and **Windows 10+**. Linux is not currently offered as a supported installer platform.

Local desktop/CLI clients and web assistants connect differently. The installer can configure supported local clients; web assistants use optional Cloud Relay and their connector settings. Follow the **[current guides](https://local-mcp.com/guides)** rather than an old token-pasting sequence.

The canonical MCP endpoint for supported web connections is **`https://local-mcp.com/mcp`**. An endpoint alone is not a verified connection: complete authorization and check that tools are available in your client.

For terminal installation and npm usage, follow the **[installation documentation](https://local-mcp.com/help/installation)**. Do not assume the npm wrapper and native installers have identical platform support.

## How it works

**Your assistant → MCP → available tools → relevant apps and accounts → context and actions.**

Compatible tools execute on your computer. Some read native data, local caches or synced files; others connect to services requiring authentication and a network connection. Your assistant chooses tools for your request within the access you grant — it does not automatically gain access to every account.

## Local tools, clear data boundaries

- Local execution does not mean a cloud AI receives no data. Your chosen assistant or connected service may receive content needed for your request, including when a desktop client uses a cloud model.
- Cloud Relay is optional and lets supported web assistants reach tools on your computer. Review its data flow and provider policies before enabling it.
- Permissions, preview and confirmation support vary by tool. Review behavior and authorize actions before execution; do not assume a universal confirmation dialog.
- Locally available read operations may work offline. Cloud models, connected services, sending and remote updates can require a network connection.

See **[Privacy](https://local-mcp.com/en/privacy)** and **[Security](SECURITY.md)**. Compliance depends on your complete workflow and provider agreements, not only on where a tool runs.

## Learn more

- **[Apple Mail with Claude](https://local-mcp.com/guides/claude-email-mac)**
- **[ChatGPT on Mac](https://local-mcp.com/guides/chatgpt-mac)**
- **[Microsoft Teams without Graph API](https://local-mcp.com/guides/claude-teams-no-api)**
- **[WhatsApp on Mac](https://local-mcp.com/guides/claude-whatsapp-mac)**
- **[Recipes and workflows](https://local-mcp.com/recipes)**

## Releases and support

See **[GitHub Releases](https://github.com/lanchuske/local-mcp-releases/releases)** for this repository's history and the **[download page](https://local-mcp.com/download?ref=github-releases)** for current installers. Mac and Windows can have different release versions; a GitHub tag alone is not a fleet-wide deployment signal.

- Report a problem through LMCP's available feedback tools or **[open an issue](https://github.com/lanchuske/local-mcp-releases/issues)**. Include OS and app version, and remove sensitive content from logs.
- Request a feature through the available feedback tools or GitHub Issues.
- Contact **[ctpo@colibird.co](mailto:ctpo@colibird.co)** for support; see [SECURITY.md](SECURITY.md) for vulnerabilities.
- For current availability and commercial terms, see **[the website](https://local-mcp.com)** and [LICENSE](LICENSE). This README does not promise permanent pricing or future features.

If LMCP helps you, **[star the repository](https://github.com/lanchuske/local-mcp-releases)** to help others discover it.
