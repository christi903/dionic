export interface Scholarship {
  id: number;
  title: string;
  university: string;
  country: string;
  type: string;
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
    title: 'Bachelor of Arts Program',
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    type: 'undergraduate',
    duration: '3 Years',
    deadline: 'March 31, 2025',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive arts program covering literature, history, philosophy, and cultural studies.',
    requirements: ['Minimum GPA 3.5', 'IELTS 6.5+', 'Strong writing skills']
  },
  {
    id: 2,
    title: 'Bachelor of Technology',
    university: 'Technical University of Munich',
    country: 'Germany',
    type: 'undergraduate',
    duration: '4 Years',
    deadline: 'January 15, 2025',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Advanced technology program with engineering and computer science focus.',
    requirements: ['Strong math background', 'IELTS 6.5+', 'Science prerequisites']
  },
  {
    id: 3,
    title: 'Bachelor of Business Administration',
    university: 'University of Toronto',
    country: 'Canada',
    type: 'undergraduate',
    duration: '4 Years',
    deadline: 'December 1, 2024',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive business program with international focus and leadership development.',
    requirements: ['Excellent academic record', 'IELTS 6.5+', 'Leadership potential']
  },
  {
    id: 4,
    title: 'Bachelor of Visual Arts',
    university: 'Royal College of Art',
    country: 'United Kingdom',
    type: 'undergraduate',
    duration: '3 Years',
    deadline: 'February 28, 2025',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Creative visual arts program with digital media and traditional art techniques.',
    requirements: ['Portfolio submission', 'IELTS 6.5+', 'Creative background']
  },
  {
    id: 5,
    title: 'Bachelor of Agriculture',
    university: 'Wageningen University',
    country: 'Netherlands',
    type: 'undergraduate',
    duration: '3 Years',
    deadline: 'March 1, 2025',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Sustainable agriculture program focusing on food security and environmental stewardship.',
    requirements: ['Science background', 'IELTS 6.0+', 'Agriculture interest']
  },
  {
    id: 6,
    title: 'Bachelor of Design',
    university: 'Parsons School of Design',
    country: 'United States',
    type: 'undergraduate',
    duration: '4 Years',
    deadline: 'February 1, 2025',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Innovative design program combining creativity with technical skills and industry experience.',
    requirements: ['Portfolio required', 'IELTS 6.5+', 'Design aptitude']
  },
  {
    id: 7,
    title: 'Bachelor of Integrated Law',
    university: 'University of Oxford',
    country: 'United Kingdom',
    type: 'undergraduate',
    duration: '3 Years',
    deadline: 'March 15, 2025',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive law program with international legal studies and human rights focus.',
    requirements: ['Excellent grades', 'IELTS 7.0+', 'Critical thinking skills']
  },
  {
    id: 8,
    title: 'Bachelor of Science in Design',
    university: 'MIT',
    country: 'United States',
    type: 'undergraduate',
    duration: '4 Years',
    deadline: 'April 1, 2025',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Science-based design program integrating technology, engineering, and creative problem-solving.',
    requirements: ['Strong STEM background', 'IELTS 7.0+', 'Design portfolio']
  },
  {
    id: 9,
    title: 'Bachelor of Social Work',
    university: 'University of Toronto',
    country: 'Canada',
    type: 'undergraduate',
    duration: '4 Years',
    deadline: 'January 31, 2025',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Social work program preparing students for community development and social justice advocacy.',
    requirements: ['Strong academic record', 'IELTS 6.5+', 'Community service experience']
  },
  {
    id: 10,
    title: 'Bachelor of Commerce',
    university: 'University of Melbourne',
    country: 'Australia',
    type: 'undergraduate',
    duration: '3 Years',
    deadline: 'May 1, 2025',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Commerce program with specializations in finance, accounting, and international business.',
    requirements: ['Strong mathematics', 'IELTS 6.5+', 'Business aptitude']
  },
  {
    id: 11,
    title: 'Bachelor of Computer Science',
    university: 'University of Waterloo',
    country: 'Canada',
    type: 'undergraduate',
    duration: '4 Years',
    deadline: 'February 15, 2025',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Leading computer science program with co-op opportunities and industry partnerships.',
    requirements: ['Strong mathematics', 'IELTS 6.5+', 'Programming aptitude']
  },
  {
    id: 12,
    title: 'Bachelor of Architecture',
    university: 'Delft University of Technology',
    country: 'Netherlands',
    type: 'undergraduate',
    duration: '3 Years',
    deadline: 'March 30, 2025',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Architecture program combining design innovation with sustainable building practices.',
    requirements: ['Portfolio required', 'IELTS 6.5+', 'Design creativity']
  },
  {
    id: 13,
    title: 'Bachelor of Information Technology',
    university: 'University of Sydney',
    country: 'Australia',
    type: 'undergraduate',
    duration: '3 Years',
    deadline: 'April 15, 2025',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'IT program focusing on software development, cybersecurity, and digital innovation.',
    requirements: ['Mathematics background', 'IELTS 6.5+', 'Technology interest']
  },
  {
    id: 14,
    title: 'Bachelor of Hotel Management',
    university: 'Swiss Hotel Management School',
    country: 'Switzerland',
    type: 'undergraduate',
    duration: '3 Years',
    deadline: 'May 15, 2025',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Hospitality management program with international internship opportunities.',
    requirements: ['Strong communication', 'IELTS 6.5+', 'Service orientation']
  },
  {
    id: 15,
    title: 'Bachelor of Public Health',
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    type: 'undergraduate',
    duration: '4 Years',
    deadline: 'June 1, 2025',
    image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Public health program addressing global health challenges and community wellness.',
    requirements: ['Science background', 'IELTS 7.0+', 'Health interest']
  },

  // GRADUATE PROGRAMS
  {
    id: 11,
    title: 'Global Health Initiative',
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    type: 'graduate',
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
    value: '$38,000 per year',
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
    value: '$37,500 per year',
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
    value: '$19,000 per year',
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
    value: '$33,500 per year',
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
    value: '$27,000 per year',
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
    value: '$35,000 per year',
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
    value: '$21,500 per year',
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
    value: '$21,500 per year',
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
    value: '$16,500 per year',
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
    value: '$50,000 per year',
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
    value: '$22,500 per year',
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
    value: '$26,000 per year',
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
    value: '$26,000 per year',
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
    value: '$23,000 per year',
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
    value: '$30,500 per year',
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
    value: '$32,500 per year',
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
    value: '$29,000 per year',
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
    value: '$39,000 per year',
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
    value: '$28,500 per year',
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
      'Chemical Engineering',
      'Civil Engineering', 
      'Computer Engineering',
      'Dairy Technology',
      'Automation & Robotics',
      'Agricultural Engineering',
      'Aeronautical Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Electronics & Communication',
      'Bio-Medical Engineering',
      'Environmental Engineering'
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
    specializations: ['Architectural Design', 'Urban Planning', 'Interior Design', 'Sustainable Architecture'],
    university: 'Royal Melbourne Institute of Technology',
    country: 'Australia',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Creative architecture program focusing on sustainable design and modern construction techniques.'
  },
  {
    id: 3,
    name: 'Diploma in Design',
    duration: '3 Years',
    specializations: ['Fashion Design & Technology', 'Interior & Furniture Design', 'Product Design', 'Visual Communication', 'Graphic Design'],
    university: 'Parsons School of Design',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Innovative design program combining creativity with technical skills and industry experience.'
  },
  {
    id: 4,
    name: 'Diploma in Pharmacy',
    duration: '2 Years',
    specializations: ['Clinical Pharmacy', 'Pharmaceutical Sciences', 'Drug Development', 'Hospital Pharmacy'],
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
      'Cardiac Care Technology',
      'Emergency Medical Services',
      'Medical Laboratory Technology',
      'Operation Theatre Technology',
      'Radiography & Imaging',
      'Anesthesia Technology',
      'Dialysis Technology',
      'Optometry',
      'Physiotherapy Assistant'
    ],
    university: 'King\'s College London',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive healthcare program with diverse specializations in medical technology and patient care.'
  },
  {
    id: 6,
    name: 'Diploma in Hotel Management',
    duration: '3 Years',
    specializations: ['Hotel Operations', 'Culinary Arts', 'Event Management', 'Tourism Management', 'Food & Beverage Service'],
    university: 'Swiss Hotel Management School',
    country: 'Switzerland',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Professional hospitality program combining practical training with business management skills.'
  },
  {
    id: 7,
    name: 'Diploma in Performing Arts',
    duration: '2 Years',
    specializations: ['Dance', 'Drama & Theatre', 'Music Performance', 'Choreography', 'Stage Management'],
    university: 'Juilliard School',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Intensive performing arts program for aspiring artists in dance, drama, and music.'
  },
  {
    id: 8,
    name: 'General Nursing Midwifery',
    duration: '3 Years',
    specializations: ['General Nursing', 'Midwifery Care', 'Community Health', 'Pediatric Care'],
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive nursing program preparing healthcare professionals for diverse medical environments.'
  },
  {
    id: 9,
    name: 'Auxiliary Nursing Midwifery',
    duration: '2 Years',
    specializations: ['Basic Nursing Care', 'Maternal Health', 'Community Outreach', 'First Aid'],
    university: 'University of Cape Town',
    country: 'South Africa',
    image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Essential nursing program focusing on primary healthcare and community service.'
  },
  {
    id: 10,
    name: 'Diploma in Digital Marketing',
    duration: '1 Year',
    specializations: [
      'Social Media Marketing',
      'Search Engine Optimization',
      'Content Marketing',
      'Email Marketing',
      'Digital Analytics',
      'E-commerce Marketing',
      'Mobile Marketing',
      'Inbound Marketing',
      'Video Marketing',
      'Marketing Automation'
    ],
    university: 'New York University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive digital marketing program covering all aspects of online marketing strategies and tools.'
  },
  {
    id: 11,
    name: 'Diploma in Artificial Intelligence',
    duration: '2 Years',
    specializations: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Robotics',
      'Neural Networks',
      'AI Ethics',
      'Reinforcement Learning',
      'AI for Business',
      'AI in Healthcare'
    ],
    university: 'Massachusetts Institute of Technology',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Cutting-edge program in artificial intelligence covering both theoretical foundations and practical applications.'
  },
  {
    id: 12,
    name: 'Diploma in Environmental Science',
    duration: '2 Years',
    specializations: [
      'Conservation Biology',
      'Climate Change Studies',
      'Environmental Policy',
      'Renewable Energy',
      'Waste Management',
      'Water Resource Management',
      'Environmental Impact Assessment',
      'Sustainability Studies',
      'Marine Conservation',
      'Environmental Education'
    ],
    university: 'University of British Columbia',
    country: 'Canada',
    image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Interdisciplinary program focusing on environmental challenges and sustainable solutions for a better future.'
  }
];

export interface UndergraduateCourse {
  id: number;
  name: string;
  duration: string;
  specializations: string[];
  university: string;
  country: string;
  image: string;
  description: string;
}

export const undergraduateCourses: UndergraduateCourse[] = [
  {
    id: 1,
    name: 'Bachelor of Medicine',
    duration: '6 Years',
    specializations: [
      'General Medicine',
      'Cardiology',
      'Neurology',
      'Pediatrics',
      'Psychiatry',
      'Surgery',
      'Internal Medicine',
      'Emergency Medicine',
      'Oncology',
      'Dermatology',
      'Orthopedics',
      'Radiology'
    ],
    university: 'University of Oxford',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive medical program preparing students for medical practice with extensive clinical training.'
  },
  {
    id: 5,
    name: 'Bachelor of Law (LLB)',
    duration: '3 Years',
    specializations: [
      'Corporate Law',
      'International Law',
      'Criminal Law',
      'Human Rights Law',
      'Environmental Law',
      'Intellectual Property Law',
      'Tax Law',
      'Constitutional Law',
      'Maritime Law',
      'Cyber Law',
      'Family Law',
      'Labor Law'
    ],
    university: 'Yale University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive legal education program preparing students for diverse legal careers with a global perspective.'
  },
  {
    id: 6,
    name: 'Bachelor of Commerce',
    duration: '3 Years',
    specializations: [
      'Accounting',
      'Finance',
      'Marketing',
      'International Business',
      'Business Analytics',
      'E-Commerce',
      'Supply Chain Management',
      'Entrepreneurship',
      'Banking and Insurance',
      'Financial Technology',
      'Human Resource Management',
      'Risk Management'
    ],
    university: 'University of Melbourne',
    country: 'Australia',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Dynamic business program combining theoretical knowledge with practical skills for the global marketplace.'
  },
  {
    id: 7,
    name: 'Bachelor of Science in Design',
    duration: '4 Years',
    specializations: [
      'Graphic Design',
      'Industrial Design',
      'Fashion Design',
      'Interior Design',
      'User Experience (UX) Design',
      'Motion Graphics',
      'Game Design',
      'Product Design',
      'Environmental Design',
      'Interaction Design',
      'Textile Design',
      'Design Management'
    ],
    university: 'Rhode Island School of Design',
    country: 'United States',
    image: 'https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Innovative design program fostering creativity and technical skills across multiple design disciplines.'
  },
  {
    id: 8,
    name: 'Bachelor of Science in Hotel Management',
    duration: '3 Years',
    specializations: [
      'Hospitality Operations',
      'Food and Beverage Management',
      'Event Management',
      'Resort Management',
      'Revenue Management',
      'Sustainable Tourism',
      'Cruise Line Management',
      'Culinary Arts',
      'Luxury Brand Management',
      'Hospitality Real Estate',
      'Spa and Wellness Management',
      'International Hospitality'
    ],
    university: 'Ecole hôtelière de Lausanne',
    country: 'Switzerland',
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive hospitality management program combining business acumen with industry-specific knowledge.'
  },
  {
    id: 9,
    name: 'Bachelor of Business Administration',
    duration: '4 Years',
    specializations: [
      'International Business',
      'Entrepreneurship',
      'Marketing Management',
      'Financial Management',
      'Human Resource Management',
      'Operations Management',
      'Business Analytics',
      'Digital Marketing',
      'Supply Chain Management',
      'Business Economics',
      'Management Consulting',
      'Corporate Strategy'
    ],
    university: 'INSEAD',
    country: 'France',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive business administration program developing future business leaders with global perspectives.'
  },
  {
    id: 10,
    name: 'Bachelor of Science in Aerospace Engineering',
    duration: '4 Years',
    specializations: [
      'Aerodynamics',
      'Aircraft Design',
      'Spacecraft Engineering',
      'Propulsion Systems',
      'Avionics',
      'Flight Dynamics',
      'Aerospace Materials',
      'Satellite Technology',
      'Unmanned Aerial Systems',
      'Space Exploration',
      'Aerospace Structures',
      'Flight Test Engineering'
    ],
    university: 'California Institute of Technology',
    country: 'United States',
    image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Cutting-edge aerospace engineering program focusing on aircraft and spacecraft design, development, and testing.'
  },
  {
    id: 2,
    name: 'Bachelor of Engineering',
    duration: '4 Years',
    specializations: [
      'Mechanical Engineering',
      'Electrical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Computer Engineering',
      'Biomedical Engineering',
      'Aerospace Engineering',
      'Environmental Engineering',
      'Industrial Engineering',
      'Materials Science',
      'Robotics & Automation',
      'Nuclear Engineering'
    ],
    university: 'Massachusetts Institute of Technology',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Advanced engineering program with cutting-edge research and practical applications.'
  },
  {
    id: 3,
    name: 'Bachelor of Business Administration',
    duration: '4 Years',
    specializations: [
      'Finance',
      'Marketing',
      'Human Resources',
      'International Business',
      'Entrepreneurship',
      'Supply Chain Management',
      'Information Systems',
      'Accounting',
      'Economics',
      'Strategic Management',
      'Business Analytics',
      'Hospitality Management'
    ],
    university: 'Harvard University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive business program developing leadership and management skills for global markets.'
  },
  {
    id: 4,
    name: 'Bachelor of Computer Science',
    duration: '4 Years',
    specializations: [
      'Software Engineering',
      'Artificial Intelligence',
      'Data Science',
      'Cybersecurity',
      'Computer Networks',
      'Database Systems',
      'Game Development',
      'Web Development',
      'Mobile App Development',
      'Machine Learning',
      'Cloud Computing',
      'Human-Computer Interaction'
    ],
    university: 'Stanford University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Innovative computer science program with focus on emerging technologies and practical applications.'
  },
  {
    id: 5,
    name: 'Bachelor of Architecture',
    duration: '5 Years',
    specializations: [
      'Architectural Design',
      'Urban Planning',
      'Interior Architecture',
      'Sustainable Design',
      'Landscape Architecture',
      'Historic Preservation',
      'Digital Fabrication',
      'Building Technology',
      'Environmental Design',
      'Cultural Heritage',
      'Parametric Design',
      'Smart Cities'
    ],
    university: 'Royal Melbourne Institute of Technology',
    country: 'Australia',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Creative architecture program emphasizing sustainable design and innovative construction techniques.'
  },
  {
    id: 6,
    name: 'Bachelor of Arts',
    duration: '3 Years',
    specializations: [
      'English Literature',
      'History',
      'Philosophy',
      'Political Science',
      'Sociology',
      'Psychology',
      'Economics',
      'International Relations',
      'Media Studies',
      'Cultural Studies',
      'Linguistics',
      'Anthropology'
    ],
    university: 'University of Cambridge',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Liberal arts program fostering critical thinking and cultural understanding across disciplines.'
  },
  {
    id: 7,
    name: 'Bachelor of Science in Data Science',
    duration: '4 Years',
    specializations: [
      'Machine Learning',
      'Big Data Analytics',
      'Business Intelligence',
      'Statistical Analysis',
      'Data Visualization',
      'Natural Language Processing',
      'Predictive Analytics',
      'Data Engineering',
      'Deep Learning',
      'Data Mining',
      'AI in Data Science',
      'Cloud Computing for Data'
    ],
    university: 'Carnegie Mellon University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive program focusing on extracting insights from complex data using cutting-edge computational and statistical methods.'
  },
  {
    id: 8,
    name: 'Bachelor of Science in Environmental Engineering',
    duration: '4 Years',
    specializations: [
      'Water Resources',
      'Air Quality Control',
      'Waste Management',
      'Sustainable Energy',
      'Environmental Policy',
      'Climate Change',
      'Ecological Engineering',
      'Environmental Chemistry',
      'Hazardous Waste Management',
      'Environmental Impact Assessment',
      'Renewable Energy Systems',
      'Water Treatment Technologies'
    ],
    university: 'ETH Zurich',
    country: 'Switzerland',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Program focused on developing sustainable solutions for environmental challenges through engineering principles.'
  },
  {
    id: 9,
    name: 'Bachelor of Science in Neuroscience',
    duration: '4 Years',
    specializations: [
      'Cognitive Neuroscience',
      'Behavioral Neuroscience',
      'Clinical Neuroscience',
      'Computational Neuroscience',
      'Developmental Neuroscience',
      'Molecular Neuroscience',
      'Neuropharmacology',
      'Neuropsychology',
      'Systems Neuroscience',
      'Neurological Disorders',
      'Neuroimaging',
      'Neurobiology'
    ],
    university: 'Johns Hopkins University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Interdisciplinary program exploring the structure and function of the nervous system and its impact on behavior and cognition.'
  },
  {
    id: 10,
    name: 'Bachelor of Science in Aerospace Engineering',
    duration: '4 Years',
    specializations: [
      'Aerodynamics',
      'Aircraft Design',
      'Spacecraft Systems',
      'Propulsion',
      'Flight Dynamics',
      'Aerospace Materials',
      'Avionics',
      'Space Mission Design',
      'Satellite Technology',
      'Unmanned Aerial Systems',
      'Aerospace Structures',
      'Hypersonics'
    ],
    university: 'California Institute of Technology',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Program focused on the design, development, and testing of aircraft and spacecraft, combining engineering principles with space exploration technologies.'
  },
  {
    id: 11,
    name: 'Bachelor of Science in Biomedical Engineering',
    duration: '4 Years',
    specializations: [
      'Biomechanics',
      'Biomaterials',
      'Medical Imaging',
      'Tissue Engineering',
      'Neural Engineering',
      'Prosthetics',
      'Medical Device Design',
      'Rehabilitation Engineering',
      'Biomedical Instrumentation',
      'Clinical Engineering',
      'Cellular Engineering',
      'Biomedical Data Science'
    ],
    university: 'Johns Hopkins University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Program that applies engineering principles to healthcare and medical devices, combining biology and medicine with engineering.'
  },
  {
    id: 12,
    name: 'Bachelor of Science in Robotics',
    duration: '4 Years',
    specializations: [
      'Autonomous Systems',
      'Robot Dynamics',
      'Computer Vision',
      'Human-Robot Interaction',
      'Robotic Manipulation',
      'Swarm Robotics',
      'Medical Robotics',
      'Industrial Robotics',
      'Field Robotics',
      'Robot Learning',
      'Soft Robotics',
      'Robot Perception'
    ],
    university: 'Carnegie Mellon University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Interdisciplinary program focusing on the design, construction, and application of robots and intelligent systems.'
  }
];

export interface GraduateCourse {
  id: number;
  name: string;
  duration: string;
  specializations: string[];
  university: string;
  country: string;
  image: string;
  description: string;
}

export interface PhDCourse {
  id: number;
  name: string;
  duration: string;
  specializations: string[];
  university: string;
  country: string;
  image: string;
  description: string;
}

export const graduateCourses: GraduateCourse[] = [
  {
    id: 1,
    name: 'Master of Business Administration',
    duration: '2 Years',
    specializations: [
      'Finance',
      'Marketing',
      'Entrepreneurship',
      'International Business',
      'Business Analytics',
      'Supply Chain Management',
      'Human Resources',
      'Healthcare Management',
      'Technology Management',
      'Sustainability',
      'Consulting',
      'Leadership'
    ],
    university: 'Harvard Business School',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive MBA program focusing on leadership, strategy, and global business management.'
  },
  {
    id: 2,
    name: 'Master of Science in Computer Science',
    duration: '2 Years',
    specializations: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Cybersecurity',
      'Software Engineering',
      'Computer Systems',
      'Human-Computer Interaction',
      'Robotics',
      'Cloud Computing',
      'Computer Vision',
      'Natural Language Processing',
      'Algorithms'
    ],
    university: 'Stanford University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Advanced study in computer science with a focus on cutting-edge technologies and research.'
  },
  {
    id: 3,
    name: 'Master of Public Health',
    duration: '2 Years',
    specializations: [
      'Epidemiology',
      'Biostatistics',
      'Health Policy',
      'Global Health',
      'Environmental Health',
      'Health Economics',
      'Community Health',
      'Health Promotion',
      'Health Services Administration',
      'Occupational Health',
      'Maternal and Child Health',
      'Infectious Diseases'
    ],
    university: 'Johns Hopkins University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive public health program focusing on disease prevention and health promotion.'
  },
  {
    id: 4,
    name: 'Master of Science in Data Science',
    duration: '1.5-2 Years',
    specializations: [
      'Machine Learning Engineering',
      'Big Data Analytics',
      'Business Intelligence',
      'Statistical Analysis',
      'Data Visualization',
      'Natural Language Processing',
      'Predictive Modeling',
      'Data Engineering',
      'Deep Learning',
      'Data Mining',
      'AI in Data Science',
      'Cloud Computing for Data'
    ],
    university: 'Massachusetts Institute of Technology',
    country: 'United States',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Interdisciplinary program combining computer science, statistics, and domain expertise to extract insights from complex data.'
  },
  {
    id: 5,
    name: 'Master of Science in Artificial Intelligence',
    duration: '2 Years',
    specializations: [
      'Machine Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Robotics',
      'AI Ethics',
      'Reinforcement Learning',
      'Neural Networks',
      'AI for Healthcare',
      'Autonomous Systems',
      'AI and Society',
      'Deep Learning',
      'AI in Finance'
    ],
    university: 'Carnegie Mellon University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Cutting-edge program focusing on the development and application of artificial intelligence technologies.'
  },
  {
    id: 6,
    name: 'Master of Science in Environmental Engineering',
    duration: '2 Years',
    specializations: [
      'Water Resources Management',
      'Air Quality Control',
      'Waste Management',
      'Sustainable Energy',
      'Environmental Policy',
      'Climate Change',
      'Ecological Engineering',
      'Environmental Chemistry',
      'Hazardous Waste Management',
      'Environmental Impact Assessment',
      'Renewable Energy Systems',
      'Water Treatment Technologies'
    ],
    university: 'ETH Zurich',
    country: 'Switzerland',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Program focused on developing sustainable solutions for environmental challenges through engineering principles.'
  },
  {
    id: 7,
    name: 'Master of Science in Finance',
    duration: '1-2 Years',
    specializations: [
      'Investment Management',
      'Corporate Finance',
      'Financial Engineering',
      'Risk Management',
      'FinTech',
      'Behavioral Finance',
      'Quantitative Finance',
      'Private Equity',
      'Financial Analysis',
      'International Finance',
      'Real Estate Finance',
      'Sustainable Finance'
    ],
    university: 'London School of Economics',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Comprehensive finance program preparing students for careers in investment banking, asset management, and corporate finance.'
  },
  {
    id: 8,
    name: 'Master of Science in Biomedical Engineering',
    duration: '2 Years',
    specializations: [
      'Biomechanics',
      'Biomaterials',
      'Medical Imaging',
      'Tissue Engineering',
      'Neural Engineering',
      'Prosthetics',
      'Medical Device Design',
      'Rehabilitation Engineering',
      'Biomedical Instrumentation',
      'Clinical Engineering',
      'Cellular Engineering',
      'Biomedical Data Science'
    ],
    university: 'Johns Hopkins University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Program that applies engineering principles to healthcare and medical devices, combining biology and medicine with engineering.'
  }
];

export const phdCourses: PhDCourse[] = [
  {
    id: 1,
    name: 'PhD in Neuroscience',
    duration: '4-6 Years',
    specializations: [
      'Cognitive Neuroscience',
      'Molecular Neuroscience',
      'Behavioral Neuroscience',
      'Computational Neuroscience',
      'Clinical Neuroscience',
      'Developmental Neuroscience',
      'Neuropharmacology',
      'Neuroimaging',
      'Neurological Disorders',
      'Neurobiology',
      'Systems Neuroscience',
      'Neuroengineering'
    ],
    university: 'Massachusetts Institute of Technology',
    country: 'United States',
    image: 'https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Research-intensive doctoral program focused on understanding the nervous system and brain function.'
  },
  {
    id: 2,
    name: 'PhD in Artificial Intelligence',
    duration: '4-6 Years',
    specializations: [
      'Machine Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Robotics',
      'AI Ethics',
      'Reinforcement Learning',
      'Neural Networks',
      'AI for Healthcare',
      'Autonomous Systems',
      'AI and Society',
      'Deep Learning',
      'AI in Finance'
    ],
    university: 'Carnegie Mellon University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Cutting-edge research program in artificial intelligence and machine learning.'
  },
  {
    id: 3,
    name: 'PhD in Environmental Science',
    duration: '4-6 Years',
    specializations: [
      'Climate Change',
      'Conservation Biology',
      'Environmental Policy',
      'Ecosystem Science',
      'Environmental Chemistry',
      'Water Resources',
      'Sustainability Science',
      'Environmental Health',
      'Marine Science',
      'Atmospheric Science',
      'Environmental Economics',
      'Renewable Energy'
    ],
    university: 'ETH Zurich',
    country: 'Switzerland',
    image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Interdisciplinary research program addressing global environmental challenges.'
  },
  {
    id: 4,
    name: 'PhD in Computer Science',
    duration: '4-6 Years',
    specializations: [
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Systems',
      'Human-Computer Interaction',
      'Theoretical Computer Science',
      'Computer Graphics',
      'Databases',
      'Computer Networks',
      'Programming Languages',
      'Computer Security',
      'Software Engineering',
      'Bioinformatics'
    ],
    university: 'Stanford University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Doctoral program fostering innovative research across all areas of computer science.'
  },
  {
    id: 5,
    name: 'PhD in Economics',
    duration: '5-6 Years',
    specializations: [
      'Microeconomics',
      'Macroeconomics',
      'Econometrics',
      'Development Economics',
      'Labor Economics',
      'Public Economics',
      'International Economics',
      'Financial Economics',
      'Behavioral Economics',
      'Industrial Organization',
      'Environmental Economics',
      'Health Economics'
    ],
    university: 'University of Chicago',
    country: 'United States',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Rigorous doctoral program preparing students for research careers in economics.'
  },
  {
    id: 6,
    name: 'PhD in Biomedical Engineering',
    duration: '4-6 Years',
    specializations: [
      'Biomechanics',
      'Biomaterials',
      'Medical Imaging',
      'Tissue Engineering',
      'Neural Engineering',
      'Biomedical Instrumentation',
      'Cellular Engineering',
      'Biomedical Data Science',
      'Drug Delivery Systems',
      'Rehabilitation Engineering',
      'Computational Biology',
      'Medical Robotics'
    ],
    university: 'Johns Hopkins University',
    country: 'United States',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Interdisciplinary program at the intersection of engineering, biology, and medicine.'
  },
  {
    id: 7,
    name: 'PhD in Physics',
    duration: '5-6 Years',
    specializations: [
      'Quantum Mechanics',
      'Theoretical Physics',
      'Particle Physics',
      'Astrophysics',
      'Condensed Matter Physics',
      'Atomic, Molecular, and Optical Physics',
      'Plasma Physics',
      'Biophysics',
      'Cosmology',
      'Quantum Computing',
      'Statistical Mechanics',
      'High Energy Physics'
    ],
    university: 'California Institute of Technology',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Research-focused doctoral program exploring the fundamental laws of the universe.'
  },
  {
    id: 8,
    name: 'PhD in Business Administration',
    duration: '4-5 Years',
    specializations: [
      'Accounting',
      'Finance',
      'Marketing',
      'Organizational Behavior',
      'Strategy',
      'Operations Management',
      'Information Systems',
      'Entrepreneurship',
      'International Business',
      'Business Analytics',
      'Supply Chain Management',
      'Management Science'
    ],
    university: 'Harvard Business School',
    country: 'United States',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Doctoral program preparing scholars for academic careers in business research and education.'
  }
];

export const programTypes = [
  { id: 'diploma', name: 'Diploma' },
  { id: 'undergraduate', name: 'Undergraduate' },
  { id: 'graduate', name: 'Graduate' },
  { id: 'phd', name: 'PhD' }
];
