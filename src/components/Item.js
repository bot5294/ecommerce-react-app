import React from "react";
import styled from "styled-components";
import { add2Cart } from "../actions/cart";
import { connect } from "react-redux";
import { createNotification } from "../utils/Notification";
export const Item = (props) => {
  const fstar = "https://cdn-icons-png.flaticon.com/512/477/477406.png";
  const estar = "https://cdn-icons-png.flaticon.com/512/1828/1828961.png";
  let item = props.item;
  console.log("item.js : ", props);
  const genRatings = (count) => {
    let i = 1;
    let arr = [];
    while (i <= count) {
      arr.push(fstar);
      i++;
    }
    while (i <= 5) {
      arr.push(estar);
      i++;
    }
    return arr;
  };
  const handleAdd2Cart = (item) => {
    props
      .addItem2Cart(item)
      .then(() => createNotification("success", "Added To Cart"));
  };
  return (
    <>
      <ItemCard>
        <ItemInfo>
          <div style={{ padding: "1em" }}>
            <img src={item.img} alt="item-img" width="110px" height="100px" />
          </div>
          <Dflex>
            <div>{item.name}</div>
            <div>
              <small>Rs.{item.price}</small>
            </div>
            <div>
              {genRatings(item.rating).map((star, index) => (
                <Star src={star} key={index} />
              ))}
            </div>
            <Add2CartBtn onClick={() => handleAdd2Cart(item)}>
              Add to cart
            </Add2CartBtn>
          </Dflex>
        </ItemInfo>
        <ItemDetail>
          <p>{item.desc}</p>
          <EditTools>
            <span style={{ cursor: "default" }}>✏️ </span>
            <br />
            <span style={{ cursor: "default" }}> 🗑️</span>
          </EditTools>
        </ItemDetail>
      </ItemCard>
    </>
  );
};

const ItemCard = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-top: 1em;
`;
const ItemInfo = styled.div`
  display: flex;
`;
const ItemDetail = styled.div`
  padding-top: 1em;
  display: flex;
`;
const Star = styled.img`
  width: 10px;
  height: 10px;
`;
const Dflex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1em;
`;
const EditTools = styled.div`
  align-self: flex-end;
  padding-right: 1em;
  padding-bottom: 1em;
`;
const Add2CartBtn = styled.button`
  color: white;
  background-color: green;
  margin: 5px;
  border: none;
  padding: 8px;
`;
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addItem2Cart: (item) => dispatch(add2Cart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
