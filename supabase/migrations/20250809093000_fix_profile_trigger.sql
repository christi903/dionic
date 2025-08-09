/*
  Fix signup trigger and RLS policy for staff_profiles
  - Schema-qualify function and table
  - Ensure function runs with proper search_path
  - Adjust insert policy to allow trigger insert
*/

-- Ensure RLS is enabled on staff_profiles
ALTER TABLE public.staff_profiles ENABLE ROW LEVEL SECURITY;

-- Replace insert policy: allow insert when id = auth.uid() for any role (trigger/service can insert)
DROP POLICY IF EXISTS "Users can insert own profile" ON public.staff_profiles;
CREATE POLICY "Users can insert own profile"
  ON public.staff_profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Recreate function with schema-qualified names and search_path
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.staff_profiles (id, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'staff')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- Recreate trigger to point at the namespaced function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
