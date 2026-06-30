---
name: Files, Office & Drive on Mac (Local MCP)
description: Use when the user wants to find, read or create files and Office documents (Word/Excel/PowerPoint/PDF) on a Mac, or browse OneDrive / Google Drive. Powered by Local MCP, on-device.
---

# Files & Office via Local MCP

Local MCP reads and writes the user's files, Office documents and cloud-drive contents directly on their Mac.

## Core tools
- Finder/local: `finder_list`, `finder_search`, `fs_list`, `fs_read`, `fs_search` (scoped to allowed paths).
- Office (read + create): `word_read`/`word_create`/`word_append`, `excel_read`/`excel_create`/`excel_write_cell`, `ppt_read`/`ppt_create`, `pdf_read`.
- Cloud drives: `onedrive_*` and `gdrive_*` (list/search/read/write/move) over the local sync folders.

## Good practice
- For "find my invoice from March", use `fs_search`/`finder_search` then `pdf_read`/`excel_read`.
- Office create tools take structured input (rows, slides, headings) — build the content, then create.
- File paths are sandboxed to allowed roots; if a read is denied, tell the user which path/permission is needed rather than retrying.
