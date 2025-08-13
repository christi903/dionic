export interface Application {
  id: number;
  full_name: string;
  mobile: string | null;
  whatsapp: string | null;
  email: string | null;
  date_of_birth: string | null;
  interested_course: string | null;
  education_level_completed: string | null;
  school_name: string | null;
  subjects_name: string | null;
  passing_year: string | null;
  father_name: string | null;
  mother_name: string | null;
  parent_mobile: string | null;
  parent_whatsapp: string | null;
  parent_email: string | null;
  status: string;
  created_at: string;
}

export type StaffPortalView = 'dashboard' | 'applications';


