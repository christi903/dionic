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
    title: 'Bachelor of Arts Program',
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    type: 'undergraduate',
    value: '$35,000 per year',
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
    value: '$32,000 per year',
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
    value: '$28,000 per year',
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
    value: '$30,000 per year',
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
    value: '$25,000 per year',
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
    value: '$38,000 per year',
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
    value: '$42,000 per year',
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
    value: '$45,000 per year',
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
    value: '$26,000 per year',
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
    value: '$33,000 per year',
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
    value: '$31,000 per year',
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
    value: '$27,000 per year',
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
    value: '$29,000 per year',
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
    value: '$34,000 per year',
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
    value: '$36,000 per year',
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
  cost: string;
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
    cost: '$18,000 per year',
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
    cost: '$16,000 per year',
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
    cost: '$22,000 per year',
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
    cost: '$14,000 per year',
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
    cost: '$15,000 per year',
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
    cost: '$19,000 per year',
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
    cost: '$25,000 per year',
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
    cost: '$12,000 per year',
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
    cost: '$8,000 per year',
    specializations: ['Basic Nursing Care', 'Maternal Health', 'Community Outreach', 'First Aid'],
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
