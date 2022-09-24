import { ADD_PRODUCTS, DISPLAY_PRODUCTS } from "./actionTypes";
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

export function displayProducts(items) {
  return {
    type: DISPLAY_PRODUCTS,
    items,
  };
}
