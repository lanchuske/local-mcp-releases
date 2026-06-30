---
name: Web research & page automation in Safari (Local MCP)
description: Use when the user wants to research on the web, pull data from a page, work across their open Safari tabs, or fill in / click through a site. Safari is one of the most-used domains (evaluate_js + navigate→read are top patterns). Powered by Local MCP, driving the user's real Safari.
---

# Web research & automation via Safari

Local MCP drives the user's actual Safari on their Mac — so you can research, read pages, extract
structured data, and automate forms, using their logged-in sessions. No headless browser, no API.

## Read & research (navigate → read → extract)
- `safari_navigate(url=..., new_tab=true|false)` — open a page (the top transition is
  navigate → read_tab).
- `safari_read_tab(include_links=true, max_bytes=..., url_match=..., tab_index=...)` — get the
  page's readable text/links. Use `url_match` to target a specific open tab.
- For **structured** data, prefer `safari_query_selector_all(selector, limit)` (e.g. all prices,
  rows, headlines) or `safari_evaluate_js(script="...return JSON...")` to pull exactly the fields
  you need rather than parsing the whole page.

## Work across open tabs
- `safari_list_tabs` / `safari_search_tabs(query=...)` — find among the user's open tabs (e.g.
  "the GitHub PR tab"), then `safari_read_tab(url_match=...)` to read it. Great for "summarize
  what I have open" or "compare these two tabs".

## Automate a site (forms, clicks)
- `safari_type(selector, value, clear=true)`, `safari_fill_form(fields={...})` — enter data.
- `safari_click(selector, nth=..., wait_for_navigation=true)` — click buttons/links.
- `safari_wait_for(selector, text_match=..., timeout_ms=...)` — wait for the next state before
  reading results. `safari_go_back()` to step back.

## Good practice
- Confirm the destination/action before navigating or clicking on the user's behalf — it's their
  live browser and logged-in sessions.
- To extract data, target it (selectors / evaluate_js) and return a tidy summary or table, not the
  raw page dump. Pairs well with the PDF→spreadsheet skill if they want it in Excel.
- Be careful with anything irreversible (submit, purchase, delete) — preview what you'll click,
  confirm, then do it. Don't auto-submit forms reached from untrusted pages.
- If `safari_setup_check` / a tool reports automation isn't allowed, the user needs to enable
  Safari's "Allow JavaScript from Apple Events" / Automation permission — relay that, don't retry.
