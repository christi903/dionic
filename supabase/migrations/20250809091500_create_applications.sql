/*
  Create applications table to store student application form submissions.
  Public (anon) users can insert. Authenticated users can read/update/delete.
*/

CREATE TABLE IF NOT EXISTS public.applications (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  serial_number text,
  full_name text NOT NULL,
  mobile text,
  whatsapp text,
  email text,
  date_of_birth date,
  interested_course text,
  school_name text,
  subjects_name text,
  passing_year text,
  subjects_appeared text,
  father_name text,
  mother_name text,
  parent_mobile text,
  parent_whatsapp text,
  parent_email text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (website form submissions)
CREATE POLICY "Anon can insert applications"
  ON public.applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all applications
CREATE POLICY "Authenticated can read applications"
  ON public.applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update applications (e.g., status)
CREATE POLICY "Authenticated can update applications"
  ON public.applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete applications
CREATE POLICY "Authenticated can delete applications"
  ON public.applications
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS applications_created_at_idx ON public.applications (created_at DESC);
