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
  // Diagnostic Equipment
  {
    id: 1,
    name: "X-Ray Machine",
    category: "Medical Equipment",
    image: "/medical-images/x-ray machine.jpg",
    description: "Advanced digital radiography system for comprehensive medical imaging and diagnosis.",
    features: ["Digital imaging technology", "High-resolution output", "Low radiation exposure", "Fast processing time"],
    price: 125000,
    stock: 3
  },
  {
    id: 2,
    name: "Ultrasound Machine",
    category: "Medical Equipment",
    image: "/medical-images/ultrasound machine.jpg",
    description: "Portable ultrasound system for real-time imaging and diagnostic procedures.",
    features: ["High-frequency transducers", "Real-time imaging", "Portable design", "Multiple scan modes"],
    price: 45000,
    stock: 5
  },
  {
    id: 3,
    name: "Microscope",
    category: "Medical Equipment",
    image: "/medical-images/microscope.jpg",
    description: "Professional laboratory microscope for detailed cellular and tissue analysis.",
    features: ["High magnification range", "LED illumination", "Multiple objective lenses", "Digital camera compatible"],
    price: 8500,
    stock: 8
  },
  {
    id: 4,
    name: "Stethoscope",
    category: "Medical Equipment",
    image: "/medical-images/stethoscope.jpg",
    description: "Professional acoustic stethoscope for cardiac and pulmonary auscultation.",
    features: ["Dual-head design", "High acoustic sensitivity", "Comfortable ear tips", "Durable tubing"],
    price: 750,
    stock: 30
  },
  {
    id: 5,
    name: "Pulse Oximeter",
    category: "Medical Equipment",
    image: "/medical-images/pulse oximeter.jpg",
    description: "Non-invasive device for measuring blood oxygen saturation and pulse rate.",
    features: ["Real-time monitoring", "Digital display", "Alarm alerts", "Rechargeable battery"],
    price: 850,
    stock: 25
  },
  {
    id: 6,
    name: "Blood Pressure Cuff",
    category: "Medical Equipment",
    image: "/medical-images/blood pressure cuff.jpg",
    description: "Digital blood pressure monitor for accurate cardiovascular measurements.",
    features: ["Automatic inflation", "Digital display", "Memory storage", "Multiple cuff sizes"],
    price: 1200,
    stock: 20
  },
  {
    id: 7,
    name: "Thermometer",
    category: "Medical Equipment",
    image: "/medical-images/thermometer.jpg",
    description: "Digital thermometer for accurate body temperature measurement.",
    features: ["Fast reading", "Digital display", "Memory recall", "Fever alarm"],
    price: 450,
    stock: 50
  },

  // Surgical Equipment
  {
    id: 8,
    name: "Surgical Scalpel",
    category: "Medical Equipment",
    image: "/medical-images/scalpel.jpg",
    description: "Precision surgical scalpel for medical procedures and tissue dissection.",
    features: ["Stainless steel blade", "Ergonomic handle", "Sterile packaging", "Multiple blade sizes"],
    price: 150,
    stock: 200
  },
  {
    id: 9,
    name: "Surgical Scissors",
    category: "Medical Equipment",
    image: "/medical-images/surgical scissors.jpg",
    description: "Medical-grade surgical scissors for cutting tissues and sutures.",
    features: ["Sharp precision blades", "Stainless steel construction", "Multiple tip styles", "Autoclavable"],
    price: 350,
    stock: 100
  },
  {
    id: 10,
    name: "Forceps",
    category: "Medical Equipment",
    image: "/medical-images/forceps.jpg",
    description: "Medical forceps for grasping and manipulating tissues during procedures.",
    features: ["Precision tips", "Locking mechanism", "Stainless steel", "Multiple sizes"],
    price: 280,
    stock: 150
  },
  {
    id: 11,
    name: "Surgical Gloves",
    category: "Medical Equipment",
    image: "/medical-images/surgical gloves.png",
    description: "Sterile surgical gloves for medical procedures and surgery.",
    features: ["Sterile packaging", "Powder-free", "Textured grip", "Multiple sizes"],
    price: 35,
    stock: 300
  },
  {
    id: 12,
    name: "Surgical Lights",
    category: "Medical Equipment",
    image: "/medical-images/surgical lights .jpg",
    description: "LED surgical lighting system for optimal visibility during procedures.",
    features: ["LED technology", "Adjustable brightness", "Shadow-free illumination", "Flexible positioning"],
    price: 8500,
    stock: 8
  },

  // Life Support Equipment
  {
    id: 13,
    name: "Ventilator",
    category: "Medical Equipment",
    image: "/medical-images/ventilators.jpg",
    description: "Advanced mechanical ventilator for respiratory support in critical care situations.",
    features: ["Multiple ventilation modes", "Touchscreen interface", "Alarm systems", "Battery backup"],
    price: 75000,
    stock: 2
  },
  {
    id: 14,
    name: "Defibrillator",
    category: "Medical Equipment",
    image: "/medical-images/defibrillators.jpg",
    description: "Automated external defibrillator for emergency cardiac care and resuscitation.",
    features: ["Biphasic technology", "Voice prompts", "ECG monitoring", "Rechargeable battery"],
    price: 25000,
    stock: 6
  },
  {
    id: 15,
    name: "Incubator",
    category: "Medical Equipment",
    image: "/medical-images/incubators.jpg",
    description: "Neonatal incubator for premature and critically ill newborns.",
    features: ["Temperature control", "Humidity regulation", "Oxygen monitoring", "Access ports"],
    price: 35000,
    stock: 4
  },
  {
    id: 16,
    name: "Oxygen Tank",
    category: "Medical Equipment",
    image: "/medical-images/oxygen tank.jpg",
    description: "Medical oxygen delivery system for respiratory therapy and emergency care.",
    features: ["High-capacity tank", "Pressure regulator", "Flow meter", "Safety valve"],
    price: 1200,
    stock: 15
  },

  // Hospital Furniture
  {
    id: 17,
    name: "Hospital Bed",
    category: "Medical Equipment",
    image: "/medical-images/hospital bed.jpg",
    description: "Adjustable hospital bed for patient care and comfort.",
    features: ["Electric adjustment", "Side rails", "Wheels with brakes", "IV pole mount"],
    price: 12000,
    stock: 10
  },
  {
    id: 18,
    name: "Emergency Stretcher",
    category: "Medical Equipment",
    image: "/medical-images/emergency stretcher.jpg",
    description: "Portable emergency stretcher for patient transport and emergency situations.",
    features: ["Lightweight aluminum", "Foldable design", "Safety straps", "Wheels for mobility"],
    price: 3500,
    stock: 12
  },

  // Laboratory Equipment
  {
    id: 19,
    name: "Centrifuge",
    category: "Medical Equipment",
    image: "/medical-images/centrifuge.jpg",
    description: "Laboratory centrifuge for separating substances of different densities.",
    features: ["Variable speed control", "Digital display", "Safety lid lock", "Multiple rotor options"],
    price: 4500,
    stock: 7
  },
  {
    id: 20,
    name: "Anesthesia Machine",
    category: "Medical Equipment",
    image: "/medical-images/anesthesia machine.jpg",
    description: "Advanced anesthesia delivery system for surgical procedures.",
    features: ["Precise gas control", "Ventilator integration", "Monitoring systems", "Safety alarms"],
    price: 95000,
    stock: 3
  },
  {
    id: 21,
    name: "Autoclave",
    category: "Medical Equipment",
    image: "/medical-images/autoclave.jpg",
    description: "Steam sterilization autoclave for medical instruments and supplies.",
    features: ["High-pressure steam", "Digital controls", "Multiple cycle options", "Safety interlocks"],
    price: 15000,
    stock: 5
  },

  // Infusion & IV Therapy
  {
    id: 22,
    name: "Infusion Pump",
    category: "Medical Equipment",
    image: "/medical-images/infusion pumps.jpg",
    description: "Precision infusion pump for controlled medication and fluid delivery.",
    features: ["Programmable flow rates", "Alarm systems", "Battery backup", "Multiple channels"],
    price: 8500,
    stock: 8
  },
  {
    id: 23,
    name: "IV Catheters",
    category: "Medical Equipment",
    image: "/medical-images/iv catheters.jpg",
    description: "Sterile intravenous catheters for fluid and medication administration.",
    features: ["Multiple sizes", "Safety needles", "Smooth insertion", "Sterile packaging"],
    price: 25,
    stock: 500
  },
  {
    id: 24,
    name: "Syringe",
    category: "Medical Equipment",
    image: "/medical-images/syringe.jpg",
    description: "Medical syringes for precise medication delivery and fluid aspiration.",
    features: ["Clear barrel", "Smooth plunger", "Multiple sizes", "Sterile packaging"],
    price: 15,
    stock: 1000
  },

  // Emergency & First Aid
  {
    id: 25,
    name: "First Aid Kit",
    category: "Medical Equipment",
    image: "/medical-images/first aid kit.jpg",
    description: "Comprehensive first aid kit for emergency medical situations.",
    features: ["Complete supplies", "Organized compartments", "Portable case", "Wall mountable"],
    price: 850,
    stock: 50
  },
  {
    id: 26,
    name: "Emergency Blankets",
    category: "Medical Equipment",
    image: "/medical-images/emergency blankets.jpg",
    description: "Thermal emergency blankets for patient warmth and shock prevention.",
    features: ["Heat reflective", "Waterproof", "Compact storage", "Disposable"],
    price: 25,
    stock: 200
  },
  {
    id: 27,
    name: "Tourniquet",
    category: "Medical Equipment",
    image: "/medical-images/tourniquet.jpg",
    description: "Medical tourniquet for emergency bleeding control.",
    features: ["Quick application", "Adjustable pressure", "Durable material", "Compact size"],
    price: 150,
    stock: 100
  },

  // Medical Supplies
  {
    id: 28,
    name: "Disposable Gloves",
    category: "Medical Equipment",
    image: "/medical-images/disposable gloves.jpg",
    description: "Medical-grade disposable gloves for infection control.",
    features: ["Latex/nitrile options", "Powder-free", "Multiple sizes", "Sterile packaging"],
    price: 8,
    stock: 2000
  },
  {
    id: 29,
    name: "Disposable Masks",
    category: "Medical Equipment",
    image: "/medical-images/disposable masks.jpg",
    description: "Medical face masks for respiratory protection and infection control.",
    features: ["3-layer protection", "Comfortable fit", "Breathable material", "Ear loops"],
    price: 5,
    stock: 5000
  },
  {
    id: 30,
    name: "Gauze Pads",
    category: "Medical Equipment",
    image: "/medical-images/gauze pads.jpg",
    description: "Sterile gauze pads for wound care and dressing.",
    features: ["Sterile packaging", "Multiple sizes", "Highly absorbent", "Non-stick"],
    price: 12,
    stock: 1000
  },
  {
    id: 31,
    name: "Sterile Gauze",
    category: "Medical Equipment",
    image: "/medical-images/sterile gauze.jpg",
    description: "Medical-grade sterile gauze for wound dressing and surgical use.",
    features: ["Sterile packaging", "High absorbency", "Multiple ply options", "Soft texture"],
    price: 18,
    stock: 800
  },
  {
    id: 32,
    name: "Medical Tape",
    category: "Medical Equipment",
    image: "/medical-images/medical tape.jpg",
    description: "Hypoallergenic medical tape for securing dressings and devices.",
    features: ["Hypoallergenic adhesive", "Breathable material", "Easy tear", "Multiple widths"],
    price: 15,
    stock: 500
  },
  {
    id: 33,
    name: "Blood Collection Tubes",
    category: "Medical Equipment",
    image: "/medical-images/blood collection tubes.jpg",
    description: "Vacuum blood collection tubes for laboratory testing.",
    features: ["Multiple additives", "Color-coded caps", "Sterile interior", "Vacuum sealed"],
    price: 45,
    stock: 1000
  },
  {
    id: 34,
    name: "Reagent Kits",
    category: "Medical Equipment",
    image: "/medical-images/reagent kits.jpg",
    description: "Medical diagnostic reagent kits for laboratory testing.",
    features: ["Ready-to-use", "Accurate results", "Long shelf life", "Multiple test types"],
    price: 250,
    stock: 200
  },
  {
    id: 35,
    name: "Pipette",
    category: "Medical Equipment",
    image: "/medical-images/pipette.jpg",
    description: "Precision pipettes for accurate liquid handling in laboratories.",
    features: ["Adjustable volume", "High accuracy", "Ergonomic design", "Autoclavable"],
    price: 180,
    stock: 150
  },
  {
    id: 36,
    name: "Bed Sheets",
    category: "Medical Equipment",
    image: "/medical-images/bed sheets.jpg",
    description: "Medical-grade bed sheets for patient comfort and hygiene.",
    features: ["Cotton/polyester blend", "Machine washable", "Multiple sizes", "Durable fabric"],
    price: 45,
    stock: 200
  },
  {
    id: 37,
    name: "Flashlight",
    category: "Medical Equipment",
    image: "/medical-images/flashlight.jpg",
    description: "Medical examination flashlight for patient assessment.",
    features: ["LED technology", "Bright illumination", "Compact size", "Battery operated"],
    price: 120,
    stock: 75
  },
  {
    id: 38,
    name: "Tongue Depressors",
    category: "Medical Equipment",
    image: "/medical-images/tongue depressors.jpg",
    description: "Wooden tongue depressors for oral examinations.",
    features: ["Smooth finish", "Sterile packaging", "Single-use", "Multiple sizes"],
    price: 8,
    stock: 1000
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'Medical Equipment', name: 'Medical Equipment' }
];
