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
  },
  {
    id: 6,
    name: 'Diploma in Culinary Arts',
    university: 'Sunway University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional culinary program focusing on international cuisines and food service management.',
    specializations: [
      'International Cuisine',
      'Pastry & Bakery',
      'Food & Beverage Management',
      'Kitchen Management',
      'Menu Planning & Development',
      'Food Safety & Sanitation',
      'Catering Operations',
      'Sustainable Culinary Practices'
    ]
  },
  {
    id: 7,
    name: 'Diploma in Digital Marketing',
    university: 'INTI International University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Specialized program in digital marketing strategies, social media management, and online advertising.',
    specializations: [
      'Social Media Marketing',
      'Search Engine Optimization',
      'Content Marketing',
      'Email Marketing',
      'Digital Analytics',
      'Mobile Marketing',
      'E-commerce Marketing',
      'Influencer Marketing'
    ]
  },
  {
    id: 8,
    name: 'Diploma in Fashion Design',
    university: 'Raffles Design Institute',
    country: 'Singapore',
    duration: '2.5 years',
    image: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Creative fashion design program covering garment construction, textile design, and fashion merchandising.',
    specializations: [
      'Apparel Design',
      'Textile Design',
      'Fashion Illustration',
      'Pattern Making',
      'Fashion Merchandising',
      'Sustainable Fashion',
      'Costume Design',
      'Fashion Styling'
    ]
  },
  {
    id: 9,
    name: 'Diploma in Interior Design',
    university: 'UCSI University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Interior design program focusing on spatial planning, materials, and sustainable design practices.',
    specializations: [
      'Residential Design',
      'Commercial Design',
      'Sustainable Design',
      'Lighting Design',
      'Furniture Design',
      'Exhibition Design',
      'Space Planning',
      'Material & Finishes'
    ]
  },
  {
    id: 10,
    name: 'Diploma in Multimedia Design',
    university: 'Multimedia University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Multimedia design program covering animation, video production, and interactive media development.',
    specializations: [
      '3D Animation',
      'Video Production',
      'Interactive Media',
      'Game Design',
      'Visual Effects',
      'Sound Design',
      'Motion Graphics',
      'Digital Storytelling'
    ]
  },
  {
    id: 11,
    name: 'Diploma in Tourism Management',
    university: 'Taylor\'s University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tourism management program focusing on travel industry operations, destination management, and customer service.',
    specializations: [
      'Travel Agency Operations',
      'Tour Planning & Development',
      'Destination Management',
      'Sustainable Tourism',
      'Adventure Tourism',
      'Cultural Tourism',
      'Ecotourism',
      'Tourism Marketing'
    ]
  },
  {
    id: 12,
    name: 'Diploma in Accounting',
    university: 'Sunway University',
    country: 'Malaysia',
    duration: '2.5 years',
    image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Accounting program covering financial accounting, taxation, and business finance principles.',
    specializations: [
      'Financial Accounting',
      'Management Accounting',
      'Taxation',
      'Auditing',
      'Corporate Finance',
      'Financial Reporting',
      'Accounting Information Systems',
      'Business Ethics'
    ]
  },
  {
    id: 13,
    name: 'Diploma in Early Childhood Education',
    university: 'SEGi University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Early childhood education program focusing on child development, teaching methodologies, and curriculum planning.',
    specializations: [
      'Child Development',
      'Curriculum Planning',
      'Teaching Methodologies',
      'Classroom Management',
      'Special Needs Education',
      'Educational Psychology',
      'Play-Based Learning',
      'Parent-Teacher Relations'
    ]
  },
  {
    id: 14,
    name: 'Diploma in Performing Arts',
    university: 'LASALLE College of the Arts',
    country: 'Singapore',
    duration: '3 years',
    image: 'https://images.pexels.com/photos/3184469/pexels-photo-3184469.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Performing arts program covering acting, dance, and music performance techniques.',
    specializations: [
      'Acting',
      'Dance Performance',
      'Music Performance',
      'Theatre Production',
      'Voice & Speech',
      'Movement',
      'Stage Management',
      'Performance Studies'
    ]
  },
  {
    id: 15,
    name: 'Diploma in Journalism',
    university: 'HELP University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Journalism program covering news reporting, media ethics, and digital content creation.',
    specializations: [
      'News Reporting',
      'Feature Writing',
      'Photojournalism',
      'Broadcast Journalism',
      'Digital Media',
      'Media Ethics',
      'Investigative Journalism',
      'Sports Journalism'
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
  },
  {
    id: 6,
    name: 'Master of Data Science',
    university: 'National University of Singapore',
    country: 'Singapore',
    duration: '1.5 years',
    image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced program in data science focusing on big data analytics, machine learning, and statistical modeling.',
    specializations: [
      'Big Data Analytics',
      'Machine Learning',
      'Statistical Modeling',
      'Data Visualization',
      'Natural Language Processing',
      'Predictive Analytics',
      'Business Intelligence',
      'Data Engineering',
      'Deep Learning',
      'Computational Statistics'
    ]
  },
  {
    id: 7,
    name: 'Master of Architecture',
    university: 'University of Technology Malaysia',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3862133/pexels-photo-3862133.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced architecture program focusing on sustainable design, urban planning, and architectural theory.',
    specializations: [
      'Sustainable Architecture',
      'Urban Design',
      'Architectural Conservation',
      'Digital Fabrication',
      'Parametric Design',
      'Building Technology',
      'Landscape Architecture',
      'Interior Architecture',
      'Housing & Urban Development',
      'Architectural Theory & Criticism'
    ]
  },
  {
    id: 8,
    name: 'Master of Education',
    university: 'University of Malaya',
    country: 'Malaysia',
    duration: '1.5-2 years',
    image: 'https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced education program focusing on educational leadership, curriculum development, and teaching methodologies.',
    specializations: [
      'Educational Leadership',
      'Curriculum & Instruction',
      'Educational Technology',
      'Special Education',
      'TESOL (Teaching English to Speakers of Other Languages)',
      'Educational Psychology',
      'Higher Education Administration',
      'Educational Research',
      'Inclusive Education',
      'Science Education'
    ]
  },
  {
    id: 9,
    name: 'Master of Finance',
    university: 'Singapore Management University',
    country: 'Singapore',
    duration: '1 year',
    image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Specialized finance program focusing on investment analysis, financial markets, and risk management.',
    specializations: [
      'Investment Management',
      'Corporate Finance',
      'Financial Analysis',
      'Risk Management',
      'Financial Markets',
      'Wealth Management',
      'Quantitative Finance',
      'Financial Technology (FinTech)',
      'Banking & Financial Services',
      'International Finance'
    ]
  },
  {
    id: 10,
    name: 'Master of Psychology',
    university: 'HELP University',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced psychology program focusing on clinical practice, research methodologies, and psychological assessment.',
    specializations: [
      'Clinical Psychology',
      'Counseling Psychology',
      'Industrial & Organizational Psychology',
      'Educational Psychology',
      'Health Psychology',
      'Neuropsychology',
      'Forensic Psychology',
      'Child & Developmental Psychology',
      'Cognitive Psychology',
      'Social Psychology'
    ]
  },
  {
    id: 11,
    name: 'Master of Cybersecurity',
    university: 'Nanyang Technological University',
    country: 'Singapore',
    duration: '1.5 years',
    image: 'https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced cybersecurity program focusing on network security, ethical hacking, and digital forensics.',
    specializations: [
      'Network Security',
      'Ethical Hacking',
      'Digital Forensics',
      'Security Governance',
      'Cryptography',
      'Secure Software Development',
      'Cloud Security',
      'IoT Security',
      'Cyber Threat Intelligence',
      'Security Operations'
    ]
  },
  {
    id: 12,
    name: 'Master of Urban Planning',
    university: 'University of Technology Malaysia',
    country: 'Malaysia',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3862134/pexels-photo-3862134.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Urban planning program focusing on sustainable city development, transportation planning, and urban policy.',
    specializations: [
      'Sustainable Urban Development',
      'Transportation Planning',
      'Urban Policy & Governance',
      'Housing & Community Development',
      'Environmental Planning',
      'Smart Cities',
      'Urban Design',
      'Land Use Planning',
      'Infrastructure Planning',
      'Regional Planning'
    ]
  },
  {
    id: 13,
    name: 'Master of Biotechnology',
    university: 'Indian Institute of Technology Bombay',
    country: 'India',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3938024/pexels-photo-3938024.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced biotechnology program focusing on genetic engineering, bioinformatics, and pharmaceutical biotechnology.',
    specializations: [
      'Genetic Engineering',
      'Bioinformatics',
      'Pharmaceutical Biotechnology',
      'Industrial Biotechnology',
      'Agricultural Biotechnology',
      'Medical Biotechnology',
      'Environmental Biotechnology',
      'Bioprocess Engineering',
      'Molecular Biology',
      'Stem Cell Technology'
    ]
  },
  {
    id: 14,
    name: 'Master of Digital Marketing',
    university: 'RMIT University Vietnam',
    country: 'Vietnam',
    duration: '1.5 years',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Specialized digital marketing program focusing on digital strategy, analytics, and consumer behavior.',
    specializations: [
      'Digital Marketing Strategy',
      'Social Media Marketing',
      'Search Engine Marketing',
      'Content Marketing',
      'Digital Analytics',
      'E-commerce Marketing',
      'Mobile Marketing',
      'User Experience Design',
      'Digital Consumer Behavior',
      'Marketing Automation'
    ]
  },
  {
    id: 15,
    name: 'Master of Artificial Intelligence',
    university: 'Indian Institute of Technology Delhi',
    country: 'India',
    duration: '2 years',
    image: 'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced AI program focusing on machine learning, computer vision, and natural language processing.',
    specializations: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Robotics',
      'Reinforcement Learning',
      'AI Ethics',
      'Knowledge Representation',
      'Cognitive Computing',
      'Intelligent Systems'
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
  },
  {
    id: 6,
    name: 'PhD in Data Science',
    university: 'Nanyang Technological University',
    country: 'Singapore',
    duration: '4-5 years',
    image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in data science focusing on advanced analytics, machine learning, and big data research.',
    specializations: [
      'Advanced Machine Learning',
      'Big Data Analytics',
      'Computational Statistics',
      'Data Mining',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Bayesian Methods',
      'Time Series Analysis',
      'Causal Inference'
    ]
  },
  {
    id: 7,
    name: 'PhD in Biotechnology',
    university: 'Indian Institute of Technology Bombay',
    country: 'India',
    duration: '4-6 years',
    image: 'https://images.pexels.com/photos/3938024/pexels-photo-3938024.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in biotechnology focusing on genetic engineering, molecular biology, and bioprocess research.',
    specializations: [
      'Genetic Engineering',
      'Molecular Biology',
      'Bioprocess Engineering',
      'Industrial Biotechnology',
      'Agricultural Biotechnology',
      'Medical Biotechnology',
      'Pharmaceutical Biotechnology',
      'Environmental Biotechnology',
      'Synthetic Biology',
      'Systems Biology'
    ]
  },
  {
    id: 8,
    name: 'PhD in Environmental Science',
    university: 'University of Technology Malaysia',
    country: 'Malaysia',
    duration: '3-5 years',
    image: 'https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in environmental science focusing on sustainability, climate change, and environmental management.',
    specializations: [
      'Climate Change Science',
      'Environmental Management',
      'Sustainable Development',
      'Ecosystem Conservation',
      'Environmental Policy',
      'Pollution Control',
      'Renewable Energy',
      'Water Resources Management',
      'Environmental Impact Assessment',
      'Biodiversity Conservation'
    ]
  },
  {
    id: 9,
    name: 'PhD in Economics',
    university: 'Singapore Management University',
    country: 'Singapore',
    duration: '4-6 years',
    image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in economics focusing on economic theory, econometrics, and applied economics research.',
    specializations: [
      'Microeconomic Theory',
      'Macroeconomic Theory',
      'Econometrics',
      'Development Economics',
      'International Economics',
      'Labor Economics',
      'Public Economics',
      'Financial Economics',
      'Behavioral Economics',
      'Environmental Economics'
    ]
  },
  {
    id: 10,
    name: 'PhD in Psychology',
    university: 'University of Malaya',
    country: 'Malaysia',
    duration: '3-5 years',
    image: 'https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in psychology focusing on psychological research, assessment, and therapeutic interventions.',
    specializations: [
      'Clinical Psychology',
      'Cognitive Psychology',
      'Developmental Psychology',
      'Social Psychology',
      'Neuropsychology',
      'Health Psychology',
      'Educational Psychology',
      'Industrial & Organizational Psychology',
      'Cross-Cultural Psychology',
      'Positive Psychology'
    ]
  },
  {
    id: 11,
    name: 'PhD in Public Health',
    university: 'All India Institute of Medical Sciences',
    country: 'India',
    duration: '4-5 years',
    image: 'https://images.pexels.com/photos/3938025/pexels-photo-3938025.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in public health focusing on epidemiology, health policy, and global health challenges.',
    specializations: [
      'Epidemiology',
      'Health Policy & Management',
      'Global Health',
      'Biostatistics',
      'Environmental Health',
      'Health Promotion',
      'Maternal & Child Health',
      'Infectious Disease Epidemiology',
      'Health Economics',
      'Health Systems Research'
    ]
  },
  {
    id: 12,
    name: 'PhD in Education',
    university: 'Nanyang Technological University',
    country: 'Singapore',
    duration: '4-6 years',
    image: 'https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in education focusing on educational research, policy, and innovative teaching methodologies.',
    specializations: [
      'Educational Policy',
      'Curriculum Studies',
      'Educational Technology',
      'Higher Education',
      'Educational Leadership',
      'Science Education',
      'Mathematics Education',
      'Language Education',
      'Special Education',
      'Comparative Education'
    ]
  },
  {
    id: 13,
    name: 'PhD in Artificial Intelligence',
    university: 'Indian Institute of Technology Delhi',
    country: 'India',
    duration: '4-5 years',
    image: 'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in artificial intelligence focusing on advanced AI research, machine learning, and intelligent systems.',
    specializations: [
      'Deep Learning',
      'Reinforcement Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Robotics',
      'Knowledge Representation',
      'AI Ethics',
      'Cognitive Computing',
      'Multi-agent Systems',
      'Explainable AI'
    ]
  },
  {
    id: 14,
    name: 'PhD in Architecture',
    university: 'University of Technology Malaysia',
    country: 'Malaysia',
    duration: '3-5 years',
    image: 'https://images.pexels.com/photos/3862136/pexels-photo-3862136.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in architecture focusing on architectural theory, sustainable design, and urban development.',
    specializations: [
      'Architectural Theory & Criticism',
      'Sustainable Architecture',
      'Urban Design',
      'Architectural Conservation',
      'Digital Architecture',
      'Building Technology',
      'Housing & Urban Development',
      'Architectural History',
      'Parametric Design',
      'Landscape Architecture'
    ]
  },
  {
    id: 15,
    name: 'PhD in Neuroscience',
    university: 'National University of Singapore',
    country: 'Singapore',
    duration: '4-6 years',
    image: 'https://images.pexels.com/photos/3938026/pexels-photo-3938026.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Doctoral program in neuroscience focusing on brain function, neurological disorders, and cognitive processes.',
    specializations: [
      'Cognitive Neuroscience',
      'Molecular Neuroscience',
      'Cellular Neuroscience',
      'Behavioral Neuroscience',
      'Computational Neuroscience',
      'Developmental Neuroscience',
      'Clinical Neuroscience',
      'Neuroimaging',
      'Neurogenetics',
      'Neuroengineering'
    ]
  }
];

// Export renamed graduate courses as masters courses for backward compatibility
export const graduateCourses = mastersCourses;
export type GraduateCourse = MastersCourse;