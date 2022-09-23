import { ADD_PRODUCTS } from "./actionTypes";
export function addProducts(items) {
  return {
    type: ADD_PRODUCTS,
    items,
  };
}
