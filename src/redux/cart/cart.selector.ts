import { createSelector } from "reselect";
import { AppStateTypes } from "../root.reducer";

export const selectCartReducer = (state: AppStateTypes) => state.cartReducer;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartItems,
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0),
);
