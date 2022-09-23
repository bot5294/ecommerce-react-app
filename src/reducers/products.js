import { ADD_PRODUCTS } from "../actions/actionTypes";

const productsInitialState = {
  items: [],
};

export default function products(state = productsInitialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        state: {
          items: action.items,
        },
      };

    default:
      return state;
  }
}
