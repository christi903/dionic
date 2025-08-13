import { useMemo, useState } from 'react';
import { CartItem, SupplyProduct } from '../types';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const totalItems = useMemo(() => items.reduce((acc, i) => acc + i.quantity, 0), [items]);

  const addProduct = (product: SupplyProduct, quantity: number) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === String(product.id));
      if (existing) {
        return prev.map(i => i.id === String(product.id) ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { id: String(product.id), name: product.name, quantity }];
    });
  };

  const addCustom = (name: string, quantity: number) => {
    const id = `custom-${Date.now()}`;
    setItems(prev => [...prev, { id, name, quantity }]);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const clear = () => setItems([]);

  const toWhatsAppText = () => {
    if (items.length === 0) return '';
    const lines = items.map(i => `- ${i.name} x ${i.quantity}`);
    return `Hello! I would like to order the following medical supplies:\n\n${lines.join('\n')}\n\nPlease provide pricing and availability.`;
  };

  return { items, totalItems, addProduct, addCustom, updateQuantity, removeItem, clear, toWhatsAppText };
};


