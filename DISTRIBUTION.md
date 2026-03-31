# Distribution Channels — Local MCP

*Last updated: 2026-03-31 · v1.87*

---

## ✅ Live & verified

| Channel | URL | Notes |
|---------|-----|-------|
| **npm** | [npmjs.com/package/local-mcp](https://www.npmjs.com/package/local-mcp) | v1.87.0 · 4,123 downloads (March) · auto-updated on deploy |
| **Landing page** | [local-mcp.com](https://local-mcp.com) | 10 locales · auto-deploy on push to master |
| **GitHub Releases** | [lanchuske/local-mcp-releases](https://github.com/lanchuske/local-mcp-releases/releases) | auto-created by deploy.sh from v1.87 |
| **R2 Binaries** | [download.local-mcp.com](https://download.local-mcp.com) | ZIP + arm64/x64 binaries · auto-uploaded on deploy |
| **llms.txt** | [local-mcp.com/llms.txt](https://local-mcp.com/llms.txt) | Instructions for AI agents |
| **/.well-known/mcp.json** | [local-mcp.com/.well-known/mcp.json](https://local-mcp.com/.well-known/mcp.json) | MCP discovery standard |
| **Cursor plugin repo** | [lanchuske/local-mcp-cursor-plugin](https://github.com/lanchuske/local-mcp-cursor-plugin) | `/add-plugin lanchuske/local-mcp-cursor-plugin` |
| **Cursor Forum** | [forum.cursor.com/t/156082](https://forum.cursor.com/t/local-mcp-.../156082) | Post publicado, Showcase → Built for Cursor |
| **Product Hunt** | [producthunt.com/posts/local-mcp](https://www.producthunt.com/posts/local-mcp) | Lanzado 2026-03-31 |

---

## ⏳ Submitted — awaiting review

| Channel | Submission | Date | Status |
|---------|-----------|------|--------|
| **Official MCP Registry** | `io.github.lanchuske/local-mcp` | 2026-03-28 | Published but endpoint returns `{}` — needs re-verification |
| **Smithery.ai** | smithery.ai/servers/local-mcp | 2026-03-28 | 404 — not indexed yet |
| **Glama.ai** | Auto-ingests from MCP Registry | 2026-03-28 | 404 — pending MCP Registry fix |
| **PulseMCP** | Auto-ingests from MCP Registry | 2026-03-28 | Unverifiable (blocks scrapers) |
| **modelcontextprotocol/servers** | [PR #3736](https://github.com/modelcontextprotocol/servers/pull/3736) | 2026-03-28 | Open, no response |
| **Anthropic Plugin Directory** | platform.claude.com/plugins/submit | 2026-03-28 | **No response** — this is the "Claude Marketplace" |
| **mcp.so** | [Issue #1341](https://github.com/chatmcp/mcpso/issues/1341) | 2026-03-28 | Open, bumped once |
| **Cline MCP Marketplace** | [Issue #1093](https://github.com/cline/mcp-marketplace/issues/1093) | 2026-03-28 | Open, bumped once |
| **awesome-mcp-servers** | [PR #855](https://github.com/appcypher/awesome-mcp-servers/pull/855) | 2026-03-28 | PRs disabled on that repo — unverifiable |
| **mcpservers.org** | Form submitted | 2026-03-28 | Confirmed "submitted successfully" |
| **MCP Market** | Form submitted | 2026-03-28 | Confirmed "will be reviewed" |
| **LobeHub MCP** | [Issue #13354](https://github.com/lobehub/lobehub/issues/13354) | 2026-03-28 | Open |
| **Reddit r/ClaudeAI** | Modmail sent | 2026-03-28 | No response from mods |
| **Reddit r/MacApps** | Modmail sent | 2026-03-28 | No response from mods |

---

## 🔲 Not yet done

| Channel | Action needed |
|---------|--------------|
| **Cursor Marketplace** | Form doesn't render in web — needs to be done from inside Cursor app |
| **Hacker News** | Show HN post — angle: privacy-first, no cloud, no tokens |
| **OpenAI ChatGPT App Directory** | Interest form sent 2026-03-28. Waiting for platform to open |
| **Twitter/X thread** | Demo GIF + thread |

---

## 📊 Usage stats (last 7 days)

| Metric | Value |
|--------|-------|
| npm installs | 33 |
| Active sessions (stdio heartbeat) | 52 |
| Cloud connector sessions | 79 |
| Feedbacks received | 15 |
| Unique machines (heartbeat) | tracking in progress |

---

## Accounts & credentials

| Service | Username | Notes |
|---------|----------|-------|
| npm | lanchuske | Token in memory/reference_npm.md |
| GitHub | lanchuske | Private: lanchuske/local-mcp · Public: lanchuske/local-mcp-releases |
| Smithery | lanchuske (GitHub OAuth) | namespace: local-mcp |
| Glama.ai | lanchuske@gmail.com (Google OAuth) | Created 2026-03-28 |
| Anthropic Console | lanchuske@gmail.com (Google OAuth) | Plugin submission 2026-03-28 |
| MCP Registry | lanchuske (GitHub OAuth) | mcp-publisher CLI authenticated |
| Product Hunt | @dario_lanchuske_lanchu_ (GitHub OAuth) | |
| Reddit | u/Over-Leek-739 | Modmails sent to r/ClaudeAI and r/MacApps |
| Railway | — | Auto-deploy from master |
| Cloudflare R2 | — | Bucket: local-mcp · download.local-mcp.com |

---

## Update checklist (on each deploy)

Automated by `deploy.sh`:
- [x] npm package
- [x] R2 binaries (ZIP + arm64 + x64)
- [x] Railway API (`/releases`)
- [x] GitHub Release (lanchuske/local-mcp-releases)
- [x] MCPB bundle

Manual (when tools or description change):
- [ ] MCP Registry: `mcp-publisher publish` from `npm/`
- [ ] llms.txt — update if tools added/removed
- [ ] Smithery — re-deploy if description changed
- [ ] Bump issues/PRs in waiting channels
