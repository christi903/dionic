export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  price?: number;
  stock?: number;
}

export const products: Product[] = [
  // Hospital Equipment & Devices
  {
    id: 1,
    name: 'Digital X-Ray Machine',
    category: 'Hospital Equipment',
    image: '/medical-images/x-ray machine.jpg',
    description: 'Advanced digital radiography system for high-quality diagnostic imaging with reduced radiation exposure.',
    features: [
      'High-resolution digital imaging',
      'Low radiation dose technology',
      'DICOM compatibility',
      'Automated exposure control',
      'Touch screen interface'
    ]
  },
  {
    id: 2,
    name: 'Ultrasound Machine',
    category: 'Hospital Equipment',
    image: '/medical-images/ultrasound machine.jpg',
    description: 'Portable ultrasound system with advanced imaging capabilities for various medical applications.',
    features: [
      'Multi-frequency transducers',
      'Real-time imaging',
      'Doppler capabilities',
      'Image storage and transfer',
      'Compact portable design'
    ]
  },
  {
    id: 3,
    name: 'Ventilator',
    category: 'Hospital Equipment',
    image: '/medical-images/ventilators.jpg',
    description: 'Advanced mechanical ventilator for critical care and respiratory support in hospitals.',
    features: [
      'Multiple ventilation modes',
      'Advanced monitoring',
      'Alarm systems',
      'Touch screen controls',
      'Battery backup'
    ]
  },
  {
    id: 4,
    name: 'Defibrillator',
    category: 'Hospital Equipment',
    image: '/medical-images/defibrillators.jpg',
    description: 'Automated external defibrillator for emergency cardiac care and resuscitation.',
    features: [
      'Automated rhythm analysis',
      'Voice prompts guidance',
      'Shock advisory system',
      'Data recording capability',
      'Portable design'
    ]
  },
  {
    id: 5,
    name: 'Hospital Bed',
    category: 'Hospital Equipment',
    image: '/medical-images/hospital bed.jpg',
    description: 'Electric hospital bed with multiple positioning options for patient comfort and care.',
    features: [
      'Electric height adjustment',
      'Trendelenburg positioning',
      'Side rails for safety',
      'Mattress platform adjustment',
      'Nurse control panel'
    ]
  },
  {
    id: 6,
    name: 'Infusion Pump',
    category: 'Hospital Equipment',
    image: '/medical-images/infusion pumps.jpg',
    description: 'Programmable infusion pump for accurate medication and fluid delivery.',
    features: [
      'Precise flow rate control',
      'Multiple infusion modes',
      'Safety alarms',
      'Drug library integration',
      'Battery operation'
    ]
  },
  {
    id: 7,
    name: 'Anesthesia Machine',
    category: 'Hospital Equipment',
    image: '/medical-images/anesthesia machine.jpg',
    description: 'Complete anesthesia workstation for surgical procedures and patient monitoring.',
    features: [
      'Gas mixing and delivery',
      'Ventilator integration',
      'Patient monitoring',
      'Scavenging system',
      'Electronic controls'
    ]
  },
  {
    id: 8,
    name: 'Surgical Lights',
    category: 'Hospital Equipment',
    image: '/medical-images/surgical lights .jpg',
    description: 'LED surgical lighting system providing optimal illumination for surgical procedures.',
    features: [
      'LED technology',
      'Shadow-free illumination',
      'Adjustable intensity',
      'Sterile handles',
      'Long lifespan'
    ]
  },
  {
    id: 9,
    name: 'Suction Unit',
    category: 'Hospital Equipment',
    image: '/medical-images/suction unit.jpg',
    description: 'Medical suction apparatus for airway clearance and surgical procedures.',
    features: [
      'High vacuum performance',
      'Adjustable suction levels',
      'Collection jar system',
      'Portable design',
      'Easy maintenance'
    ]
  },
  {
    id: 10,
    name: 'Incubator',
    category: 'Hospital Equipment',
    image: '/medical-images/incubators.jpg',
    description: 'Neonatal incubator providing controlled environment for premature infants.',
    features: [
      'Temperature control',
      'Humidity regulation',
      'Oxygen monitoring',
      'Access ports',
      'Alarm systems'
    ]
  },

  // Laboratory Equipment & Supplies
  {
    id: 11,
    name: 'Laboratory Microscope',
    category: 'Laboratory Equipment',
    image: '/medical-images/microscope.jpg',
    description: 'High-resolution laboratory microscope for medical diagnostics and research.',
    features: [
      'Multiple magnification levels',
      'LED illumination',
      'Fine focus adjustment',
      'Binocular viewing',
      'Camera attachment ready'
    ]
  },
  {
    id: 12,
    name: 'Centrifuge',
    category: 'Laboratory Equipment',
    image: '/medical-images/centrifuge.jpg',
    description: 'High-speed laboratory centrifuge for sample separation and analysis.',
    features: [
      'Variable speed control',
      'Digital display',
      'Safety lid lock',
      'Multiple rotor options',
      'Quiet operation'
    ]
  },
  {
    id: 13,
    name: 'Autoclave Sterilizer',
    category: 'Laboratory Equipment',
    image: '/medical-images/autoclave.jpg',
    description: 'Steam sterilization system for medical instruments and laboratory equipment.',
    features: [
      'Steam sterilization',
      'Programmable cycles',
      'Temperature monitoring',
      'Safety interlocks',
      'Validation ports'
    ]
  },
  {
    id: 14,
    name: 'Laboratory Pipette',
    category: 'Laboratory Equipment',
    image: '/medical-images/pipette.jpg',
    description: 'Precision micropipette for accurate liquid handling in laboratory applications.',
    features: [
      'Variable volume settings',
      'Ergonomic design',
      'High accuracy',
      'Autoclavable components',
      'Easy calibration'
    ]
  },
  {
    id: 15,
    name: 'Blood Collection Tubes',
    category: 'Laboratory Equipment',
    image: '/medical-images/blood collection tubes.jpg',
    description: 'Vacuum blood collection tubes for various laboratory tests and analyses.',
    features: [
      'Sterile and vacuum-sealed',
      'Color-coded caps',
      'Various additives available',
      'Leak-proof design',
      'Compatible with standard holders'
    ]
  },
  {
    id: 16,
    name: 'Reagent Test Kits',
    category: 'Laboratory Equipment',
    image: '/medical-images/reagent kits.jpg',
    description: 'Diagnostic reagent kits for various medical laboratory tests and analyses.',
    features: [
      'Ready-to-use format',
      'Quality controlled',
      'Extended shelf life',
      'Comprehensive instructions',
      'Multiple test parameters'
    ]
  },

  // Medical Instruments & Tools
  {
    id: 17,
    name: 'Digital Stethoscope',
    category: 'Medical Instruments',
    image: '/medical-images/stethoscope.jpg',
    description: 'Electronic stethoscope with amplification and recording capabilities.',
    features: [
      'Sound amplification',
      'Noise reduction',
      'Recording capability',
      'Bluetooth connectivity',
      'Long battery life'
    ]
  },
  {
    id: 18,
    name: 'Digital Thermometer',
    category: 'Medical Instruments',
    image: '/medical-images/thermometer.jpg',
    description: 'Fast and accurate digital thermometer for body temperature measurement.',
    features: [
      'Fast 10-second reading',
      'Fever alarm',
      'Memory recall',
      'Waterproof design',
      'Auto shut-off'
    ]
  },
  {
    id: 19,
    name: 'Pulse Oximeter',
    category: 'Medical Instruments',
    image: '/medical-images/pulse oximeter.jpg',
    description: 'Fingertip pulse oximeter for measuring oxygen saturation and pulse rate.',
    features: [
      'SpO2 and pulse rate display',
      'OLED display',
      'Low battery indicator',
      'Automatic shut-off',
      'Portable design'
    ]
  },
  {
    id: 20,
    name: 'Blood Pressure Monitor',
    category: 'Medical Instruments',
    image: '/medical-images/blood pressure cuff.jpg',
    description: 'Automatic digital blood pressure monitor with large display and memory.',
    features: [
      'Automatic inflation',
      'Large LCD display',
      'Memory storage',
      'Irregular heartbeat detection',
      'Multiple cuff sizes'
    ]
  },
  {
    id: 21,
    name: 'Surgical Scissors',
    category: 'Medical Instruments',
    image: '/medical-images/surgical scissors.jpg',
    description: 'High-quality stainless steel surgical scissors for medical procedures.',
    features: [
      'Stainless steel construction',
      'Sharp precision blades',
      'Ergonomic handles',
      'Autoclavable',
      'Various sizes available'
    ]
  },
  {
    id: 22,
    name: 'Surgical Forceps',
    category: 'Medical Instruments',
    image: '/medical-images/forceps.jpg',
    description: 'Precision surgical forceps for grasping and manipulating tissues.',
    features: [
      'Fine tip precision',
      'Non-slip grip',
      'Corrosion resistant',
      'Reusable design',
      'Multiple tip configurations'
    ]
  },
  {
    id: 23,
    name: 'Surgical Scalpel',
    category: 'Medical Instruments',
    image: '/medical-images/scalpel.jpg',
    description: 'Disposable surgical scalpel with sharp carbon steel blade.',
    features: [
      'Ultra-sharp blade',
      'Ergonomic handle',
      'Single-use design',
      'Sterile packaging',
      'Various blade sizes'
    ]
  },
  {
    id: 24,
    name: 'Medical Flashlight',
    category: 'Medical Instruments',
    image: '/medical-images/flashlight.jpg',
    description: 'LED medical penlight for pupil examination and general illumination.',
    features: [
      'Bright LED light',
      'Pupil gauge',
      'Pocket clip',
      'Battery operated',
      'Durable construction'
    ]
  },

  // Consumables & Disposables
  {
    id: 25,
    name: 'Disposable Syringes',
    category: 'Consumables',
    image: '/medical-images/syringe.jpg',
    description: 'Sterile disposable syringes for injections and medication administration.',
    features: [
      'Sterile and single-use',
      'Luer lock connection',
      'Clear barrel markings',
      'Smooth plunger action',
      'Various sizes available'
    ]
  },
  {
    id: 26,
    name: 'IV Catheters',
    category: 'Consumables',
    image: '/medical-images/iv catheters.jpg',
    description: 'Peripheral IV catheters for intravenous access and fluid administration.',
    features: [
      'Sharp needle insertion',
      'Flexible catheter material',
      'Color-coded by size',
      'Safety features',
      'Sterile packaging'
    ]
  },
  {
    id: 27,
    name: 'Surgical Gloves',
    category: 'Consumables',
    image: '/medical-images/surgical gloves.png',
    description: 'Sterile latex surgical gloves for medical procedures and examinations.',
    features: [
      'Powder-free latex',
      'Sterile packaging',
      'Textured fingertips',
      'Anatomical shape',
      'Various sizes available'
    ]
  },
  {
    id: 28,
    name: 'Disposable Gloves',
    category: 'Consumables',
    image: '/medical-images/disposable gloves.jpg',
    description: 'Nitrile examination gloves for medical examinations and procedures.',
    features: [
      'Nitrile material',
      'Powder-free',
      'Puncture resistant',
      'Ambidextrous design',
      'Box of 100 pieces'
    ]
  },
  {
    id: 29,
    name: 'Disposable Face Masks',
    category: 'Consumables',
    image: '/medical-images/disposable masks.jpg',
    description: '3-ply surgical face masks for infection control and protection.',
    features: [
      '3-layer filtration',
      'Fluid resistant',
      'Comfortable ear loops',
      'Nose bridge wire',
      'Breathable material'
    ]
  },
  {
    id: 30,
    name: 'Sterile Gauze Pads',
    category: 'Consumables',
    image: '/medical-images/sterile gauze.jpg',
    description: 'Sterile gauze pads for wound dressing and medical applications.',
    features: [
      'Sterile and absorbent',
      '100% cotton',
      'Non-adherent',
      'Various sizes',
      'Individual packaging'
    ]
  },
  {
    id: 31,
    name: 'Gauze Pads',
    category: 'Consumables',
    image: '/medical-images/gauze pads.jpg',
    description: 'Non-sterile gauze pads for general wound care and cleaning.',
    features: [
      'Highly absorbent',
      'Soft cotton material',
      'Non-linting',
      'Multiple sizes',
      'Bulk packaging'
    ]
  },
  {
    id: 32,
    name: 'Medical Tape',
    category: 'Consumables',
    image: '/medical-images/medical tape.jpg',
    description: 'Hypoallergenic medical tape for securing dressings and devices.',
    features: [
      'Hypoallergenic adhesive',
      'Breathable material',
      'Easy tear application',
      'Residue-free removal',
      'Various widths'
    ]
  },
  {
    id: 33,
    name: 'Tourniquet',
    category: 'Consumables',
    image: '/medical-images/tourniquet.jpg',
    description: 'Latex tourniquet for blood drawing and IV insertion procedures.',
    features: [
      'Latex construction',
      'Quick release design',
      'Reusable',
      'Comfortable application',
      'Standard length'
    ]
  },
  {
    id: 34,
    name: 'Tongue Depressors',
    category: 'Consumables',
    image: '/medical-images/tongue depressors.jpg',
    description: 'Wooden tongue depressors for oral examinations and procedures.',
    features: [
      'Smooth wooden construction',
      'Splinter-free edges',
      'Non-sterile',
      'Disposable',
      'Box of 100 pieces'
    ]
  },

  // Emergency & Rescue Equipment
  {
    id: 35,
    name: 'First Aid Kit',
    category: 'Emergency Equipment',
    image: '/medical-images/first aid kit.jpg',
    description: 'Comprehensive first aid kit for emergency medical care and treatment.',
    features: [
      'Complete medical supplies',
      'Portable carrying case',
      'Emergency medications',
      'Instruction manual',
      'Workplace compliant'
    ]
  },
  {
    id: 36,
    name: 'Emergency Stretcher',
    category: 'Emergency Equipment',
    image: '/medical-images/emergency stretcher.jpg',
    description: 'Lightweight emergency stretcher for patient transport and rescue operations.',
    features: [
      'Lightweight aluminum frame',
      'Foldable design',
      'Safety straps included',
      'Weather resistant',
      'Easy to carry'
    ]
  },
  {
    id: 37,
    name: 'Emergency Blankets',
    category: 'Emergency Equipment',
    image: '/medical-images/emergency blankets.jpg',
    description: 'Thermal emergency blankets for hypothermia prevention and patient warming.',
    features: [
      'Heat retention technology',
      'Waterproof material',
      'Compact storage',
      'Reusable design',
      'Emergency situations'
    ]
  },
  {
    id: 38,
    name: 'Oxygen Tank',
    category: 'Emergency Equipment',
    image: '/medical-images/oxygen tank.jpg',
    description: 'Portable oxygen cylinder for emergency respiratory support and therapy.',
    features: [
      'High-pressure storage',
      'Pressure gauge included',
      'Portable design',
      'Safety valve system',
      'Medical grade oxygen'
    ]
  },

  // Homecare Medical Devices
  {
    id: 39,
    name: 'Hospital Bed Sheets',
    category: 'Homecare',
    image: '/medical-images/bed sheets.jpg',
    description: 'Medical-grade bed sheets for hospitals and homecare applications.',
    features: [
      'Antimicrobial treatment',
      'Easy care fabric',
      'Stain resistant',
      'Comfortable fit',
      'Various sizes available'
    ]
  },
  {
    id: 40,
    name: 'Walking Cane',
    category: 'Homecare',
    image: '/medical-images/walking cane.jpg',
    description: 'Lightweight walking cane for support and stability.',
    features: [
      'Adjustable height',
      'Ergonomic handle',
      'Durable construction',
      'Non-slip tip',
      'Lightweight design'
    ]
  },
  {
    id: 41,
    name: 'Wearable Heart Rate Monitor',
    category: 'Homecare',
    image: '/medical-images/wearable heart rate monitor.jpg',
    description: 'Wearable device for continuous heart rate monitoring.',
    features: [
      'Real-time heart rate tracking',
      'Bluetooth connectivity',
      'Long battery life',
      'Water-resistant',
      'Comfortable fit'
    ]
  },
  {
    id: 42,
    name: 'Weighing Scale',
    category: 'Homecare',
    image: '/medical-images/weighing scale.jpg',
    description: 'Digital weighing scale for accurate weight measurement.',
    features: [
      'High precision sensors',
      'Large LCD display',
      'Auto-calibration',
      'Slim design',
      'Multiple unit options'
    ]
  },
  {
    id: 43,
    name: 'Nebulizer',
    category: 'Homecare',
    image: '/medical-images/nebulizer.jpg',
    description: 'Portable nebulizer for respiratory therapy.',
    features: [
      'Compact design',
      'Quiet operation',
      'Easy to use',
      'Includes masks and tubing',
      'Fast medication delivery'
    ]
  },
  {
    id: 44,
    name: 'Blood Pressure Monitor',
    category: 'Homecare',
    image: '/medical-images/blood pressure cuff.jpg',
    description: 'Automatic digital blood pressure monitor for home use.',
    features: [
      'Large display',
      'Memory storage',
      'Irregular heartbeat detection',
      'Multiple cuff sizes',
      'User-friendly interface'
    ]
  },
  {
    id: 45,
    name: 'Digital Thermometer',
    category: 'Homecare',
    image: '/medical-images/thermometer.jpg',
    description: 'Fast and accurate digital thermometer for home use.',
    features: [
      'Quick readings',
      'Fever alarm',
      'Memory recall',
      'Waterproof design',
      'Auto shut-off'
    ]
  },
  {
    id: 46,
    name: 'Pulse Oximeter',
    category: 'Homecare',
    image: '/medical-images/pulse oximeter.jpg',
    description: 'Fingertip pulse oximeter for measuring oxygen saturation.',
    features: [
      'SpO2 and pulse rate display',
      'Compact design',
      'Low battery indicator',
      'Automatic shut-off',
      'User-friendly'
    ]
  },
  {
    id: 47,
    name: 'Disposable Gloves',
    category: 'Homecare',
    image: '/medical-images/disposable gloves.jpg',
    description: 'Nitrile examination gloves for homecare use.',
    features: [
      'Powder-free',
      'Puncture resistant',
      'Ambidextrous design',
      'Comfortable fit',
      'Box of 100 pieces'
    ]
  },
  {
    id: 48,
    name: 'First Aid Kit',
    category: 'Homecare',
    image: '/medical-images/first aid kit.jpg',
    description: 'Comprehensive first aid kit for home emergencies.',
    features: [
      'Complete medical supplies',
      'Portable carrying case',
      'Emergency medications',
      'Instruction manual',
      'Workplace compliant'
    ]
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'Hospital Equipment', name: 'Hospital Equipment & Devices' },
  { id: 'Laboratory Equipment', name: 'Laboratory Equipment & Supplies' },
  { id: 'Medical Instruments', name: 'Medical Instruments & Tools' },
  { id: 'Consumables', name: 'Consumables & Disposables' },
  { id: 'Emergency Equipment', name: 'Emergency & Rescue Equipment' },
  { id: 'Homecare', name: 'Homecare Medical Devices' }
];