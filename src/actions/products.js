import { ADD_PRODUCTS } from "./actionTypes";
import { SORT_BY_PRICE } from "./actionTypes";
export function addProducts(items) {
  return {
    type: ADD_PRODUCTS,
    items,
  };
}

export function sortProducts() {
  return {
    type: SORT_BY_PRICE,
  };
}
