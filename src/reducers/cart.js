import { ADD_2_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_2_CART:
      return {
        state: state.concat(action.item),
      };
    case REMOVE_FROM_CART:
      let nState = state;
      nState.filter((item) => (item === action.item ? "" : item));
      return {
        state: nState,
      };
    default:
      return state;
  }
}
