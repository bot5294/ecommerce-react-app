import { React, useEffect } from "react";
import { Item } from "../components/Item";
import styled from "styled-components";
// import { db } from "../firebase";
import { API_URLS } from "../utils";
let items = [];
export function Products() {
  useEffect(() => {
    fetch(API_URLS.products())
      .then((res) => res.json())
      .then((data) => {
        items = data;
      });
  }, []);
  const handleSortByPrice = () => {
    items = items.sort();
    console.log(items);
  };
  return (
    <div>
      <SortBtn onClick={handleSortByPrice}>Sort By Price</SortBtn>
      {items &&
        items.map((item, index) => {
          console.log("item = ", item);
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
