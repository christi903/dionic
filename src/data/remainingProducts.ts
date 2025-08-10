import { Product } from './products';

// Remaining product categories
export const remainingProducts: Product[] = [
  // Emergency & Rescue Equipment (15 items)
  {
    id: 46,
    name: 'Defibrillator',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Automated external defibrillator with voice prompts and LCD display.',
    features: ['Voice prompts', 'LCD display', 'Automatic analysis', 'Battery backup']
  },
  {
    id: 47,
    name: 'Emergency Stretcher',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Lightweight emergency stretcher for patient transport.',
    features: ['Lightweight aluminum', 'Foldable design', 'Safety straps', 'Weather resistant']
  },
  {
    id: 48,
    name: 'Oxygen Tank',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable oxygen tank with regulator for emergency respiratory support.',
    features: ['High-pressure tank', 'Flow regulator', 'Pressure gauge', 'Portable design']
  },
  {
    id: 49,
    name: 'Emergency Medical Kit',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Comprehensive emergency medical kit for first aid and trauma care.',
    features: ['Complete supplies', 'Organized compartments', 'Waterproof case', 'Quick access']
  },
  {
    id: 50,
    name: 'Spine Board',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Rigid spine board for spinal immobilization during transport.',
    features: ['X-ray translucent', 'Multiple handholds', 'Easy cleaning', 'Lightweight']
  },
  {
    id: 51,
    name: 'Emergency Ventilator',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable emergency ventilator for respiratory support.',
    features: ['Battery operated', 'Multiple modes', 'Alarm system', 'Compact design']
  },
  {
    id: 52,
    name: 'Trauma Shears',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Heavy-duty trauma shears for cutting clothing and bandages.',
    features: ['Sharp blades', 'Safety tips', 'Ergonomic handles', 'Autoclave safe']
  },
  {
    id: 53,
    name: 'Emergency Blanket',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Thermal emergency blanket for hypothermia prevention.',
    features: ['Heat retention', 'Waterproof', 'Compact size', 'Reflective material']
  },
  {
    id: 54,
    name: 'Cervical Collar',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Adjustable cervical collar for neck immobilization.',
    features: ['Adjustable size', 'Comfortable padding', 'X-ray translucent', 'Easy application']
  },
  {
    id: 55,
    name: 'Emergency Suction Unit',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable suction unit for airway clearance in emergencies.',
    features: ['Battery powered', 'High suction power', 'Disposable canisters', 'Lightweight']
  },
  {
    id: 56,
    name: 'Splint Set',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Complete splint set for fracture immobilization.',
    features: ['Various sizes', 'Moldable material', 'Radiolucent', 'Easy application']
  },
  {
    id: 57,
    name: 'Emergency Medications',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Essential emergency medications for critical care.',
    features: ['Pre-loaded syringes', 'Long shelf life', 'Temperature stable', 'Quick access']
  },
  {
    id: 58,
    name: 'Rescue Basket',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Rigid rescue basket for difficult terrain patient extraction.',
    features: ['Lightweight construction', 'Patient restraints', 'All-terrain use', 'Durable materials']
  },
  {
    id: 59,
    name: 'Emergency Monitor',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable patient monitor for emergency transport.',
    features: ['Battery operated', 'Multi-parameter', 'Rugged design', 'Data recording']
  },
  {
    id: 60,
    name: 'Tourniquet',
    category: 'emergency',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Combat application tourniquet for severe bleeding control.',
    features: ['One-handed application', 'Windlass system', 'Time strip', 'Proven effectiveness']
  },

  // Homecare Medical Devices (15 items)
  {
    id: 61,
    name: 'Home Blood Pressure Monitor',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Digital blood pressure monitor for home use with smartphone connectivity.',
    features: ['Bluetooth connectivity', 'Mobile app', 'Large display', 'Memory storage']
  },
  {
    id: 62,
    name: 'Glucose Meter',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Blood glucose meter with test strips for diabetes management.',
    features: ['Quick results', 'Small blood sample', 'Data logging', 'Easy to use']
  },
  {
    id: 63,
    name: 'Nebulizer',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable nebulizer for respiratory medication delivery at home.',
    features: ['Quiet operation', 'Rechargeable battery', 'Multiple masks', 'Easy cleaning']
  },
  {
    id: 64,
    name: 'Digital Thermometer',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Non-contact infrared thermometer for safe temperature measurement.',
    features: ['Non-contact measurement', 'Instant reading', 'Fever alarm', 'Memory function']
  },
  {
    id: 65,
    name: 'Wheelchair',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Lightweight folding wheelchair for mobility assistance.',
    features: ['Foldable design', 'Lightweight frame', 'Comfortable seating', 'Easy transport']
  },
  {
    id: 66,
    name: 'Walking Aid',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Adjustable walking frame with wheels for mobility support.',
    features: ['Height adjustable', 'Four wheels', 'Hand brakes', 'Storage basket']
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
    image: 'https://images.pexels.com/photos/8376205/pexels-photo-8376205.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Stationary oxygen concentrator for home oxygen therapy.',
    features: ['Continuous flow', 'Quiet operation', 'Low maintenance', 'Energy efficient']
  },
  {
    id: 70,
    name: 'Pill Dispenser',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Automatic pill dispenser with alarm for medication management.',
    features: ['Multiple compartments', 'Alarm reminders', 'Secure locking', 'Easy programming']
  },
  {
    id: 71,
    name: 'Hospital Bed',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Adjustable hospital bed for home care with electric controls.',
    features: ['Electric adjustment', 'Side rails', 'Comfortable mattress', 'Easy controls']
  },
  {
    id: 72,
    name: 'Shower Chair',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Adjustable shower chair for safe bathing assistance.',
    features: ['Height adjustable', 'Non-slip feet', 'Drainage holes', 'Comfortable seating']
  },
  {
    id: 73,
    name: 'Blood Oxygen Monitor',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021942/pexels-photo-4021942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Fingertip pulse oximeter for home oxygen saturation monitoring.',
    features: ['OLED display', 'Battery indicator', 'Auto shut-off', 'Carrying case']
  },
  {
    id: 74,
    name: 'Heating Pad',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Electric heating pad for pain relief and muscle relaxation.',
    features: ['Multiple heat settings', 'Auto shut-off', 'Washable cover', 'Large size']
  },
  {
    id: 75,
    name: 'Bedside Commode',
    category: 'homecare',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Portable bedside commode for patients with limited mobility.',
    features: ['Adjustable height', 'Removable bucket', 'Splash guard', 'Sturdy construction']
  }
];
