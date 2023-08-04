import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const env = window.env;
const supabaseUrl =
  env.REACT_APP_SUPABASE_URL || "https://rvkebmxmadjzjpthghvq.supabase.co";
const supabaseKey = env.REACT_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
