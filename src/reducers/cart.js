import {
  ADD_2_CART,
  REMOVE_FROM_CART,
  DISPLAY_CART_COUNT,
} from "../actions/actionTypes";

const cartInitialState = {
  items: [],
  count: 0,
};

export default function cart(state = cartInitialState, action) {
  switch (action.type) {
    case ADD_2_CART:
      return {
        state: {
          items: state.items.concat(action.item),
          count: state.count + 1,
        },
      };
    case REMOVE_FROM_CART:
      let nState = state.items;
      nState.filter((item) => (item === action.item ? "" : item));
      return {
        state: {
          items: nState,
          count: state.count > 0 ? state.count - 1 : 0,
        },
      };
    case DISPLAY_CART_COUNT:
      return state;
    default:
      return state;
  }
}
