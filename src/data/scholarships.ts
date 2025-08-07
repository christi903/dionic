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
  {
    id: 1,
    title: 'Engineering Excellence Program',
    university: 'Technical University of Munich',
    country: 'Germany',
    type: 'undergraduate',
    value: 'Full Tuition + Living Allowance',
    duration: '4 Years',
    deadline: 'March 31, 2024',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Comprehensive scholarship for Tanzanian students pursuing engineering degrees.',
    requirements: ['Minimum GPA 3.5', 'IELTS 6.5+', 'Mathematics & Physics background']
  },
  {
    id: 2,
    title: 'Global Health Initiative',
    university: 'University of Edinburgh',
    country: 'United Kingdom',
    type: 'graduate',
    value: '£25,000 per year',
    duration: '2 Years',
    deadline: 'April 15, 2024',
    image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Master\'s program focused on global health challenges and solutions.',
    requirements: ['Bachelor\'s degree', 'IELTS 7.0+', 'Health sciences background']
  },
  {
    id: 3,
    title: 'Business Leadership Program',
    university: 'INSEAD Business School',
    country: 'France',
    type: 'graduate',
    value: '€35,000 scholarship',
    duration: '1 Year',
    deadline: 'May 1, 2024',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'MBA program designed for emerging African business leaders.',
    requirements: ['3+ years work experience', 'GMAT 650+', 'Leadership experience']
  },
  {
    id: 4,
    title: 'Agricultural Innovation Grant',
    university: 'Wageningen University',
    country: 'Netherlands',
    type: 'undergraduate',
    value: 'Full Scholarship',
    duration: '3 Years',
    deadline: 'February 28, 2024',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Focus on sustainable agriculture and food security for African students.',
    requirements: ['Science background', 'IELTS 6.0+', 'Agriculture interest']
  },
  {
    id: 5,
    title: 'Technology & Innovation PhD',
    university: 'MIT',
    country: 'United States',
    type: 'phd',
    value: '$50,000 stipend',
    duration: '5 Years',
    deadline: 'December 15, 2023',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Doctoral research program in cutting-edge technology fields.',
    requirements: ['Master\'s degree', 'GRE scores', 'Research experience']
  },
  {
    id: 6,
    title: 'Arts & Culture Exchange',
    university: 'University of Sydney',
    country: 'Australia',
    type: 'undergraduate',
    value: 'AUD 30,000 per year',
    duration: '3 Years',
    deadline: 'March 1, 2024',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Creative arts program celebrating African culture and global perspectives.',
    requirements: ['Portfolio submission', 'IELTS 6.5+', 'Creative background']
  }
];

export const programTypes = [
  { id: 'undergraduate', name: 'Undergraduate' },
  { id: 'graduate', name: 'Graduate' },
  { id: 'phd', name: 'PhD' }
];
