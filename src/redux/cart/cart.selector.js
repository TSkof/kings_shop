import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartItemsSumm = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((a, b) => a + (b.price * b.quantity), 0)
  );
export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((a, b) => a + b.quantity, 0)
);
