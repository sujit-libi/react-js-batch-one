import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iuwgjpexpwbacydqsaai.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1d2dqcGV4cHdiYWN5ZHFzYWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2ODU0NTYsImV4cCI6MjA1NTI2MTQ1Nn0.0MA8himgUZBwLAwvKHBco3QKFEIRtARhsxPI9psuOoA';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
