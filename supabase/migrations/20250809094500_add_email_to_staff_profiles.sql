/*
  Add email to staff_profiles and keep it in sync on signup
*/

-- 1) Add column
ALTER TABLE public.staff_profiles
  ADD COLUMN IF NOT EXISTS email text;

-- 2) Backfill from auth.users
UPDATE public.staff_profiles p
SET email = u.email
FROM auth.users u
WHERE p.id = u.id
  AND (p.email IS DISTINCT FROM u.email);

-- 3) Unique index on email (allows multiple NULLs by default)
CREATE UNIQUE INDEX IF NOT EXISTS staff_profiles_email_unique
  ON public.staff_profiles (email);

-- 4) Update trigger function to include email
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.staff_profiles (id, full_name, role, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'staff'),
    NEW.email
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    role = EXCLUDED.role,
    email = EXCLUDED.email;
  RETURN NEW;
END;
$$;

-- 5) Ensure trigger points to the updated function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
