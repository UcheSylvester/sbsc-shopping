import {
  CartItemProps,
  CartActionsTypes,
  CartActionsTypesEnums,
} from "./cart.types";
import { onUpdateCartItem } from "./cart.utils";

type CartReducerTypes = {
  cartItems: CartItemProps[];
};

const INITIAL_STATE: CartReducerTypes = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action: CartActionsTypes) => {
  switch (action.type) {
    case CartActionsTypesEnums.UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems: onUpdateCartItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
