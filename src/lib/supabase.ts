import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sdkbpvfdoihtepfkcpvv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNka2JwdmZkb2lodGVwZmtjcHZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMzY3MjgsImV4cCI6MjA2NzgxMjcyOH0.bdiZaexIC4QafCf476paX-ufY6Vbi-iGf4r419MRtcE";

export const supabase = createClient(supabaseUrl, supabaseKey);
