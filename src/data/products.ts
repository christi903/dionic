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
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Precision surgical scalpels with disposable blades for various surgical procedures.',
    features: ['Stainless steel handle', 'Disposable blades', 'Ergonomic design', 'Sterile packaging']
  },
  {
    id: 2,
    name: 'Patient Monitor',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Multi-parameter patient monitor with ECG, SpO2, blood pressure, and temperature monitoring.',
    features: ['Multi-parameter monitoring', 'Alarm system', 'Data storage', 'Wireless connectivity']
  },
  {
    id: 3,
    name: 'Digital Stethoscope',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Advanced digital stethoscope with noise cancellation and recording capabilities.',
    features: ['Bluetooth connectivity', 'Noise reduction', 'Audio recording', 'Amplification']
  },
  {
    id: 4,
    name: 'Ultrasound Machine',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/8376334/pexels-photo-8376334.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable ultrasound machine with high-resolution imaging for diagnostic procedures.',
    features: ['High resolution imaging', 'Portable design', 'Multiple probes', 'Real-time imaging']
  },
  {
    id: 5,
    name: 'Electrocautery Unit',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'High-frequency electrocautery unit for cutting and coagulation during surgery.',
    features: ['Dual functionality', 'Safety features', 'Precise control', 'Foot pedal operation']
  },
  {
    id: 6,
    name: 'Surgical Forceps Set',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Complete set of surgical forceps for tissue handling and manipulation.',
    features: ['Various sizes', 'Stainless steel', 'Autoclave safe', 'Precision tips']
  },
  {
    id: 7,
    name: 'Anesthesia Machine',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Advanced anesthesia delivery system with ventilator and monitoring capabilities.',
    features: ['Integrated ventilator', 'Gas monitoring', 'Safety alarms', 'Touch screen interface']
  },
  {
    id: 8,
    name: 'X-Ray Machine',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/8376334/pexels-photo-8376334.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Digital X-ray system for high-quality diagnostic imaging with low radiation exposure.',
    features: ['Digital imaging', 'Low radiation', 'Quick processing', 'PACS compatible']
  },
  {
    id: 9,
    name: 'Surgical Retractors',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Self-retaining surgical retractors for maintaining surgical site exposure.',
    features: ['Self-retaining', 'Adjustable tension', 'Stainless steel', 'Various sizes']
  },
  {
    id: 10,
    name: 'Infusion Pump',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Programmable infusion pump for accurate medication and fluid delivery.',
    features: ['Programmable rates', 'Safety alarms', 'Battery backup', 'Drug library']
  },
  {
    id: 11,
    name: 'ECG Machine',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: '12-lead ECG machine for cardiac rhythm analysis and diagnosis.',
    features: ['12-lead capability', 'Automatic analysis', 'Thermal printer', 'Data storage']
  },
  {
    id: 12,
    name: 'Surgical Scissors Set',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Professional surgical scissors set for cutting tissues and sutures.',
    features: ['Sharp blades', 'Ergonomic handles', 'Various types', 'Autoclave safe']
  },
  {
    id: 13,
    name: 'Pulse Oximeter',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Fingertip pulse oximeter for monitoring oxygen saturation and pulse rate.',
    features: ['LED display', 'Battery operated', 'Automatic shut-off', 'Accuracy ±2%']
  },
  {
    id: 14,
    name: 'Surgical Suction Unit',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'High-performance surgical suction unit for fluid and debris removal.',
    features: ['High suction power', 'Quiet operation', 'Easy maintenance', 'Overflow protection']
  },
  {
    id: 15,
    name: 'Blood Pressure Monitor',
    category: 'hospital-equipment',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Automatic digital blood pressure monitor with large LCD display.',
    features: ['Digital display', 'Memory storage', 'Irregular heartbeat detection', 'Cuff size indicator']
  },

  // Consumables & Disposables (15 items)
  {
    id: 16,
    name: 'Disposable Syringes',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile disposable syringes in various sizes for medical injections.',
    features: ['Sterile packaging', 'Luer lock tip', 'Clear barrel', 'Various sizes available']
  },
  {
    id: 17,
    name: 'Nitrile Gloves',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Powder-free nitrile examination gloves for medical procedures.',
    features: ['Powder-free', 'Latex-free', 'Textured fingertips', 'Chemical resistant']
  },
  {
    id: 18,
    name: 'Surgical Masks',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: '3-ply surgical masks with ear loops for infection control.',
    features: ['3-layer protection', 'Fluid resistant', 'Comfortable ear loops', 'Breathable material']
  },
  {
    id: 19,
    name: 'Gauze Pads',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile gauze pads for wound dressing and cleaning.',
    features: ['Sterile packaging', 'High absorbency', 'Non-adherent', 'Various sizes']
  },
  {
    id: 20,
    name: 'IV Cannulas',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile intravenous cannulas for fluid and medication administration.',
    features: ['Sharp needle', 'Smooth insertion', 'Color-coded', 'Safety cap']
  },
  {
    id: 21,
    name: 'Alcohol Swabs',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Pre-saturated alcohol swabs for skin disinfection.',
    features: ['70% isopropyl alcohol', 'Individual packaging', 'Quick drying', 'Lint-free']
  },
  {
    id: 22,
    name: 'Surgical Drapes',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile surgical drapes for maintaining sterile field during procedures.',
    features: ['Sterile barrier', 'Fluid resistant', 'Easy positioning', 'Adhesive strips']
  },
  {
    id: 23,
    name: 'Bandages',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Elastic bandages for wound support and compression.',
    features: ['Elastic material', 'Self-adhesive', 'Breathable', 'Various widths']
  },
  {
    id: 24,
    name: 'Catheter Tubes',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile urinary catheters for bladder drainage.',
    features: ['Sterile packaging', 'Smooth insertion', 'Drainage bag included', 'Various sizes']
  },
  {
    id: 25,
    name: 'Suture Materials',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Surgical sutures for wound closure in various materials and sizes.',
    features: ['Various materials', 'Absorbable/non-absorbable', 'Precision needles', 'Sterile packaging']
  },
  {
    id: 26,
    name: 'Specimen Containers',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile containers for collecting biological specimens.',
    features: ['Leak-proof seal', 'Clear labeling area', 'Sterile interior', 'Various volumes']
  },
  {
    id: 27,
    name: 'Disposable Gowns',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Disposable isolation gowns for infection control.',
    features: ['Fluid resistant', 'Comfortable fit', 'Tie closures', 'Full coverage']
  },
  {
    id: 28,
    name: 'Lancets',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile disposable lancets for blood sampling.',
    features: ['Sharp point', 'Safety mechanism', 'Sterile packaging', 'Various gauges']
  },
  {
    id: 29,
    name: 'Oxygen Masks',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Disposable oxygen masks for respiratory support.',
    features: ['Clear plastic', 'Adjustable strap', 'Oxygen tubing', 'Various sizes']
  },
  {
    id: 30,
    name: 'Thermometer Covers',
    category: 'consumables',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Disposable probe covers for digital thermometers.',
    features: ['Hygienic protection', 'Easy application', 'Accurate readings', 'Bulk packaging']
  },

  // Laboratory Reagent & Supplies (15 items)
  {
    id: 31,
    name: 'Blood Collection Tubes',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Vacuum blood collection tubes with various additives for different tests.',
    features: ['Vacuum sealed', 'Color-coded caps', 'Various additives', 'Sterile interior']
  },
  {
    id: 32,
    name: 'Microscope Slides',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'High-quality glass microscope slides for specimen examination.',
    features: ['Optical glass', 'Ground edges', 'Pre-cleaned', 'Standard dimensions']
  },
  {
    id: 33,
    name: 'Pipette Tips',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile pipette tips for accurate liquid handling in laboratory work.',
    features: ['Sterile packaging', 'Various volumes', 'Universal fit', 'Low retention']
  },
  {
    id: 34,
    name: 'pH Test Strips',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'pH indicator strips for quick acidity/alkalinity testing.',
    features: ['Wide pH range', 'Color chart included', 'Quick results', 'Waterproof packaging']
  },
  {
    id: 35,
    name: 'Centrifuge Tubes',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'High-quality centrifuge tubes for sample separation and storage.',
    features: ['Chemical resistant', 'Graduated markings', 'Leak-proof caps', 'Various sizes']
  },
  {
    id: 36,
    name: 'Laboratory Reagents',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'High-purity chemical reagents for various laboratory analyses.',
    features: ['Analytical grade', 'Certified purity', 'Proper labeling', 'Safety data sheets']
  },
  {
    id: 37,
    name: 'Petri Dishes',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile petri dishes for microbiology culture work.',
    features: ['Sterile packaging', 'Clear plastic', 'Stackable design', 'Ventilation tabs']
  },
  {
    id: 38,
    name: 'Test Tube Racks',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Durable test tube racks for organizing laboratory samples.',
    features: ['Multiple tube sizes', 'Chemical resistant', 'Stable base', 'Easy cleaning']
  },
  {
    id: 39,
    name: 'Laboratory Glassware',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Borosilicate glass beakers, flasks, and measuring cylinders.',
    features: ['Borosilicate glass', 'Graduated markings', 'Heat resistant', 'Chemical inert']
  },
  {
    id: 40,
    name: 'Culture Media',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile culture media for bacterial and fungal growth.',
    features: ['Sterile preparation', 'Various formulations', 'Ready-to-use', 'Long shelf life']
  },
  {
    id: 41,
    name: 'Staining Reagents',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Histological and cytological staining reagents for microscopy.',
    features: ['High quality dyes', 'Consistent results', 'Ready-to-use', 'Proper storage']
  },
  {
    id: 42,
    name: 'Disposable Pipettes',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Sterile disposable pipettes for liquid transfer and measurement.',
    features: ['Sterile packaging', 'Graduated markings', 'Various volumes', 'Flexible material']
  },
  {
    id: 43,
    name: 'Laboratory Labels',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Waterproof laboratory labels for sample identification.',
    features: ['Waterproof', 'Chemical resistant', 'Strong adhesive', 'Various sizes']
  },
  {
    id: 44,
    name: 'Buffer Solutions',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Calibrated buffer solutions for pH meter calibration and testing.',
    features: ['Certified values', 'Temperature stable', 'Long shelf life', 'Various pH values']
  },
  {
    id: 45,
    name: 'Sample Vials',
    category: 'laboratory',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'High-quality sample vials for specimen storage and transport.',
    features: ['Leak-proof seals', 'Chemical resistant', 'Clear visibility', 'Various volumes']
  },

  // Emergency & Rescue Equipment (15 items)
  {
    id: 46,
    name: 'Defibrillator',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Automated external defibrillator for cardiac emergency response.',
    features: ['Voice prompts', 'Automatic analysis', 'Portable design', 'Long battery life']
  },
  {
    id: 47,
    name: 'Emergency Stretcher',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Lightweight emergency stretcher for patient transport.',
    features: ['Foldable design', 'Weight capacity 350lbs', 'Quick deployment', 'Durable materials']
  },
  {
    id: 48,
    name: 'Oxygen Tank',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable oxygen tank for respiratory emergency support.',
    features: ['High-pressure storage', 'Regulator included', 'Portable size', 'Safety valve']
  },
  {
    id: 49,
    name: 'Emergency Medical Kit',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Comprehensive first aid kit for emergency medical response.',
    features: ['Complete supplies', 'Organized compartments', 'Waterproof case', 'Emergency manual']
  },
  {
    id: 50,
    name: 'Spine Board',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Spinal immobilization board for trauma patient transport.',
    features: ['X-ray translucent', 'Multiple handholds', 'Easy cleaning', 'Patient restraints']
  },
  {
    id: 51,
    name: 'Emergency Ventilator',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable emergency ventilator for respiratory support.',
    features: ['Battery powered', 'Multiple modes', 'Alarm systems', 'Compact design']
  },
  {
    id: 52,
    name: 'Trauma Shears',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Heavy-duty emergency scissors for cutting clothing and materials.',
    features: ['Sharp blades', 'Safety tips', 'Comfortable grip', 'Corrosion resistant']
  },
  {
    id: 53,
    name: 'Emergency Blanket',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Thermal emergency blanket for hypothermia prevention.',
    features: ['Heat retention', 'Waterproof', 'Compact storage', 'Reflective material']
  },
  {
    id: 54,
    name: 'Cervical Collar',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Adjustable cervical collar for neck immobilization.',
    features: ['Adjustable sizing', 'Comfortable padding', 'Easy application', 'X-ray compatible']
  },
  {
    id: 55,
    name: 'Emergency Suction Unit',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable suction unit for airway clearance.',
    features: ['Battery powered', 'Variable suction', 'Quiet operation', 'Easy maintenance']
  },
  {
    id: 56,
    name: 'Splint Set',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Complete splint set for fracture immobilization.',
    features: ['Various sizes', 'Moldable material', 'Lightweight', 'Radiolucent']
  },
  {
    id: 57,
    name: 'Emergency Medications',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Essential emergency medications for critical care.',
    features: ['Long shelf life', 'Temperature stable', 'Pre-loaded syringes', 'Clear labeling']
  },
  {
    id: 58,
    name: 'Rescue Basket',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Patient extraction basket for rescue operations.',
    features: ['High strength', 'Patient restraints', 'Lifting points', 'Weather resistant']
  },
  {
    id: 59,
    name: 'Emergency Monitor',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable patient monitoring device for emergency care.',
    features: ['Multi-parameter', 'Battery powered', 'Data storage', 'Alarm functions']
  },
  {
    id: 60,
    name: 'Tourniquet',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Medical tourniquet for severe bleeding control.',
    features: ['Quick application', 'Effective pressure', 'Time indicator', 'Single-use design']
  },

  // Homecare Medical Devices (15 items)
  {
    id: 61,
    name: 'Home Blood Pressure Monitor',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Digital blood pressure monitor with smartphone connectivity.',
    features: ['Bluetooth connectivity', 'Large display', 'Memory storage', 'Irregular heartbeat detection']
  },
  {
    id: 62,
    name: 'Glucose Meter',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Blood glucose monitoring device for diabetes management.',
    features: ['Fast results', 'Small blood sample', 'Data tracking', 'Easy-to-read display']
  },
  {
    id: 63,
    name: 'Nebulizer',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable nebulizer for respiratory medication delivery.',
    features: ['Quiet operation', 'Efficient medication delivery', 'Easy cleaning', 'Compact design']
  },
  {
    id: 64,
    name: 'Digital Thermometer',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Non-contact infrared thermometer for temperature monitoring.',
    features: ['Non-contact measurement', 'Fast readings', 'Fever alarm', 'Memory recall']
  },
  {
    id: 65,
    name: 'Wheelchair',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Lightweight folding wheelchair for mobility assistance.',
    features: ['Lightweight frame', 'Foldable design', 'Comfortable seating', 'Easy maneuverability']
  },
  {
    id: 66,
    name: 'Walking Aid',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Adjustable walking frame with wheels for mobility support.',
    features: ['Height adjustable', 'Locking wheels', 'Lightweight', 'Foldable design']
  },
  {
    id: 67,
    name: 'Compression Stockings',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Medical compression stockings for circulation improvement.',
    features: ['Graduated compression', 'Breathable fabric', 'Various sizes', 'Easy to wear']
  },
  {
    id: 68,
    name: 'TENS Unit',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Transcutaneous electrical nerve stimulation unit for pain management.',
    features: ['Multiple programs', 'Adjustable intensity', 'Portable design', 'Rechargeable battery']
  },
  {
    id: 69,
    name: 'Home Oxygen Concentrator',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Stationary oxygen concentrator for home oxygen therapy.',
    features: ['Continuous flow', 'Low maintenance', 'Quiet operation', 'Energy efficient']
  },
  {
    id: 70,
    name: 'Pill Dispenser',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Automatic medication dispenser for medication management.',
    features: ['Programmable alarms', 'Multiple compartments', 'Tamper-resistant', 'Easy loading']
  },
  {
    id: 71,
    name: 'Hospital Bed',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Adjustable hospital bed for home care use.',
    features: ['Electric adjustment', 'Side rails', 'Comfortable mattress', 'Easy controls']
  },
  {
    id: 72,
    name: 'Shower Chair',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Adjustable shower chair for bathing assistance.',
    features: ['Height adjustable', 'Non-slip feet', 'Drainage holes', 'Comfortable seating']
  },
  {
    id: 73,
    name: 'Blood Oxygen Monitor',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Fingertip pulse oximeter for oxygen saturation monitoring.',
    features: ['Instant readings', 'LED display', 'Low battery indicator', 'Automatic shut-off']
  },
  {
    id: 74,
    name: 'Heating Pad',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Electric heating pad for pain relief and comfort.',
    features: ['Multiple heat settings', 'Auto shut-off', 'Washable cover', 'Even heat distribution']
  },
  {
    id: 75,
    name: 'Bedside Commode',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable bedside commode for mobility assistance.',
    features: ['Adjustable height', 'Removable bucket', 'Armrests', 'Easy assembly']
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'hospital-equipment', name: 'Hospital Equipment & Devices' },
  { id: 'consumables', name: 'Consumables & Disposables' },
  { id: 'laboratory', name: 'Laboratory Reagent & Supplies' },
  { id: 'emergency', name: 'Emergency & Rescue Equipment' },
  { id: 'homecare', name: 'Homecare Medical Devices' }
];
