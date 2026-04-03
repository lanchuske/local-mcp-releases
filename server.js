#!/usr/bin/env node
/**
 * Minimal MCP stub for Glama inspection.
 * Lists all Pilot MCP tools so Glama can detect them.
 * The real server is a native macOS binary — this stub is for registry inspection only.
 */
const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");

const TOOLS = [
  { name: "list_emails", description: "List emails from Mail.app inbox with optional filters" },
  { name: "read_email", description: "Read full email content by ID" },
  { name: "search_emails", description: "Search emails by keyword, sender, or date range" },
  { name: "send_email", description: "Compose and send a new email" },
  { name: "reply_email", description: "Reply to an existing email" },
  { name: "move_email", description: "Move email to a different mailbox" },
  { name: "save_attachment", description: "Save email attachment to disk" },
  { name: "list_calendar_names", description: "List available calendars" },
  { name: "list_calendar_events", description: "List calendar events for a date range" },
  { name: "create_calendar_event", description: "Create a new calendar event" },
  { name: "delete_calendar_event", description: "Delete a calendar event with preview" },
  { name: "list_reminders", description: "List reminders from a specific list" },
  { name: "list_reminder_lists", description: "List all reminder lists" },
  { name: "create_reminder", description: "Create a new reminder" },
  { name: "complete_reminder", description: "Mark a reminder as complete" },
  { name: "list_contacts", description: "List contacts from the address book" },
  { name: "search_contacts", description: "Search contacts by name, email, or phone" },
  { name: "get_contact", description: "Get full contact details by name" },
  { name: "list_notes", description: "List notes from Apple Notes" },
  { name: "read_note", description: "Read full note content" },
  { name: "create_note", description: "Create a new note in Apple Notes" },
  { name: "search_notes", description: "Search notes by keyword" },
  { name: "list_message_chats", description: "List recent iMessage conversations" },
  { name: "read_messages", description: "Read messages from a conversation" },
  { name: "search_messages", description: "Search iMessages by keyword" },
  { name: "list_omnifocus_tasks", description: "List tasks from OmniFocus" },
  { name: "list_omnifocus_projects", description: "List OmniFocus projects" },
  { name: "create_omnifocus_task", description: "Create a new task in OmniFocus" },
  { name: "complete_omnifocus_task", description: "Mark an OmniFocus task complete" },
  { name: "search_omnifocus_tasks", description: "Search OmniFocus tasks" },
  { name: "list_omnifocus_tags", description: "List OmniFocus tags" },
  { name: "outlook_list_emails", description: "List emails from Microsoft Outlook" },
  { name: "outlook_read_email", description: "Read an Outlook email" },
  { name: "outlook_search_emails", description: "Search Outlook emails" },
  { name: "outlook_send_email", description: "Send email via Outlook" },
  { name: "outlook_list_events", description: "List Outlook calendar events" },
  { name: "outlook_create_event", description: "Create Outlook calendar event" },
  { name: "onedrive_list_files", description: "List files and folders in OneDrive" },
  { name: "onedrive_read_file", description: "Read file content from OneDrive" },
  { name: "onedrive_search_files", description: "Search files in OneDrive" },
  { name: "onedrive_write_file", description: "Write or upload file to OneDrive" },
  { name: "onedrive_delete_file", description: "Delete file from OneDrive" },
  { name: "onedrive_move_file", description: "Move or rename file in OneDrive" },
  { name: "finder_list", description: "List files in a Finder directory" },
  { name: "finder_search", description: "Search files using Spotlight" },
  { name: "pdf_read", description: "Read text content from a PDF file" },
  { name: "word_read", description: "Read content from a Word document" },
  { name: "word_create", description: "Create a new Word document" },
  { name: "word_append", description: "Append content to a Word document" },
  { name: "excel_read", description: "Read data from an Excel spreadsheet" },
  { name: "excel_create", description: "Create a new Excel spreadsheet" },
  { name: "excel_write_cell", description: "Write data to Excel cells" },
  { name: "ppt_read", description: "Read content from a PowerPoint file" },
  { name: "ppt_create", description: "Create a new PowerPoint presentation" },
  { name: "teams_list_chats", description: "List Microsoft Teams chat conversations" },
  { name: "teams_read_chat_messages", description: "Read messages from a Teams chat" },
  { name: "teams_list_teams", description: "List Teams and their channels" },
  { name: "teams_list_channels", description: "List channels in a Teams team" },
  { name: "teams_read_channel_messages", description: "Read messages from a Teams channel" },
  { name: "list_safari_bookmarks", description: "List Safari bookmarks" },
  { name: "list_accounts", description: "List configured email and calendar accounts" },
  { name: "create_email_folder", description: "Create a new email folder/mailbox" },
  { name: "diagnose", description: "Run diagnostic checks on all connected services" },
  { name: "report_bug", description: "Report a bug or issue to the development team" },
  { name: "request_feature", description: "Request a new feature" },
  { name: "request_integration", description: "Request integration with an unsupported app" },
];

async function main() {
  const server = new Server(
    { name: "pilot-mcp", version: "2.2.0" },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler({ method: "tools/list" }, async () => ({
    tools: TOOLS.map(t => ({
      name: t.name,
      description: t.description,
      inputSchema: { type: "object", properties: {} },
    })),
  }));

  server.setRequestHandler({ method: "tools/call" }, async (req) => ({
    content: [{ type: "text", text: "This is an inspection stub. Install Pilot MCP on macOS: npx -y local-mcp@latest setup" }],
  }));

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
