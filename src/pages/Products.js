import { React, useEffect } from "react";
import { Item } from "../components/Item";
import styled from "styled-components";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import store from "../store";
import { addProducts, sortProducts } from "../actions/products";
import { API_URLS } from "../utils";
import { v4 as uuidv4 } from "uuid";
export function Products(props) {
  console.log("props.products = ", props);
  let items = store.getState().products.state.items || props.data;
  console.log("items = ", items);
  let isSortedClicked = false;
  useEffect(() => {
    fetch(API_URLS.products())
      .then((res) => res.json())
      .then((data) => {
        // items = data;
        console.log("useEffect data : ", data);
        props.sendDataToStore(data);
      });
  }, []);
  const handleSortByPrice = () => {
    let x = props.sortByPrice();
    x = store.getState().products.state.items;
    console.log("handleSortByPrice : ", x);
    items = x;
  };
  return (
    <div>
      <SortBtn onClick={handleSortByPrice}>Sort By Price</SortBtn>
      {items &&
        items.map((item) => {
          console.log("items = ", item);
          return <Item item={item} key={uuidv4()} />;
        })}
    </div>
  );
}
const SortBtn = styled.div`
  margin-top: 1em;
  margin-left: 85%;
  display: inline-block;
  padding: 5px;
  border-radius: 40px;
  background-color: white;
  cursor: default;
`;

function mapStateToProps(state) {
  console.log("inside products : ", state);
  const { items } = state.products.state || "";
  return { data: items };
}

const mapDispatchToProps = (dispatch) => ({
  sendDataToStore: (data) => dispatch(addProducts(data)),
  sortByPrice: () => dispatch(sortProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
