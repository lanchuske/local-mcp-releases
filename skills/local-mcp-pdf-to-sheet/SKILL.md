---
name: PDF → spreadsheet — extract data into Excel (Local MCP)
description: Use when the user wants to pull data out of one or more PDFs (invoices, bank/credit-card statements, receipts, reports, tables) and put it into a spreadsheet. pdf_read is one of the most-used tools; this codifies the read-PDF → structure → write-Excel workflow. Powered by Local MCP, on-device.
---

# PDF → spreadsheet

Reading PDFs and turning them into structured data is one of the highest-volume things Local MCP
users do. This skill codifies the end-to-end flow: read the PDF(s) on the Mac, extract the rows,
and build an Excel sheet — all locally, no upload.

## The flow
1. **Read the PDF(s)** — `pdf_read(path=...)`. For long documents pass `max_pages` to bound it,
   or call it per file. (Find the files first with `finder_search`/`fs_search` if the user only
   describes them, e.g. "my March invoices".)
2. **Extract the structured rows** from the text — identify the columns the user wants (e.g. for
   statements: Date, Description, Amount; for invoices: Vendor, Invoice #, Date, Total). Normalize
   dates and numbers. If several PDFs, combine into one consistent table.
3. **Write the spreadsheet** — prefer one call:
   `excel_create(path="<out>.xlsx", headers=["Date","Description","Amount"], rows=[[...],[...]], confirm=true)`.
   `headers` is required; `rows` is the full data. For edits to an existing sheet use
   `excel_write_cell(path, row, column, value, confirm=true)`; to read one back use `excel_read(path)`.

## Good practice
- Confirm the **columns** with the user before building the sheet ("I'll pull Date, Description,
  Amount — want a Category column too?").
- Build the whole table in memory, then write it in a single `excel_create` (one row per record) —
  don't write cell-by-cell unless editing an existing file.
- Watch totals: if the PDF has a stated total, add a check row or verify your sum matches.
- Keep money as numbers (not "$1,234.50" strings) so the sheet can compute.
- Write the output next to the source or to a path the user names; `excel_create`/`excel_write_cell`
  are preview/confirm-gated (pass `confirm: true` once the user approves the columns).
- Multi-PDF: keep a `Source` column so each row traces back to its file.
