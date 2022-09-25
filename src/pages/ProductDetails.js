import React from "react";
import { add2Cart } from "../actions/cart";
import { connect } from "react-redux";
import { createNotification } from "../utils/Notification";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { genRatings } from "../utils";
export const ProductDetails = (props) => {
  // extract product id from search params
  const id = useParams();
  const items = props.data;
  let product = getProduct(items, id);
  console.log("id === ", id);
  function getProduct(items, id) {
    // using id and items array extract the specific id product
    let product;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id.id) {
        product = items[i];
      }
    }
    return product;
  }
  const handleAdd2Cart = (item) => {
    props.addItem2Cart(item);
    createNotification("success", "Added To Cart");
  };
  return (
    <>
      <ProductBox>
        <ProductImg>
          <IMG src={product.img} />
        </ProductImg>
        <Details>
          <H1>{product.name}</H1>
          <P>{product.desc}</P>
          <Ratings>
            {genRatings(product.rating).map((star, index) => (
              <Star src={star} key={index} />
            ))}
          </Ratings>
          <Price>
            <b>₹. {product.price}/-</b>
          </Price>
          <ADDBtn onClick={() => handleAdd2Cart(product)}>Add to cart</ADDBtn>
        </Details>
      </ProductBox>
    </>
  );
};

const ProductBox = styled.div`
  display: flex;
  text-align: center;
  padding: 2em;
`;
const ProductImg = styled.div`
  width: 40em;
  border: 1px solid black;
  background-color: white;
  padding: 5px;
`;
const IMG = styled.img`
  width: 300px;
  height: 350px;
`;
const Details = styled.div`
  //   display: flex;
  border: 1px solid grey;
  margin: 2px;
  padding: 10px;
`;
const H1 = styled.div`
  color: blue;
  font-sweight: bold;
  font-size: 4em;
`;
const P = styled.div`
  color: grey;
  font-weight: bolder;
  font-size: 1em;
`;
const Ratings = styled.div`
  padding: 10px;
`;
const Star = styled.img`
  width: 30px;
  height: 30px;
`;
const Price = styled.div``;
const ADDBtn = styled.button`
  color: white;
  background-color: green;
  margin: 4em;
  border: none;
  padding: 8px;
`;
function mapStateToProps(state) {
  const { items } = state.products || {};
  return { data: items };
}

const mapDispatchToProps = (dispatch) => ({
  addItem2Cart: (item) => dispatch(add2Cart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
