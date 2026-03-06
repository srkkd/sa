import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://obllagnryhqqajtjkvsh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ibGxhZ25yeWhxcWFqdGprdnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3ODM5NjksImV4cCI6MjA4ODM1OTk2OX0.Vak8ENCRQBtcIB-0BQGfV18in-ftA5DzvR15xQoWp5I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
