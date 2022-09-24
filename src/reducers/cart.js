import {
  ADD_2_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../actions/actionTypes";

const cartInitialState = {
  items: [],
  count: 0,
};

export default function cart(state = cartInitialState, action) {
  switch (action.type) {
    case ADD_2_CART:
      if (state.items.includes(action.item)) {
        action.item.icount++;
        return {
          items: [...state.items],
          count: state.count + 1,
        };
      }
      action.item.icount = 1;
      return {
        items: [...state.items, action.item],
        count: state.count + 1,
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
    case CLEAR_CART:
      localStorage.clear();
      window.location.reload();
      return state;
    default:
      return state;
  }
}
