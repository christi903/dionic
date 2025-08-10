import { Product } from './products';

// Additional products for the remaining categories with unique IDs
export const additionalProducts: Product[] = [
  // Additional Consumables & Disposables (15 items)
  {
    id: 76,
    name: 'Medical Tape',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Hypoallergenic medical tape for securing dressings and medical devices.',
    features: ['Hypoallergenic', 'Breathable', 'Easy removal', 'Various widths']
  },
  {
    id: 77,
    name: 'Cotton Balls',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1603398938235-b8b9c9e8f7a3?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Sterile cotton balls for wound cleaning and medication application.',
    features: ['Sterile packaging', 'High absorbency', 'Soft texture', 'Bulk packaging']
  },
  {
    id: 78,
    name: 'Medical Scissors',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Disposable medical scissors for cutting bandages and medical materials.',
    features: ['Sharp blades', 'Safety tips', 'Single-use', 'Sterile packaging']
  },
  {
    id: 79,
    name: 'Medical Tweezers',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Precision medical tweezers for removing splinters and foreign objects.',
    features: ['Fine tips', 'Stainless steel', 'Sterile packaging', 'Various sizes']
  },
  {
    id: 80,
    name: 'Medical Sponges',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1603398938235-b8b9c9e8f7a3?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Sterile medical sponges for surgical procedures and wound care.',
    features: ['Sterile packaging', 'High absorbency', 'Non-linting', 'Various sizes']
  },

  // Additional Laboratory Supplies (15 items)
  {
    id: 81,
    name: 'Microscope Cover Slips',
    category: 'laboratory',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Thin glass cover slips for microscope slide preparation.',
    features: ['Optical quality', 'Standard thickness', 'Pre-cleaned', 'Bulk packaging']
  },
  {
    id: 82,
    name: 'Laboratory Timers',
    category: 'laboratory',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Precision laboratory timers for accurate experiment timing.',
    features: ['Digital display', 'Multiple timers', 'Battery powered', 'Audible alarms']
  },
  {
    id: 83,
    name: 'Laboratory Markers',
    category: 'laboratory',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Permanent markers for labeling laboratory equipment and samples.',
    features: ['Permanent ink', 'Fine tip', 'Chemical resistant', 'Various colors']
  },
  {
    id: 84,
    name: 'Laboratory Notebooks',
    category: 'laboratory',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Bound laboratory notebooks for recording experiments and data.',
    features: ['Bound pages', 'Numbered pages', 'Acid-free paper', 'Professional format']
  },
  {
    id: 85,
    name: 'Laboratory Pens',
    category: 'laboratory',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Specialized pens for laboratory documentation and labeling.',
    features: ['Permanent ink', 'Fine point', 'Chemical resistant', 'Professional quality']
  },

  // Additional Emergency Equipment (15 items)
  {
    id: 86,
    name: 'Emergency Lighting',
    category: 'emergency',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Portable emergency lighting for power outage situations.',
    features: ['LED technology', 'Battery powered', 'Multiple modes', 'Durable construction']
  },
  {
    id: 87,
    name: 'Emergency Communication Device',
    category: 'emergency',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Emergency communication device for crisis situations.',
    features: ['Satellite connectivity', 'GPS tracking', 'Emergency alerts', 'Long battery life']
  },
  {
    id: 88,
    name: 'Emergency Water Supply',
    category: 'emergency',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Emergency water supply for disaster preparedness.',
    features: ['Long shelf life', 'Portable containers', 'Purification tablets', 'Bulk packaging']
  },
  {
    id: 89,
    name: 'Emergency Food Rations',
    category: 'emergency',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Emergency food rations for disaster survival situations.',
    features: ['Long shelf life', 'Nutrient dense', 'Easy preparation', 'Compact packaging']
  },
  {
    id: 90,
    name: 'Emergency Shelter Kit',
    category: 'emergency',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Portable emergency shelter for temporary protection.',
    features: ['Lightweight', 'Quick setup', 'Weather resistant', 'Compact storage']
  },

  // Additional Homecare Devices (15 items)
  {
    id: 91,
    name: 'Home Medical Scale',
    category: 'homecare',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Digital medical scale for accurate weight monitoring.',
    features: ['Digital display', 'High capacity', 'Memory storage', 'Easy to read']
  },
  {
    id: 92,
    name: 'Home Medical Alert System',
    category: 'homecare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Personal emergency response system for home safety.',
    features: ['24/7 monitoring', 'GPS tracking', 'Fall detection', 'Two-way communication']
  },
  {
    id: 93,
    name: 'Home Medical Cart',
    category: 'homecare',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Mobile medical cart for organizing home healthcare supplies.',
    features: ['Wheeled design', 'Multiple drawers', 'Locking mechanism', 'Easy mobility']
  },
  {
    id: 94,
    name: 'Home Medical Waste Container',
    category: 'homecare',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Safe medical waste disposal container for home use.',
    features: ['Puncture resistant', 'Locking lid', 'Biohazard labeling', 'Easy disposal']
  },
  {
    id: 95,
    name: 'Home Medical Storage Cabinet',
    category: 'homecare',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Secure storage cabinet for medical supplies and medications.',
    features: ['Locking doors', 'Adjustable shelves', 'Child safety', 'Organized storage']
  }
];
