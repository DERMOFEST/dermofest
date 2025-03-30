import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ryiuqghjgmofhfcwimzb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5aXVxZ2hqZ21vZmhmY3dpbXpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDkxODgsImV4cCI6MjAyNzU4NTE4OH0.rXrwGzS1rC5SFFDECDX4JXyFHLb8AJbRMcvAD0jQTP0";

export const supabase = createClient(supabaseUrl, supabaseKey);