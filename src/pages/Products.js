import { React, useEffect } from "react";
import { Item } from "../components/Item";
import styled from "styled-components";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { addProducts } from "../actions/products";
import { API_URLS } from "../utils";
let items = [];
export function Products(props) {
  useEffect(() => {
    fetch(API_URLS.products())
      .then((res) => res.json())
      .then((data) => {
        items = data;
        console.log("sendDataTo ", props);
        props.sendDataToStore(data);
      });
  }, [items]);
  const handleSortByPrice = () => {
    items = items.sort();
    console.log(items);
  };
  return (
    <div>
      <SortBtn onClick={handleSortByPrice}>Sort By Price</SortBtn>
      {items &&
        items.map((item, index) => {
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
  return { count: state.cart };
}

const mapDispatchToProps = (dispatch) => ({
  sendDataToStore: (data) => dispatch(addProducts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
