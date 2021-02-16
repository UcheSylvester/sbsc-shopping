import { ProductItemProps } from "../products-collection/products-collection.types";

export enum CartActionsTypesEnums {
  UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
  CLEAR_CART_ITEM = "CLEAR_CART_ITEM",
  CLEAR_ENTIRE_CART = "CLEAR_ENTIRE_CART",
}

export type CartItemProps = {
  quantity: number;
} & ProductItemProps;

export type UpdateCartItem = {
  type: CartActionsTypesEnums.UPDATE_CART_ITEM;
  payload: CartItemProps;
};

export type ClearCartItem = {
  type: CartActionsTypesEnums.CLEAR_CART_ITEM;
  payload: CartItemProps;
};

export type ClearEntireCart = {
  type: CartActionsTypesEnums.CLEAR_ENTIRE_CART;
};

export type CartActionsTypes = UpdateCartItem | ClearCartItem | ClearEntireCart;
