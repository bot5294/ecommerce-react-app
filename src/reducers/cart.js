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
      console.log("a2c s.i", state);
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
          console.log("i == a.i : " + i.name + " == " + action.item.name);
          nItems.push(i);
        }
      });
      return {
        items: nItems,
        count: state.count - action.item.icount,
      };
    case CLEAR_CART:
      // localStorage.clear();
      localStorage.removeItem("persist:root");
      // window.location.reload();
      return {
        items: [],
        count: 0,
      };
    default:
      return state;
  }
}
