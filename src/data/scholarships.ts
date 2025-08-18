// Scholarship and course data for GoLearn Global

export interface Scholarship {
  id: number;
  title: string;
  university: string;
  country: string;
  type: string;
  value: string;
  duration: string;
  deadline: string;
  image: string;
  description: string;
  requirements: string[];
}

export interface DiplomaCourse {
  id: number;
  name: string;
  university: string;
  country: string;
  duration: string;
  image: string;
  description: string;
  specializations: string[];
}

export interface MastersCourse {
  id: number;
  name: string;
  university: string;
  country: string;
  duration: string;
  image: string;
  description: string;
  specializations: string[];
}

export interface PhDCourse {
  id: number;
  name: string;
  university: string;
  country: string;
  duration: string;
  image: string;
  description: string;
  specializations: string[];
}

// Program types for filtering
export const programTypes = [
  { id: 'all', name: 'All Programs' },
  { id: 'diploma', name: 'Diploma Programs' },
  { id: 'masters', name: 'Masters Programs' },
  { id: 'phd', name: 'PhD Programs' }
];

// Sample scholarships data
export const scholarships: Scholarship[] = [
  {
    id: 1,
    title: 'Merit Scholarship for International Students',
    university: 'University of Technology Malaysia',
    country: 'Malaysia',
    type: 'Merit-based',
    value: 'Full Tuition + Living Allowance',
    duration: '4 years',
    deadline: 'March 31, 2024',
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Full scholarship covering tuition fees and living expenses for outstanding international students.',
    requirements: [
      'Minimum GPA of 3.5',
      'English proficiency test',
      'Letter of recommendation',
      'Personal statement'
    ]
  },
  {
    id: 2,
    title: 'Government Excellence Scholarship',
    university: 'Indian Institute of Technology',
    country: 'India',
    type: 'Government-funded',
    value: '75% Tuition Coverage',
    duration: '2 years',
    deadline: 'April 15, 2024',
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Government-sponsored scholarship for masters programs in engineering and technology.',
    requirements: [
      'Bachelor\'s degree in relevant field',
      'IELTS 6.5 or equivalent',
      'Research proposal',
      'Academic transcripts'
    ]
  }
];

// Diploma Courses
export const diplomaCourses: DiplomaCourse[] = [
  {
    id: 1,
    name: 'Diploma in Business Administration',
    university: 'Asia Pacific University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive business administration program covering management, marketing, and finance fundamentals.',
    specializations: [
      'Human Resource Management',
      'Marketing Management',
      'Financial Management',
      'Operations Management',
      'International Business',
      'Entrepreneurship',
      'Digital Marketing',
      'Supply Chain Management'
    ]
  },
  {
    id: 2,
    name: 'Diploma in Information Technology',
    university: 'Limkokwing University',
    country: 'Malaysia',
    duration: '2.5 years',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Practical IT program focusing on software development, networking, and system administration.',
    specializations: [
      'Software Development',
      'Network Administration',
      'Database Management',
      'Web Development',
      'Cybersecurity',
      'Mobile App Development',
      'Cloud Computing',
      'Data Analytics'
    ]
  },
  {
    id: 3,
    name: 'Diploma in Hospitality Management',
    university: 'Taylor\'s University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Hospitality management program with hands-on training in hotel operations and customer service.',
    specializations: [
      'Hotel Management',
      'Restaurant Management',
      'Event Management',
      'Tourism Management',
      'Food & Beverage Service',
      'Front Office Operations',
      'Housekeeping Management',
      'Revenue Management'
    ]
  },
  {
    id: 4,
    name: 'Diploma in Engineering Technology',
    university: 'Polytechnic University',
    country: 'Malaysia',
    duration: '3 years',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Engineering technology program with practical applications in various engineering fields.',
    specializations: [
      'Mechanical Engineering Technology',
      'Electrical Engineering Technology',
      'Civil Engineering Technology',
      'Chemical Engineering Technology',
      'Computer Engineering Technology',
      'Industrial Engineering Technology',
      'Environmental Engineering Technology',
      'Automotive Engineering Technology'
    ]
  },
  {
    id: 5,
    name: 'Diploma in Graphic Design',
    university: 'The One Academy',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Creative design program covering digital and traditional graphic design techniques.',
    specializations: [
      'Digital Illustration',
      'Brand Identity Design',
      'Web Design',
      'Print Design',
      'Packaging Design',
      'Motion Graphics',
      'UI/UX Design',
      'Typography'
    ]
  }
];

// Masters Courses (renamed from Graduate)
export const mastersCourses: MastersCourse[] = [
  {
    id: 1,
    name: 'Master of Business Administration (MBA)',
    university: 'Indian Institute of Management',
    country: 'India',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive MBA program designed for future business leaders and entrepreneurs.',
    specializations: [
      'Strategic Management',
      'International Business',
      'Finance & Investment',
      'Marketing & Sales',
      'Human Resource Management',
      'Operations Management',
      'Entrepreneurship',
      'Digital Business',
      'Supply Chain Management',
      'Business Analytics'
    ]
  },
  {
    id: 2,
    name: 'Master of Computer Science',
    university: 'University of Malaya',
    country: 'Malaysia',
    duration: '1.5-2 years',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced computer science program focusing on cutting-edge technologies and research.',
    specializations: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Cybersecurity',
      'Software Engineering',
      'Computer Networks',
      'Database Systems',
      'Human-Computer Interaction',
      'Cloud Computing',
      'Blockchain Technology'
    ]
  },
  {
    id: 3,
    name: 'Master of Engineering',
    university: 'Nanyang Technological University',
    country: 'Singapore',
    duration: '1-2 years',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced engineering program with specialization in various engineering disciplines.',
    specializations: [
      'Mechanical Engineering',
      'Electrical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Biomedical Engineering',
      'Environmental Engineering',
      'Materials Engineering',
      'Industrial Engineering',
      'Aerospace Engineering',
      'Ocean Engineering'
    ]
  },
  {
    id: 4,
    name: 'Master of Public Health',
    university: 'All India Institute of Medical Sciences',
    country: 'India',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive public health program addressing global health challenges and policy.',
    specializations: [
      'Epidemiology',
      'Health Policy & Management',
      'Environmental Health',
      'Biostatistics',
      'Global Health',
      'Health Promotion',
      'Occupational Health',
      'Maternal & Child Health',
      'Infectious Disease Control',
      'Health Economics'
    ]
  },
  {
    id: 5,
    name: 'Master of International Relations',
    university: 'Jawaharlal Nehru University',
    country: 'India',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced study of international politics, diplomacy, and global governance.',
    specializations: [
      'International Security',
      'Diplomatic Studies',
      'International Economics',
      'Regional Studies',
      'Conflict Resolution',
      'International Law',
      'Global Governance',
      'Foreign Policy Analysis',
      'International Organizations',
      'Peace Studies'
    ]
  }
];

// PhD Courses
export const phdCourses: PhDCourse[] = [
  {
    id: 1,
    name: 'PhD in Computer Science',
    university: 'National University of Singapore',
    country: 'Singapore',
    duration: '3-5 years',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in computer science with focus on advanced research and innovation.',
    specializations: [
      'Artificial Intelligence & Machine Learning',
      'Computer Vision & Graphics',
      'Distributed Systems',
      'Cybersecurity & Privacy',
      'Human-Computer Interaction',
      'Database & Information Systems',
      'Software Engineering',
      'Theoretical Computer Science',
      'Quantum Computing',
      'Bioinformatics'
    ]
  },
  {
    id: 2,
    name: 'PhD in Engineering',
    university: 'Indian Institute of Technology Delhi',
    country: 'India',
    duration: '4-6 years',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral research program in various engineering disciplines with cutting-edge research opportunities.',
    specializations: [
      'Mechanical Engineering',
      'Electrical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Aerospace Engineering',
      'Materials Science',
      'Environmental Engineering',
      'Biomedical Engineering',
      'Industrial Engineering',
      'Ocean Engineering'
    ]
  },
  {
    id: 3,
    name: 'PhD in Business Administration',
    university: 'University of Malaya',
    country: 'Malaysia',
    duration: '3-4 years',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in business administration focusing on advanced research in management and business.',
    specializations: [
      'Strategic Management',
      'Organizational Behavior',
      'Marketing Research',
      'Financial Management',
      'Operations Research',
      'International Business',
      'Entrepreneurship',
      'Business Analytics',
      'Innovation Management',
      'Corporate Governance'
    ]
  },
  {
    id: 4,
    name: 'PhD in Medicine',
    university: 'All India Institute of Medical Sciences',
    country: 'India',
    duration: '3-5 years',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in medical sciences with focus on clinical and translational research.',
    specializations: [
      'Internal Medicine',
      'Surgery',
      'Pediatrics',
      'Cardiology',
      'Neurology',
      'Oncology',
      'Radiology',
      'Pathology',
      'Pharmacology',
      'Public Health'
    ]
  },
  {
    id: 5,
    name: 'PhD in Social Sciences',
    university: 'Jawaharlal Nehru University',
    country: 'India',
    duration: '4-6 years',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in social sciences with interdisciplinary research opportunities.',
    specializations: [
      'Political Science',
      'Sociology',
      'Economics',
      'International Relations',
      'History',
      'Geography',
      'Psychology',
      'Anthropology',
      'Development Studies',
      'Gender Studies'
    ]
  }
];

// Export renamed graduate courses as masters courses for backward compatibility
export const graduateCourses = mastersCourses;
export type GraduateCourse = MastersCourse;