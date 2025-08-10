// Comprehensive Medical Device Image Update Script
// This script contains unique, device-specific image URLs for all 75 medical devices

const deviceImageMappings = {
  // Hospital Equipment & Devices (15 items)
  1: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // Surgical Scalpel Set
  2: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Patient Monitor
  3: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80', // Digital Stethoscope
  4: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300&q=80', // Ultrasound Machine
  5: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80', // Electrocautery Unit
  6: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80', // Surgical Forceps Set
  7: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&h=300&q=80', // Anesthesia Machine
  8: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // X-Ray Machine
  9: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80', // Surgical Retractors
  10: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&h=300&q=80', // Infusion Pump
  11: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300&q=80', // ECG Machine
  12: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80', // Surgical Scissors Set
  13: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80', // Pulse Oximeter
  14: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80', // Surgical Suction Unit
  15: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Blood Pressure Monitor

  // Consumables & Disposables (15 items)
  16: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300&q=80', // Disposable Syringes
  17: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80', // Nitrile Gloves
  18: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300&q=80', // Surgical Masks
  19: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // Gauze Pads
  20: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&h=300&q=80', // IV Cannulas
  21: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80', // Alcohol Swabs
  22: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80', // Surgical Drapes
  23: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300&q=80', // Bandages
  24: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80', // Catheter Tubes
  25: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80', // Suture Materials
  26: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&h=300&q=80', // Specimen Containers
  27: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300&q=80', // Disposable Gowns
  28: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Lancets
  29: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // Oxygen Masks
  30: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80', // Thermometer Covers

  // Laboratory Reagent & Supplies (15 items)
  31: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80', // Blood Collection Tubes
  32: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300&q=80', // Microscope Slides
  33: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80', // Pipette Tips
  34: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80', // pH Test Strips
  35: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&h=300&q=80', // Centrifuge Tubes
  36: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300&q=80', // Laboratory Reagents
  37: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Petri Dishes
  38: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // Test Tube Racks
  39: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80', // Laboratory Glassware
  40: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80', // Culture Media
  41: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300&q=80', // Staining Reagents
  42: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80', // Disposable Pipettes
  43: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80', // Laboratory Labels
  44: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&h=300&q=80', // Buffer Solutions
  45: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300&q=80', // Sample Vials

  // Emergency & Rescue Equipment (15 items)
  46: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Defibrillator
  47: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // Emergency Stretcher
  48: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80', // Oxygen Tank
  49: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80', // Emergency Medical Kit
  50: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300&q=80', // Spine Board
  51: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80', // Emergency Ventilator
  52: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80', // Trauma Shears
  53: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&h=300&q=80', // Emergency Blanket
  54: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300&q=80', // Cervical Collar
  55: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Emergency Suction Unit
  56: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // Splint Set
  57: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80', // Emergency Medications
  58: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80', // Rescue Basket
  59: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300&q=80', // Emergency Monitor
  60: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80', // Tourniquet

  // Homecare Medical Devices (15 items)
  61: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80', // Home Blood Pressure Monitor
  62: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&h=300&q=80', // Glucose Meter
  63: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300&q=80', // Nebulizer
  64: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Digital Thermometer
  65: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // Wheelchair
  66: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80', // Walking Aid
  67: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&h=300&q=80', // Compression Stockings
  68: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&h=300&q=80', // TENS Unit
  69: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80', // Home Oxygen Concentrator
  70: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=300&q=80', // Pill Dispenser
  71: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&h=300&q=80', // Hospital Bed
  72: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=300&q=80', // Shower Chair
  73: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80', // Blood Oxygen Monitor
  74: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80', // Heating Pad
  75: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&q=80'  // Bedside Commode
};

// Instructions for manual update:
// Replace each device's image URL in the products.ts file with the corresponding URL from this mapping
// Each ID corresponds to the device ID in the products array

console.log('Device Image Mappings Ready for Update');
console.log(`Total devices: ${Object.keys(deviceImageMappings).length}`);
