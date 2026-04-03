#!/usr/bin/env node
/**
 * Minimal MCP stub for Glama inspection.
 * Lists all Pilot MCP tools so Glama can detect them.
 * The real server is a native macOS binary.
 */
const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { z } = require("zod");

const server = new McpServer({ name: "pilot-mcp", version: "2.2.0" });

const TOOLS = [
  ["list_emails", "List emails from Mail.app inbox with optional filters"],
  ["read_email", "Read full email content by ID"],
  ["search_emails", "Search emails by keyword, sender, or date range"],
  ["send_email", "Compose and send a new email"],
  ["reply_email", "Reply to an existing email"],
  ["move_email", "Move email to a different mailbox"],
  ["save_attachment", "Save email attachment to disk"],
  ["list_calendar_names", "List available calendars"],
  ["list_calendar_events", "List calendar events for a date range"],
  ["create_calendar_event", "Create a new calendar event"],
  ["delete_calendar_event", "Delete a calendar event with preview"],
  ["list_reminders", "List reminders from a specific list"],
  ["list_reminder_lists", "List all reminder lists"],
  ["create_reminder", "Create a new reminder"],
  ["complete_reminder", "Mark a reminder as complete"],
  ["list_contacts", "List contacts from the address book"],
  ["search_contacts", "Search contacts by name, email, or phone"],
  ["get_contact", "Get full contact details by name"],
  ["list_notes", "List notes from Apple Notes"],
  ["read_note", "Read full note content"],
  ["create_note", "Create a new note in Apple Notes"],
  ["search_notes", "Search notes by keyword"],
  ["list_message_chats", "List recent iMessage conversations"],
  ["read_messages", "Read messages from a conversation"],
  ["search_messages", "Search iMessages by keyword"],
  ["list_omnifocus_tasks", "List tasks from OmniFocus"],
  ["list_omnifocus_projects", "List OmniFocus projects"],
  ["create_omnifocus_task", "Create a new task in OmniFocus"],
  ["complete_omnifocus_task", "Mark an OmniFocus task complete"],
  ["search_omnifocus_tasks", "Search OmniFocus tasks"],
  ["list_omnifocus_tags", "List OmniFocus tags"],
  ["outlook_list_emails", "List emails from Microsoft Outlook"],
  ["outlook_read_email", "Read an Outlook email"],
  ["outlook_search_emails", "Search Outlook emails"],
  ["outlook_send_email", "Send email via Outlook"],
  ["outlook_list_events", "List Outlook calendar events"],
  ["outlook_create_event", "Create Outlook calendar event"],
  ["onedrive_list_files", "List files and folders in OneDrive"],
  ["onedrive_read_file", "Read file content from OneDrive"],
  ["onedrive_search_files", "Search files in OneDrive"],
  ["onedrive_write_file", "Write or upload file to OneDrive"],
  ["onedrive_delete_file", "Delete file from OneDrive"],
  ["onedrive_move_file", "Move or rename file in OneDrive"],
  ["finder_list", "List files in a Finder directory"],
  ["finder_search", "Search files using Spotlight"],
  ["pdf_read", "Read text content from a PDF file"],
  ["word_read", "Read content from a Word document"],
  ["word_create", "Create a new Word document"],
  ["word_append", "Append content to a Word document"],
  ["excel_read", "Read data from an Excel spreadsheet"],
  ["excel_create", "Create a new Excel spreadsheet"],
  ["excel_write_cell", "Write data to Excel cells"],
  ["ppt_read", "Read content from a PowerPoint file"],
  ["ppt_create", "Create a new PowerPoint presentation"],
  ["teams_list_chats", "List Microsoft Teams chat conversations"],
  ["teams_read_chat_messages", "Read messages from a Teams chat"],
  ["teams_list_teams", "List Teams and their channels"],
  ["teams_list_channels", "List channels in a Teams team"],
  ["teams_read_channel_messages", "Read messages from a Teams channel"],
  ["list_safari_bookmarks", "List Safari bookmarks"],
  ["list_accounts", "List configured email and calendar accounts"],
  ["create_email_folder", "Create a new email folder/mailbox"],
  ["diagnose", "Run diagnostic checks on all connected services"],
  ["report_bug", "Report a bug or issue to the development team"],
  ["request_feature", "Request a new feature"],
  ["request_integration", "Request integration with an unsupported app"],
];

for (const [name, desc] of TOOLS) {
  server.tool(name, desc, {}, async () => ({
    content: [{ type: "text", text: "This is an inspection stub. Install Pilot MCP on macOS: npx -y local-mcp@latest setup" }],
  }));
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
