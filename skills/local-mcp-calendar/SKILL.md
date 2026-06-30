---
name: Calendar & scheduling on Mac (Local MCP)
description: Use when the user wants to check their calendar, find availability, or create/update/delete events on a Mac (Apple Calendar / EventKit). Powered by Local MCP — local, no OAuth.
---

# Calendar & scheduling via Local MCP

Local MCP reads and writes Apple Calendar through macOS EventKit — no Google/Microsoft OAuth.

## Core tools
- `list_calendar_names` — the user's calendars (Personal, Work, …).
- `list_calendar_events` — events in a date range; filter by calendar.
- `create_calendar_event` — new event (title, start, end, optional location/notes/calendar).
- `update_calendar_event` / `delete_calendar_event` — modify or remove (both preview before applying).

## Good practice
- For "am I free Tuesday?", list events for that day and report gaps.
- Always confirm the calendar + exact times before creating.
- Use ISO datetimes (e.g. `2026-07-01T10:00:00`).
- Destructive ops (update/delete) preview first — show the user what will change, then confirm.
