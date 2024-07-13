import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProducts } from '@/Types/ProductsTypes';

interface CartItem extends TProducts {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProducts>) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item._id === product._id);

      if (existingItem) {
        // If the item exists, increase its quantity by 1
        existingItem.quantity += 1;
      } else {
        // If the item does not exist, add it to the cart with quantity 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item._id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
