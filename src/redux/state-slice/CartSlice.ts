import { SuccessToast } from "@/components/helper/validation";
import { IAddToCart, IStoreItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export interface CartState {
  cartItems: IStoreItem[];
  cartCount: number;
  comment: string;
}

const loadCartFromLocalStorage = (): CartState => {
  const storedCart =
    typeof window !== "undefined" ? localStorage.getItem("cart") : null;
  if (storedCart) {
    try {
      const parsedCart = JSON.parse(storedCart);
      return {
        cartItems: Array.isArray(parsedCart.cartItems)
          ? parsedCart.cartItems
          : [],
        cartCount: parsedCart.cartCount || 0,
        comment: parsedCart.comment || "",
      };
    } catch (error) {
      return { cartItems: [], cartCount: 0, comment: "" };
    }
  }
  return { cartItems: [], cartCount: 0, comment: "" };
};

const saveCartToLocalStorage = (state: CartState) => {
  typeof window !== "undefined" &&
    localStorage.setItem("cart", JSON.stringify(state));
};

const initialState: CartState = {
  ...loadCartFromLocalStorage(),
  comment: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (
      state,
      action: PayloadAction<IAddToCart & { quantity: number }>
    ) => {
      const { id, name, price, quantity, uuid, date } = {
        ...action.payload,
        uuid: uuidv4(),
        date: new Date().toISOString(),
      };
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.name === name && item.price === price
      );

      if (existingItemIndex === -1) {
        state.cartItems.push({
          ...action.payload,
          uuid,
          date,
        });
        SuccessToast("Product added to cart!");
      } else {
        state.cartItems[existingItemIndex].quantity += quantity;
        // ErrorToast("This product is already in your cart!");
      }
      state.cartCount = state.cartItems.length;
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.uuid !== action.payload
      );
      state.cartCount = state.cartItems.length;
      saveCartToLocalStorage(state);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.uuid === action.payload
      );

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
        state.cartCount = state.cartItems.length;
        saveCartToLocalStorage(state);
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.uuid === action.payload
      );
      if (itemIndex !== -1) {
        const item = state.cartItems[itemIndex];
        if (item.quantity > 1) {
          state.cartItems = state.cartItems.map((cartItem, index) =>
            index === itemIndex
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        }
        state.cartCount = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        saveCartToLocalStorage(state);
      }
    },
    addComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartCount = 0;
      state.comment = "";
      saveCartToLocalStorage(state); 
    },
  },
});
export const {
  setCart,
  addComment,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
