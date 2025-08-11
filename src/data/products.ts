export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  // Hospital Equipment & Devices
  {
    id: 1,
    name: 'Patient Monitor',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Advanced multi-parameter patient monitoring system for continuous vital signs monitoring in hospitals and ICUs.',
    features: [
      'ECG, SpO2, NIBP, Temperature monitoring',
      '15-inch high-resolution color display',
      'Wireless connectivity and data storage',
      'Alarm management system',
      'Battery backup up to 4 hours'
    ]
  },
  {
    id: 2,
    name: 'Ventilator Machine',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'ICU ventilator providing comprehensive respiratory support for critically ill patients with advanced ventilation modes.',
    features: [
      'Volume and pressure control modes',
      'PEEP and CPAP capabilities',
      'Integrated nebulizer system',
      'Touch screen interface',
      'Real-time waveform display'
    ]
  },
  {
    id: 3,
    name: 'Defibrillator',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Automated external defibrillator with manual override capabilities for emergency cardiac care and resuscitation.',
    features: [
      'Biphasic waveform technology',
      'AED and manual modes',
      'ECG monitoring capability',
      'Voice prompts and visual indicators',
      'Rechargeable battery system'
    ]
  },
  {
    id: 4,
    name: 'Ultrasound Machine',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Portable ultrasound system with multiple transducers for diagnostic imaging across various medical specialties.',
    features: [
      'Multiple frequency transducers',
      'Doppler imaging capabilities',
      '21-inch LED monitor',
      'Image storage and DICOM connectivity',
      'Portable design with wheels'
    ]
  },
  {
    id: 5,
    name: 'Infusion Pump',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Smart infusion pump system for accurate medication delivery with safety features and dose error reduction.',
    features: [
      'Volumetric and syringe pump modes',
      'Drug library with dose limits',
      'Wireless connectivity',
      'Anti-free flow protection',
      'Battery life up to 8 hours'
    ]
  },
  {
    id: 6,
    name: 'X-Ray Machine',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Digital radiography system providing high-quality diagnostic imaging with reduced radiation exposure.',
    features: [
      'Digital detector technology',
      'Automatic exposure control',
      'DICOM compatibility',
      'Low radiation dose',
      'Motorized positioning system'
    ]
  },
  {
    id: 7,
    name: 'Anesthesia Machine',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386444/pexels-photo-4386444.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Advanced anesthesia workstation with integrated ventilator and monitoring for surgical procedures.',
    features: [
      'Integrated ventilator system',
      'Vaporizer for anesthetic agents',
      'Patient monitoring integration',
      'Gas scavenging system',
      'Electronic flow control'
    ]
  },
  {
    id: 8,
    name: 'Hospital Bed',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386455/pexels-photo-4386455.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Electric hospital bed with multiple positioning options and safety features for patient comfort and care.',
    features: [
      'Electric height adjustment',
      'Trendelenburg positioning',
      'Side rails with controls',
      'Mattress platform sections',
      'Central locking caster system'
    ]
  },
  {
    id: 9,
    name: 'Surgical Light',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386401/pexels-photo-4386401.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'LED surgical lighting system providing shadow-free illumination for operating rooms and surgical procedures.',
    features: [
      'LED technology with long lifespan',
      'Shadow-free illumination',
      'Adjustable light intensity',
      'Sterile handle controls',
      'Ceiling or mobile mount options'
    ]
  },
  {
    id: 10,
    name: 'Autoclave Sterilizer',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386412/pexels-photo-4386412.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Steam sterilization system for medical instruments and equipment with automated cycles and validation.',
    features: [
      'Pre-vacuum and gravity cycles',
      'Temperature and pressure monitoring',
      'Automatic door locking',
      'Cycle documentation system',
      'Multiple tray configurations'
    ]
  },
  {
    id: 11,
    name: 'ECG Machine',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: '12-lead electrocardiograph machine for cardiac diagnosis with interpretation software and data management.',
    features: [
      '12-lead ECG acquisition',
      'Automatic interpretation',
      'Thermal printer included',
      'Data storage and connectivity',
      'Portable design with handle'
    ]
  },
  {
    id: 12,
    name: 'Oxygen Concentrator',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4386441/pexels-photo-4386441.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
    description: 'Medical oxygen concentrator providing continuous oxygen therapy for patients with respiratory conditions.',
    features: [
      'Continuous oxygen delivery up to 10L/min',
      'Oxygen purity indicator',
      'Low maintenance design',
      'Quiet operation under 45dB',
      'Alarm system for safety monitoring'
    ]
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'hospital-equipment', name: 'Hospital Equipment & Devices' }
];
