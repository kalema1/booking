import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mbetdqumwwacjzttzejd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZXRkcXVtd3dhY2p6dHR6ZWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMTY1OTYsImV4cCI6MjA0MjY5MjU5Nn0.maK98ZqTe-cityc8vApG7xHIbCi2C9Ea4oOuR5vfrME";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
