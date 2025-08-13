-- Add education_level_completed column to applications
ALTER TABLE public.applications
ADD COLUMN IF NOT EXISTS education_level_completed text;


