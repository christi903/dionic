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

export const scholarships: Scholarship[] = [
  // UNDERGRADUATE PROGRAMS
  {
    id: 1,
    title: 'Engineering Excellence Program',
    university: 'Technical University of Munich',
    country: 'Germany',
    type: 'undergraduate',
    value: 'Full Tuition + Living Allowance',
    duration: '4 Years',
    deadline: 'March 31, 2025',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive engineering program with cutting-edge research opportunities.',
    requirements: ['Minimum GPA 3.5', 'IELTS 6.5+', 'Mathematics & Physics background']
  },
  {
    id: 2,
    title: 'Computer Science Innovation',
    university: 'University of Toronto',
    country: 'Canada',
    type: 'undergraduate',
    value: 'CAD 45,000 per year',
    duration: '4 Years',
    deadline: 'January 15, 2025',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Leading computer science program with AI and machine learning focus.',
    requirements: ['Strong math background', 'IELTS 6.5+', 'Programming experience preferred']
  },
  {
    id: 3,
    title: 'Medical Sciences Foundation',
    university: 'University of Melbourne',
    country: 'Australia',
    type: 'undergraduate',
    value: 'AUD 40,000 per year',
    duration: '6 Years',
    deadline: 'December 1, 2024',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive medical program preparing future healthcare leaders.',
    requirements: ['Excellent academic record', 'IELTS 7.0+', 'Science prerequisites']
  },
  {
    id: 4,
    title: 'Agricultural Innovation Grant',
    university: 'Wageningen University',
    country: 'Netherlands',
    type: 'undergraduate',
    value: 'Full Scholarship',
    duration: '3 Years',
    deadline: 'February 28, 2025',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Focus on sustainable agriculture and food security innovations.',
    requirements: ['Science background', 'IELTS 6.0+', 'Agriculture interest']
  },
  {
    id: 5,
    title: 'Arts & Culture Exchange',
    university: 'University of Sydney',
    country: 'Australia',
    type: 'undergraduate',
    value: 'AUD 30,000 per year',
    duration: '3 Years',
    deadline: 'March 1, 2025',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Creative arts program celebrating cultural diversity and global perspectives.',
    requirements: ['Portfolio submission', 'IELTS 6.5+', 'Creative background']
  },
  {
    id: 6,
    title: 'Business Administration',
    university: 'University of British Columbia',
    country: 'Canada',
    type: 'undergraduate',
    value: 'CAD 35,000 per year',
    duration: '4 Years',
    deadline: 'February 1, 2025',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive business program with international focus and co-op opportunities.',
    requirements: ['Strong academic record', 'IELTS 6.5+', 'Leadership experience']
  },
  {
    id: 7,
    title: 'Environmental Science Program',
    university: 'ETH Zurich',
    country: 'Switzerland',
    type: 'undergraduate',
    value: 'CHF 25,000 per year',
    duration: '3 Years',
    deadline: 'March 15, 2025',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Leading environmental science program focusing on climate change solutions.',
    requirements: ['Science background', 'IELTS 7.0+', 'Environmental passion']
  },
  {
    id: 8,
    title: 'Psychology & Human Behavior',
    university: 'University of Amsterdam',
    country: 'Netherlands',
    type: 'undergraduate',
    value: '€20,000 per year',
    duration: '3 Years',
    deadline: 'April 1, 2025',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive psychology program with research and clinical opportunities.',
    requirements: ['Strong academic record', 'IELTS 6.5+', 'Psychology interest']
  },
  {
    id: 9,
    title: 'International Relations',
    university: 'Sciences Po Paris',
    country: 'France',
    type: 'undergraduate',
    value: '€15,000 per year',
    duration: '3 Years',
    deadline: 'January 31, 2025',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Premier international relations program with global perspective.',
    requirements: ['Excellent grades', 'IELTS 7.0+', 'Political interest']
  },
  {
    id: 10,
    title: 'Architecture & Design',
    university: 'Delft University of Technology',
    country: 'Netherlands',
    type: 'undergraduate',
    value: '€18,000 per year',
    duration: '3 Years',
    deadline: 'May 1, 2025',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Innovative architecture program combining design with sustainability.',
    requirements: ['Portfolio required', 'IELTS 6.5+', 'Design aptitude']
  },

  // GRADUATE PROGRAMS
  {
    id: 11,
    title: 'Global Health Initiative',
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    type: 'graduate',
    value: '£25,000 per year',
    duration: '2 Years',
    deadline: 'April 15, 2025',
    image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Master\'s program focused on global health challenges and solutions.',
    requirements: ['Bachelor\'s degree', 'IELTS 7.0+', 'Health sciences background']
  },
  {
    id: 12,
    title: 'Business Leadership Program',
    university: 'INSEAD Business School',
    country: 'France',
    type: 'graduate',
    value: '€35,000 scholarship',
    duration: '1 Year',
    deadline: 'May 1, 2025',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'MBA program designed for emerging business leaders worldwide.',
    requirements: ['3+ years work experience', 'GMAT 650+', 'Leadership experience']
  },
  {
    id: 13,
    title: 'Data Science & Analytics',
    university: 'University of Oxford',
    country: 'United Kingdom',
    type: 'graduate',
    value: '£30,000 per year',
    duration: '1 Year',
    deadline: 'January 20, 2025',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Advanced data science program with industry partnerships.',
    requirements: ['Quantitative degree', 'IELTS 7.5+', 'Programming skills']
  },
  {
    id: 14,
    title: 'Sustainable Engineering',
    university: 'KTH Royal Institute of Technology',
    country: 'Sweden',
    type: 'graduate',
    value: 'SEK 200,000 per year',
    duration: '2 Years',
    deadline: 'February 1, 2025',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Master\'s in sustainable engineering with renewable energy focus.',
    requirements: ['Engineering degree', 'IELTS 6.5+', 'Sustainability interest']
  },
  {
    id: 15,
    title: 'International Development',
    university: 'Graduate Institute Geneva',
    country: 'Switzerland',
    type: 'graduate',
    value: 'CHF 30,000 per year',
    duration: '2 Years',
    deadline: 'March 1, 2025',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Master\'s program in international development and cooperation.',
    requirements: ['Bachelor\'s degree', 'IELTS 7.0+', 'Development interest']
  },
  {
    id: 16,
    title: 'Artificial Intelligence',
    university: 'University of Amsterdam',
    country: 'Netherlands',
    type: 'graduate',
    value: '€25,000 per year',
    duration: '2 Years',
    deadline: 'April 1, 2025',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Cutting-edge AI program with machine learning and robotics.',
    requirements: ['CS or related degree', 'IELTS 6.5+', 'Programming experience']
  },
  {
    id: 17,
    title: 'Public Health Management',
    university: 'London School of Hygiene & Tropical Medicine',
    country: 'United Kingdom',
    type: 'graduate',
    value: '£28,000 per year',
    duration: '1 Year',
    deadline: 'June 30, 2025',
    image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Master\'s in public health with global health focus.',
    requirements: ['Health-related degree', 'IELTS 7.0+', 'Work experience preferred']
  },
  {
    id: 18,
    title: 'Finance & Investment',
    university: 'HEC Paris',
    country: 'France',
    type: 'graduate',
    value: '€20,000 per year',
    duration: '2 Years',
    deadline: 'March 15, 2025',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Master\'s in finance with quantitative methods and investment focus.',
    requirements: ['Business/Economics degree', 'GMAT/GRE', 'IELTS 7.0+']
  },
  {
    id: 19,
    title: 'Climate Change Studies',
    university: 'University of Copenhagen',
    country: 'Denmark',
    type: 'graduate',
    value: 'DKK 150,000 per year',
    duration: '2 Years',
    deadline: 'February 15, 2025',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Interdisciplinary program addressing climate change challenges.',
    requirements: ['Science degree', 'IELTS 6.5+', 'Environmental background']
  },
  {
    id: 20,
    title: 'Digital Marketing & Innovation',
    university: 'IE Business School',
    country: 'Spain',
    type: 'graduate',
    value: '€15,000 per year',
    duration: '1 Year',
    deadline: 'July 1, 2025',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Master\'s in digital marketing with innovation and entrepreneurship.',
    requirements: ['Bachelor\'s degree', 'IELTS 6.5+', 'Marketing interest']
  },

  // PhD PROGRAMS
  {
    id: 21,
    title: 'Technology & Innovation PhD',
    university: 'MIT',
    country: 'United States',
    type: 'phd',
    value: '$50,000 stipend',
    duration: '5 Years',
    deadline: 'December 15, 2024',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Doctoral research program in cutting-edge technology fields.',
    requirements: ['Master\'s degree', 'GRE scores', 'Research experience']
  },
  {
    id: 22,
    title: 'Biomedical Engineering PhD',
    university: 'Imperial College London',
    country: 'United Kingdom',
    type: 'phd',
    value: '£18,000 stipend',
    duration: '4 Years',
    deadline: 'January 31, 2025',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'PhD in biomedical engineering with medical device innovation focus.',
    requirements: ['Master\'s in engineering', 'IELTS 7.0+', 'Research publications']
  },
  {
    id: 23,
    title: 'Climate Science Research',
    university: 'Max Planck Institute',
    country: 'Germany',
    type: 'phd',
    value: '€24,000 stipend',
    duration: '4 Years',
    deadline: 'March 1, 2025',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'PhD in climate science with atmospheric research focus.',
    requirements: ['Master\'s in science', 'Research experience', 'IELTS 6.5+']
  },
  {
    id: 24,
    title: 'Artificial Intelligence PhD',
    university: 'University of Toronto',
    country: 'Canada',
    type: 'phd',
    value: 'CAD 35,000 stipend',
    duration: '5 Years',
    deadline: 'December 1, 2024',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'PhD in AI with machine learning and neural networks research.',
    requirements: ['Master\'s in CS/AI', 'Strong programming', 'Research publications']
  },
  {
    id: 25,
    title: 'Neuroscience Research',
    university: 'Karolinska Institute',
    country: 'Sweden',
    type: 'phd',
    value: 'SEK 240,000 stipend',
    duration: '4 Years',
    deadline: 'February 1, 2025',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'PhD in neuroscience with brain research and medical applications.',
    requirements: ['Master\'s in neuroscience', 'Research experience', 'IELTS 7.0+']
  },
  {
    id: 26,
    title: 'Quantum Physics PhD',
    university: 'University of Vienna',
    country: 'Austria',
    type: 'phd',
    value: '€28,000 stipend',
    duration: '4 Years',
    deadline: 'January 15, 2025',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'PhD in quantum physics with quantum computing applications.',
    requirements: ['Master\'s in physics', 'Strong mathematics', 'Research background']
  },
  {
    id: 27,
    title: 'Social Psychology PhD',
    university: 'University of Amsterdam',
    country: 'Netherlands',
    type: 'phd',
    value: '€30,000 stipend',
    duration: '4 Years',
    deadline: 'April 1, 2025',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'PhD in social psychology with cultural and behavioral research.',
    requirements: ['Master\'s in psychology', 'Research methods', 'IELTS 7.0+']
  },
  {
    id: 28,
    title: 'Renewable Energy PhD',
    university: 'Technical University of Denmark',
    country: 'Denmark',
    type: 'phd',
    value: 'DKK 200,000 stipend',
    duration: '3 Years',
    deadline: 'March 15, 2025',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'PhD in renewable energy with wind and solar technology research.',
    requirements: ['Master\'s in engineering', 'Energy background', 'IELTS 6.5+']
  },
  {
    id: 29,
    title: 'International Law PhD',
    university: 'Graduate Institute Geneva',
    country: 'Switzerland',
    type: 'phd',
    value: 'CHF 35,000 stipend',
    duration: '4 Years',
    deadline: 'February 28, 2025',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'PhD in international law with human rights and diplomacy focus.',
    requirements: ['Master\'s in law', 'Legal research', 'IELTS 7.5+']
  },
  {
    id: 30,
    title: 'Marine Biology PhD',
    university: 'University of Bergen',
    country: 'Norway',
    type: 'phd',
    value: 'NOK 300,000 stipend',
    duration: '4 Years',
    deadline: 'January 31, 2025',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'PhD in marine biology with ocean conservation research.',
    requirements: ['Master\'s in biology', 'Marine research', 'IELTS 6.5+']
  }
];

export interface DiplomaCourse {
  id: number;
  name: string;
  duration: string;
  specializations: string[];
  university: string;
  country: string;
  image: string;
  description: string;
}

export const diplomaCourses: DiplomaCourse[] = [
  {
    id: 1,
    name: 'Diploma in Engineering',
    duration: '3 Years',
    specializations: [
      'Aeronautical Engineering',
      'Agricultural Engineering', 
      'Automobile Engineering',
      'Automation & Robotics',
      'Bio-Medical Engineering',
      'Biotechnology',
      'Chemical Engineering',
      'Civil Engineering',
      'Computer Engineering',
      'Dairy Technology',
      'Electrical Engineering',
      'Electronics & Communication Engineering',
      'Food Technology',
      'Information Technology',
      'Mechanical Engineering',
      'Mechatronics Engineering',
      'Petrochemical Engineering'
    ],
    university: 'Singapore Polytechnic',
    country: 'Singapore',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive engineering diploma program with multiple specializations and hands-on training.'
  },
  {
    id: 2,
    name: 'Diploma in Architecture',
    duration: '3 Years',
    specializations: ['Architectural Design', 'Urban Planning', 'Interior Design'],
    university: 'Royal Melbourne Institute of Technology',
    country: 'Australia',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Creative architecture program focusing on sustainable design and modern construction techniques.'
  },
  {
    id: 3,
    name: 'Diploma in Design',
    duration: '3 Years',
    specializations: ['Fashion Design & Technology', 'Interior & Furniture Design', 'Product Design', 'Visual Communication'],
    university: 'Parsons School of Design',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Innovative design program combining creativity with technical skills and industry experience.'
  },
  {
    id: 4,
    name: 'Diploma in Pharmacy',
    duration: '2 Years',
    specializations: ['Clinical Pharmacy', 'Pharmaceutical Sciences', 'Drug Development'],
    university: 'University of Toronto',
    country: 'Canada',
    image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Professional pharmacy program preparing students for careers in healthcare and pharmaceutical industry.'
  },
  {
    id: 5,
    name: 'Diploma in Paramedical & Health Science',
    duration: '3 Years',
    specializations: [
      'Anesthesia & Critical Care',
      'Cardiac Care Technology',
      'Emergency Medical Services',
      'Health Assistant (General Medicine)',
      'Medical Laboratory Technology',
      'Neuroscience',
      'Operation Theatre Technology',
      'Optometry',
      'Radiography',
      'Renal Dialysis',
      'Clinical Medicine'
    ],
    university: 'King\'s College London',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive healthcare program with diverse specializations in medical technology and patient care.'
  },
  {
    id: 6,
    name: 'Diploma in Hotel Management & Catering Technology',
    duration: '3 Years',
    specializations: ['Hotel Operations', 'Culinary Arts', 'Event Management', 'Tourism Management'],
    university: 'Swiss Hotel Management School',
    country: 'Switzerland',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Professional hospitality program combining practical training with business management skills.'
  },
  {
    id: 7,
    name: 'Diploma in Performing Arts',
    duration: '1 Year',
    specializations: ['Dance', 'Drama', 'Music'],
    university: 'Juilliard School',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Intensive performing arts program for aspiring artists in dance, drama, and music.'
  },
  {
    id: 8,
    name: 'General Nursing Midwifery',
    duration: '3 Years',
    specializations: ['General Nursing', 'Midwifery Care', 'Community Health'],
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive nursing program preparing healthcare professionals for diverse medical environments.'
  },
  {
    id: 9,
    name: 'Auxiliary Nursing Midwifery',
    duration: '2 Years',
    specializations: ['Basic Nursing Care', 'Maternal Health', 'Community Outreach'],
    university: 'University of Cape Town',
    country: 'South Africa',
    image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Essential nursing program focusing on primary healthcare and community service.'
  }
];

export const programTypes = [
  { id: 'diploma', name: 'Diploma' },
  { id: 'undergraduate', name: 'Undergraduate' },
  { id: 'graduate', name: 'Graduate' },
  { id: 'phd', name: 'PhD' }
];
