import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface QuantityModalProps {
  isOpen: boolean;
  productName: string;
  onClose: () => void;
  onConfirm: (quantity: number) => void;
}

const QuantityModal: React.FC<QuantityModalProps> = ({ isOpen, productName, onClose, onConfirm }) => {
  const [qty, setQty] = useState(1);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold">Add to cart</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100"><X className="h-5 w-5" /></button>
        </div>
        <div className="p-5 space-y-4">
          <div className="text-sm text-gray-700">Product</div>
          <div className="font-medium">{productName}</div>
          <div className="text-sm text-gray-700">Quantity</div>
          <div className="flex items-center gap-2">
            <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-2 rounded border">-</button>
            <input type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))} className="w-24 px-3 py-2 border rounded" />
            <button onClick={() => setQty(q => q + 1)} className="px-3 py-2 rounded border">+</button>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
            <button onClick={() => { onConfirm(qty); onClose(); }} className="px-4 py-2 rounded bg-blue-600 text-white">Add</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuantityModal;


