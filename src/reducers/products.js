import {
  ADD_PRODUCTS,
  EDIT_PRODUCT,
  SORT_BY_PRICE,
  REMOVE_PRODUCT,
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
    case EDIT_PRODUCT:
      console.log("ep a.i = ", action.item);
      action.item.img = state.items[action.item.id].img;
      state.items[action.item.id] = action.item;
      return {
        items: [...state.items],
      };
    case REMOVE_PRODUCT:
      let restItems = [];
      state.items.map((i) => {
        if (i.id !== action.item.id) {
          console.log("i == a.i : " + i.id + " == " + action.item.id);
          restItems.push(i);
        }
      });
      return {
        items: restItems,
      };
    default:
      return state;
  }
}
