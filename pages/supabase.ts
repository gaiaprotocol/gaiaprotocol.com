import { createClient } from "https://esm.sh/@supabase/supabase-js@2.31.0";

const SUPABASE_URL = "https://dhzxulywizygtdficytt.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoenh1bHl3aXp5Z3RkZmljeXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTIxNDUsImV4cCI6MjA0NTY4ODE0NX0.xUd8nqcT2aVn1j4x8c-pRbDcFSaIGtkn7SAcmKleBms";

export function createSupabaseClient() {
  return createClient(SUPABASE_URL, SUPABASE_KEY);
}
