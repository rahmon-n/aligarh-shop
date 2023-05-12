import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isCartOpen: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    }
  }
});

// cart actions
export const { setIsCartOpen, setCartItems } = cartSlice.actions;

// cart methods
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (cartItems, productToAdd) =>
  setCartItems(addCartItem(cartItems, productToAdd));

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  setCartItems(removeCartItem(cartItems, cartItemToRemove));

export const clearItemFromCart = (cartItems, cartItemToClear) =>
  setCartItems(clearCartItem(cartItems, cartItemToClear));

// cart reducer
export default cartSlice.reducer;
