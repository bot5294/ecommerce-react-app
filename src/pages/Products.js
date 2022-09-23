import { React, useEffect, useState } from "react";
import { Item } from "../components/Item";
import styled from "styled-components";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import store from "../store";
import { addProducts, sortProducts } from "../actions/products";
import { API_URLS } from "../utils";
// import { v4 as uuidv4 } from "uuid";
export function Products(props) {
  let backupItems = {};
  console.log("props : ", props);
  console.log("store.getState : ", store.getState().products.items);
  const [items, setItems] = useState(
    props.data || store.getState().products.items
  );
  // products.state
  if (items.length === 0) {
    backupItems = props.data;
  }
  console.log("items: ", items);
  useEffect(() => {
    console.log("useEffect ");
    fetch(API_URLS.products())
      .then((res) => res.json())
      .then((data) => {
        // items = data;
        console.log("useEffect data : ", data);
        props.sendDataToStore(data);
        // if (performance.navigation.type === 1) {
        // setItems(data);
        // }
      });
  }, [items]);
  const handleSortByPrice = () => {
    props.sortByPrice();
    setItems(store.getState().products.items);
  };
  return (
    <div>
      <SortBtn onClick={handleSortByPrice}>Sort By Price</SortBtn>
      {items.length > 0 &&
        items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      {backupItems.length > 0 &&
        items.length === 0 &&
        backupItems.map((item, index) => {
          return <Item item={item} key={index} />;
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
  const { items } = state.products || {};
  return { data: items };
}

const mapDispatchToProps = (dispatch) => ({
  sendDataToStore: (data) => dispatch(addProducts(data)),
  sortByPrice: () => dispatch(sortProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
