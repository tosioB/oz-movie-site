import { createClient } from '@supabase/supabase-js';

const supabaseToken = process.env.REACT_APP_API_SUPABASE_TOKEN

const supabaseUrl = 'https://epmolimyugvefzdfgvrj.supabase.co';
const supabaseKey = supabaseToken
export const supabase = createClient(supabaseUrl, supabaseKey);