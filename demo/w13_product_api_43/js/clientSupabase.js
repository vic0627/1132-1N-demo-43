const SUPABASE_URL = "https://svvqttkizbzhmlylnbdz.supabase.co";
const SUPABASE_ADMIN_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dnF0dGtpemJ6aG1seWxuYmR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NDc2MDMsImV4cCI6MjA2MTMyMzYwM30.U2l5a5meH2c9F9dJKENc2wjOL60UEU0_IlOct5HMab8";
export const _supabase = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ADMIN_KEY
);
