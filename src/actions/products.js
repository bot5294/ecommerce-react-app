import { ADD_PRODUCTS, EDIT_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";
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
export function deleteProduct(item) {
  return {
    type: REMOVE_PRODUCT,
    item,
  };
}
export function editProduct(item) {
  return {
    type: EDIT_PRODUCT,
    item,
  };
}
