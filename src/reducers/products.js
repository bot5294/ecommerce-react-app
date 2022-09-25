import {
  ADD_PRODUCTS,
  EDIT_PRODUCT,
  SORT_BY_PRICE,
  REMOVE_PRODUCT,
  ADD_PRODUCT,
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
    case ADD_PRODUCT: {
      return {
        items: [...state.items, action.item],
      };
    }
    case SORT_BY_PRICE:
      let items = { state: state };
      items = state.items;
      // sort the items in ascending order on basis of price
      items = items.sort((a, b) => a.price - b.price);
      return {
        items: [...items],
      };
    case EDIT_PRODUCT:
      // update the specific product by using id from action
      action.item.img = state.items[action.item.id].img;
      state.items[action.item.id] = action.item;
      return {
        items: [...state.items],
      };
    case REMOVE_PRODUCT:
      let restItems = [];
      state.items.map((i) => {
        if (i.id !== action.item.id) {
          // if id is not that which we want to remove then add it to new array
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
