import {
  CartItemProps,
  CartActionsTypes,
  CartActionsTypesEnums,
} from "./cart.types";
import { onAddCartItem } from "./cart.utils";

type CartReducerTypes = {
  cartItems: CartItemProps[];
};

const INITIAL_STATE: CartReducerTypes = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action: CartActionsTypes) => {
  switch (action.type) {
    case CartActionsTypesEnums.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: onAddCartItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
