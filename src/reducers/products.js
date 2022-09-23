import { ADD_PRODUCTS, SORT_BY_PRICE } from "../actions/actionTypes";

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
    case SORT_BY_PRICE:
      let items = state.state.items;
      // console.log("p reducer items.length = ", state);
      // let priceProducts = new Array(items.length);
      // for (let i = 0; i < priceProducts.length; i++) {
      //   priceProducts[i] = items[i].price;
      // }
      // priceProducts.sort((x, y) => x - y);

      // for (let i = 0; i < priceProducts.length; i++) {
      //   console.log(priceProducts[i]);
      // }
      items = items.sort((a, b) => a.price - b.price);
      console.log(items);
      return {
        state: {
          items: items,
        },
      };

    default:
      return state;
  }
}
