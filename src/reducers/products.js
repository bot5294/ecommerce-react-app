import { ADD_PRODUCTS } from "../actions/actionTypes";

const productsInitialState = {
  items: [],
  count: 0,
};

export default function products(state = productsInitialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      console.log("reducers action :", action.items);
      console.log("reducers state :", state);
      return {
        state: {
          items: action.items,
        },
      };

    default:
      return state;
  }
}
