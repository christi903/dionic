export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  // Hospital Equipment & Devices (15 items)
  {
    id: 1,
    name: 'Surgical Scalpel Set',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Professional surgical scalpel set with stainless steel handles and disposable blades.',
    features: ['Stainless steel handles', 'Disposable blades', 'Ergonomic design', 'Sterile packaging']
  },
  {
    id: 2,
    name: 'Patient Monitor',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Multi-parameter patient monitor with ECG, SpO2, blood pressure, and temperature monitoring.',
    features: ['Multi-parameter monitoring', 'Alarm system', 'Data storage', 'Wireless connectivity']
  },
  {
    id: 3,
    name: 'Digital Stethoscope',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Advanced digital stethoscope with noise cancellation and recording capabilities.',
    features: ['Bluetooth connectivity', 'Noise reduction', 'Audio recording', 'Amplification']
  },
  {
    id: 4,
    name: 'Ultrasound Machine',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Portable ultrasound machine with high-resolution imaging for diagnostic procedures.',
    features: ['High resolution imaging', 'Portable design', 'Multiple probes', 'Real-time imaging']
  },
  {
    id: 5,
    name: 'Electrocautery Unit',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'High-frequency electrocautery unit for cutting and coagulation during surgery.',
    features: ['Dual functionality', 'Safety features', 'Precise control', 'Foot pedal operation']
  },
  {
    id: 6,
    name: 'Surgical Forceps Set',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Complete set of surgical forceps for tissue handling and manipulation.',
    features: ['Various sizes', 'Stainless steel', 'Autoclave safe', 'Precision tips']
  },
  {
    id: 7,
    name: 'Anesthesia Machine',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Advanced anesthesia delivery system with ventilator and monitoring capabilities.',
    features: ['Integrated ventilator', 'Gas monitoring', 'Safety alarms', 'Touch screen interface']
  },
  {
    id: 8,
    name: 'X-Ray Machine',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Digital X-ray system for high-quality diagnostic imaging with low radiation exposure.',
    features: ['Digital imaging', 'Low radiation', 'Quick processing', 'PACS compatible']
  },
  {
    id: 9,
    name: 'Surgical Retractors',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Self-retaining surgical retractors for maintaining surgical site exposure.',
    features: ['Self-retaining', 'Adjustable tension', 'Stainless steel', 'Various sizes']
  },
  {
    id: 10,
    name: 'Infusion Pump',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Programmable infusion pump for accurate medication and fluid delivery.',
    features: ['Programmable rates', 'Safety alarms', 'Battery backup', 'Drug library']
  },
  {
    id: 11,
    name: 'ECG Machine',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&h=300&q=80',
    description: '12-lead ECG machine for cardiac rhythm analysis and diagnosis.',
    features: ['12-lead capability', 'Automatic analysis', 'Thermal printer', 'Data storage']
  },
  {
    id: 12,
    name: 'Surgical Scissors Set',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Professional surgical scissors set for cutting tissues and sutures.',
    features: ['Sharp blades', 'Ergonomic handles', 'Various types', 'Autoclave safe']
  },
  {
    id: 13,
    name: 'Pulse Oximeter',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Fingertip pulse oximeter for monitoring oxygen saturation and pulse rate.',
    features: ['LED display', 'Battery operated', 'Automatic shut-off', 'Accuracy ±2%']
  },
  {
    id: 14,
    name: 'Surgical Suction Unit',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'High-performance surgical suction unit for fluid and debris removal.',
    features: ['High suction power', 'Quiet operation', 'Easy maintenance', 'Overflow protection']
  },
  {
    id: 15,
    name: 'Blood Pressure Monitor',
    category: 'hospital-equipment',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Automatic digital blood pressure monitor with large LCD display.',
    features: ['Digital display', 'Memory storage', 'Irregular heartbeat detection', 'Cuff size indicator']
  },

  // Consumables & Disposables (15 items)
  {
    id: 16,
    name: 'Disposable Syringes',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Sterile disposable syringes in various sizes for medical injections.',
    features: ['Sterile packaging', 'Luer lock tip', 'Clear barrel', 'Various sizes available']
  },
  {
    id: 17,
    name: 'Nitrile Gloves',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Powder-free nitrile examination gloves for medical procedures.',
    features: ['Powder-free', 'Latex-free', 'Textured fingertips', 'Chemical resistant']
  },
  {
    id: 18,
    name: 'Surgical Masks',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&h=300&q=80',
    description: '3-ply surgical masks with ear loops for infection control.',
    features: ['3-layer protection', 'Fluid resistant', 'Comfortable ear loops', 'Breathable material']
  },
  {
    id: 19,
    name: 'Gauze Pads',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1603398938235-b8b9c9e8f7a3?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Sterile gauze pads for wound dressing and cleaning.',
    features: ['Sterile packaging', 'High absorbency', 'Non-adherent', 'Various sizes']
  },
  {
    id: 20,
    name: 'IV Cannulas',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Sterile intravenous cannulas for fluid and medication administration.',
    features: ['Sharp needle', 'Smooth insertion', 'Color-coded', 'Safety cap']
  },
  {
    id: 21,
    name: 'Alcohol Swabs',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Pre-saturated alcohol swabs for skin disinfection.',
    features: ['70% isopropyl alcohol', 'Individual packaging', 'Quick drying', 'Lint-free']
  },
  {
    id: 22,
    name: 'Surgical Drapes',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Sterile surgical drapes for maintaining sterile field during procedures.',
    features: ['Sterile barrier', 'Fluid resistant', 'Easy positioning', 'Adhesive strips']
  },
  {
    id: 23,
    name: 'Bandages',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Elastic bandages for wound support and compression.',
    features: ['Elastic material', 'Self-adhesive', 'Breathable', 'Various widths']
  },
  {
    id: 24,
    name: 'Catheter Tubes',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Sterile urinary catheters for bladder drainage.',
    features: ['Sterile packaging', 'Smooth insertion', 'Drainage bag included', 'Various sizes']
  },
  {
    id: 25,
    name: 'Suture Materials',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Surgical sutures for wound closure in various materials and sizes.',
    features: ['Various materials', 'Absorbable/non-absorbable', 'Precision needles', 'Sterile packaging']
  },
  {
    id: 26,
    name: 'Specimen Containers',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Sterile containers for collecting biological specimens.',
    features: ['Leak-proof seal', 'Clear labeling area', 'Sterile interior', 'Various volumes']
  },
  {
    id: 27,
    name: 'Disposable Gowns',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Disposable isolation gowns for infection control.',
    features: ['Fluid resistant', 'Comfortable fit', 'Tie closures', 'Full coverage']
  },
  {
    id: 28,
    name: 'Lancets',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Sterile disposable lancets for blood sampling.',
    features: ['Sharp point', 'Safety mechanism', 'Sterile packaging', 'Various gauges']
  },
  {
    id: 29,
    name: 'Oxygen Masks',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Disposable oxygen masks for respiratory support.',
    features: ['Clear plastic', 'Adjustable strap', 'Oxygen tubing', 'Various sizes']
  },
  {
    id: 30,
    name: 'Thermometer Covers',
    category: 'consumables',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&h=300&q=80',
    description: 'Disposable probe covers for digital thermometers.',
    features: ['Hygienic protection', 'Easy application', 'Accurate readings', 'Bulk packaging']
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'hospital-equipment', name: 'Hospital Equipment & Devices' },
  { id: 'consumables', name: 'Consumables & Disposables' },
  { id: 'laboratory', name: 'Laboratory Reagent & Supplies' },
  { id: 'emergency', name: 'Emergency & Rescue Equipment' },
  { id: 'homecare', name: 'Homecare Medical Devices' },
  { id: 'additional-supplies', name: 'Additional Medical Supplies' },
  { id: 'advanced-equipment', name: 'Advanced Medical Equipment' }
];
