import { ADD_2_CART } from "./actionTypes";
import { REMOVE_FROM_CART } from "./actionTypes";
import { DISPLAY_CART_COUNT } from "./actionTypes";
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

export function displayCartCount() {
  return { type: DISPLAY_CART_COUNT };
}
