import {
  ADD_PRODUCTS,
  DISPLAY_PRODUCTS,
  SORT_BY_PRICE,
} from "../actions/actionTypes";

const productsInitialState = {
  items: [],
  count: 0,
};

export default function products(state = productsInitialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        items: [...action.items],
      };
    case SORT_BY_PRICE:
      let items = { state: state };
      items = state.items;
      items = items.sort((a, b) => a.price - b.price);
      return {
        items: [...items],
      };
    case DISPLAY_PRODUCTS:
      let nItems = [...action.items];
      return {
        items: nItems,
      };
    default:
      return state;
  }
}
