import { Product } from './products';

// Additional products for the remaining categories
export const additionalProducts: Product[] = [
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
  }
];
