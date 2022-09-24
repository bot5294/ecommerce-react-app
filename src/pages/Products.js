import { React, useEffect, useState } from "react";
import Item from "../components/Item";
import styled from "styled-components";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import store from "../store";
import {
  addProducts,
  sortProducts,
  displayProducts,
} from "../actions/products";
import { API_URLS } from "../utils";
// import { v4 as uuidv4 } from "uuid";
export function Products(props) {
  // let backupItems = {};
  const [items, setItems] = useState(
    store.getState().products.items || props.data
  );
  console.log("items : ", items);
  const [isSorted, setIsSorted] = useState(false);
  // products.state
  // if (items.length === 0) {
  //   backupItems = props.data;
  // }
  useEffect(() => {
    console.log("useEffect called");
    fetch(API_URLS.products())
      .then((res) => res.json())
      .then((data) => {
        console.log("useEffect data= ", data);
        props.sendDataToStore(data);
      });
  }, [items]);
  const handleSortByPrice = () => {
    props.sortByPrice();
    setItems(store.getState().products.items);
    setIsSorted(true);
  };
  const handleUnsort = () => {
    setIsSorted(false);
    props.display(store.getState().products.items);
    setItems(store.getState().products.items);
  };
  return (
    <div>
      <SortBtn onClick={handleSortByPrice}>
        Sort By Price
        {console.log(isSorted)}
      </SortBtn>
      {isSorted === true && <Unsort onClick={handleUnsort}>X</Unsort>}
      {items.length > 0 &&
        items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      {/* {backupItems.length > 0 &&
        items.length === 0 &&
        backupItems.map((item, index) => {
          return <Item item={item} key={index} />;
        })} */}
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
const Unsort = styled.span`
  color: white;
  font-weight: bold;
  position: absolute;
  display: inline-block;
  margin-left: 10px;
  margin-top: 20px;
  background-color: red;
  border-radius: 50%;
  padding: 1px;
  cursor: default;
`;

function mapStateToProps(state) {
  const { items } = state.products || {};
  return { data: items };
}

const mapDispatchToProps = (dispatch) => ({
  sendDataToStore: (data) => dispatch(addProducts(data)),
  sortByPrice: () => dispatch(sortProducts()),
  display: (items) => dispatch(displayProducts(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
