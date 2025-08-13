import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Trash2, Send } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onAddCustom: (name: string, qty: number) => void;
  onSendWhatsApp: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose, items, onUpdateQty, onRemove, onAddCustom, onSendWhatsApp }) => {
  const [customName, setCustomName] = useState('');
  const [customQty, setCustomQty] = useState(1);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.aside
        className="absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white shadow-2xl flex flex-col"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100"><X className="h-5 w-5" /></button>
        </div>

        <div className="flex-1 overflow-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-gray-500 text-sm">Your cart is empty. Add items to proceed.</div>
          ) : (
            items.map(item => (
              <div key={item.id} className="border rounded-lg p-3 flex items-center gap-3">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{item.name}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))} className="px-3 py-1 rounded border">-</button>
                  <input type="number" min={1} value={item.quantity} onChange={(e) => onUpdateQty(item.id, Math.max(1, Number(e.target.value) || 1))} className="w-16 px-2 py-1 border rounded text-center" />
                  <button onClick={() => onUpdateQty(item.id, item.quantity + 1)} className="px-3 py-1 rounded border">+</button>
                </div>
                <button onClick={() => onRemove(item.id)} className="p-2 rounded hover:bg-red-50 text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))
          )}
        </div>

        <div className="border-t p-5 space-y-4">
          <div className="text-sm font-medium">Add custom item</div>
          <div className="flex items-center gap-2">
            <input value={customName} onChange={(e) => setCustomName(e.target.value)} placeholder="Item name" className="flex-1 px-3 py-2 border rounded" />
            <input type="number" min={1} value={customQty} onChange={(e) => setCustomQty(Math.max(1, Number(e.target.value) || 1))} className="w-20 px-3 py-2 border rounded" />
            <button onClick={() => { if (customName.trim()) { onAddCustom(customName.trim(), customQty); setCustomName(''); setCustomQty(1);} }} className="px-3 py-2 rounded bg-gray-900 text-white"><Plus className="h-4 w-4" /></button>
          </div>
          <button onClick={onSendWhatsApp} className="w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 text-white font-medium flex items-center justify-center gap-2"><Send className="h-4 w-4" /> Send via WhatsApp</button>
        </div>
      </motion.aside>
    </div>
  );
};

export default CartDrawer;


