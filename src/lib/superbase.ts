// /src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yaftkkqfgwuudvrnvrda.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZnRra3FmZ3d1dWR2cm52cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NDQyNDMsImV4cCI6MjA2OTIyMDI0M30.TV98deSBihrdEggzjdnCN2kH5QUv_tCket5sCuxNWQQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
