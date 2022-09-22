import { ADD_2_CART } from "./actionTypes";
import { REMOVE_FROM_CART } from "./actionTypes";

export function add2Cart(item) {
  return {
    type: ADD_2_CART,
    item,
  };
}

export function removeCartItem(item) {
  return {
    type: REMOVE_FROM_CART,
    item,
  };
}
