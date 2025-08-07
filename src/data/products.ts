export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Digital Stethoscope',
    category: 'diagnostic',
    price: 'TSh 850,000',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Advanced digital stethoscope with noise cancellation and recording capabilities.',
    features: ['Bluetooth connectivity', 'Noise reduction', 'Audio recording']
  },
  {
    id: 2,
    name: 'Blood Pressure Monitor',
    category: 'diagnostic',
    price: 'TSh 180,000',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Accurate digital blood pressure monitor with large LCD display.',
    features: ['Digital display', 'Memory storage', 'Irregular heartbeat detection']
  },
  {
    id: 3,
    name: 'Surgical Instruments Set',
    category: 'surgical',
    price: 'TSh 1,200,000',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Complete surgical instrument set made from high-grade stainless steel.',
    features: ['Stainless steel', 'Autoclave safe', 'Complete set']
  },
  {
    id: 4,
    name: 'Patient Monitor',
    category: 'monitoring',
    price: 'TSh 3,500,000',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Multi-parameter patient monitor with ECG, SpO2, and blood pressure.',
    features: ['Multi-parameter', 'Alarm system', 'Data storage']
  },
  {
    id: 5,
    name: 'Ultrasound Machine',
    category: 'imaging',
    price: 'TSh 8,500,000',
    image: 'https://images.pexels.com/photos/8376334/pexels-photo-8376334.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable ultrasound machine with high-resolution imaging capabilities.',
    features: ['High resolution', 'Portable design', 'Multiple probes']
  },
  {
    id: 6,
    name: 'Defibrillator',
    category: 'emergency',
    price: 'TSh 4,200,000',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Automated external defibrillator with voice prompts and LCD display.',
    features: ['Voice prompts', 'LCD display', 'Automatic analysis']
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'diagnostic', name: 'Diagnostic Equipment' },
  { id: 'surgical', name: 'Surgical Instruments' },
  { id: 'monitoring', name: 'Patient Monitoring' },
  { id: 'imaging', name: 'Imaging Equipment' },
  { id: 'emergency', name: 'Emergency Equipment' }
];
