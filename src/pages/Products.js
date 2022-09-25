import { React, useEffect, useState } from "react";
import Item from "../components/Item";
import styled from "styled-components";
import { connect } from "react-redux";

import { createNotification } from "../utils/Notification";
import { deleteProduct } from "../actions/products";
import store from "../store";
import { addProducts, sortProducts } from "../actions/products";
import { API_URLS } from "../utils";

export function Products(props) {
  const [items, setItems] = useState(props.data);
  const [shouldFetch, setShouldFetch] = useState(false);
  console.log("items products.js : ", props.data);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    console.log("useEffect called");
    fetch(API_URLS.products())
      .then((res) => res.json())
      .then((data) => {
        console.log("useEffect data= ", data);
        props.sendDataToStore(data);
      });
  }, [shouldFetch, isSorted]);
  const handleSortByPrice = () => {
    props.sortByPrice();
    setItems(store.getState().products.items);
    setIsSorted(true);
  };
  const handleUnsort = () => {
    setItems(store.getState().products.items);
    setIsSorted(false);
  };
  const handleRemoveItem = (item) => {
    console.log("hri props", props);
    props.deleteItem(item);
    createNotification("success", "Item Removed");
    setItems(store.getState().products.items);
  };
  const handleEditItem = () => {
    console.log("hei : ");
    setItems(store.getState().products.items);
    setShouldFetch(true);
  };
  return (
    <div>
      <SortBtn onClick={handleSortByPrice}>Sort By Price</SortBtn>
      {isSorted === true && <Unsort onClick={handleUnsort}>X</Unsort>}
      {items.length > 0 &&
        items.map((item, index) => {
          return (
            <Item
              item={item}
              handleRemoveItem={(item) => handleRemoveItem(item)}
              handleEditItem={() => handleEditItem()}
              setItems={setItems}
              key={index}
            />
          );
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

  deleteItem: (item) => dispatch(deleteProduct(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
