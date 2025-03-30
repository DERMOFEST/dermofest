import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://your-project.supabase.co', 'public-anon-key');
export default supabase;