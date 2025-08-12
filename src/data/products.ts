export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [];

export const categories = [
  { id: 'all', name: 'All Products' }
];
