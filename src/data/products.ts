export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  // All medical devices have been removed
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
