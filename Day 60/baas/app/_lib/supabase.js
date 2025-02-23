import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  // process.env.SUPABASE_URL,
  // process.env.SUPABASE_KEY
  'https://iuwgjpexpwbacydqsaai.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1d2dqcGV4cHdiYWN5ZHFzYWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2ODU0NTYsImV4cCI6MjA1NTI2MTQ1Nn0.0MA8himgUZBwLAwvKHBco3QKFEIRtARhsxPI9psuOoA'
);
