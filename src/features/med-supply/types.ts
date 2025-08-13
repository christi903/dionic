export interface SupplyProduct {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export interface CartItem {
  id: string; // can be product id as string or custom-*
  name: string;
  quantity: number;
}


