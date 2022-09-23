import { ADD_PRODUCTS, SORT_BY_PRICE } from "../actions/actionTypes";

const productsInitialState = {
  items: [],
  count: 0,
};

export default function products(state = productsInitialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      // console.log("reducers action :", action.items);
      // console.log("reducers state :", state);
      return {
        items: action.items,
      };
    case SORT_BY_PRICE:
      console.log("sort-by-price : ", state);
      let items = { state: state };
      items = state.items;
      items = items.sort((a, b) => a.price - b.price);
      console.log("sbp items :", items);
      console.log(items);
      return {
        items: items,
      };

    default:
      return state;
  }
}
