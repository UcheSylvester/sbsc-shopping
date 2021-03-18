import { findExistingItem } from "../../utils/utils";
import { CartItemProps } from "./cart.types";

export const onAddCartItem = (
  cartItems: CartItemProps[],
  cartItemToAdd: CartItemProps,
) => {
  const { _id } = cartItemToAdd || {};

  // Check if cartItem is already existing
  const existingCartItem = findExistingItem({
    items: cartItems,
    key: "_id",
    value: _id as string,
  });

  // Add the cartItem as new if it wasn't existing
  if (!existingCartItem)
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

  // Increase the quantity if it's already existing
  return cartItems.map((cartItem) =>
    cartItem._id === existingCartItem._id
      ? {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        }
      : cartItem,
  );
};
