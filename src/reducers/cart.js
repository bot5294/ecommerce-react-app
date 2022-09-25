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
      // add individual count "icount" as 1 for 1st time next
      // time increment the icount as well as count
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.item.id) {
          state.items[i].icount++;
          return {
            items: [...state.items],
            count: state.count + 1,
          };
        }
      }
      action.item.icount = 1;
      return {
        items: [...state.items, action.item],
        count: state.count + 1,
      };
    case REMOVE_FROM_CART:
      let nItems = [];
      state.items.map((i) => {
        if (i !== action.item) {
          // if item is not that we wanted to delete then add it to new array
          nItems.push(i);
        }
      });
      return {
        items: nItems,
        count: state.count - action.item.icount,
      };
    case CLEAR_CART:
      //remove localStorage data
      localStorage.removeItem("persist:root");
      // return the initial state
      return {
        items: [],
        count: 0,
      };
    default:
      return state;
  }
}
