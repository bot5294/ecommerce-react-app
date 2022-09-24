import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../actions/cart";
export const Cart = (props) => {
  console.log("cart : ", props);

  const { items } = props.data;
  const getTotal = () => {
    let total = 0;
    items.map((item) => {
      total += item.price * item.icount;
    });
    return total;
  };
  const handleClearCart = () => {
    console.log("i am clickled");
    alert("cart cleared");
    props.clearCart();
  };
  return (
    <>
      <CartImg>
        <img
          src="https://cdn-icons-png.flaticon.com/512/679/679701.png"
          width="50px"
          alt="cart-img"
        />
      </CartImg>
      <CartBox>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.icount}</td>
                  <RemoveBtn>X</RemoveBtn>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Total>Grand Total = Rs. {getTotal()}</Total>
        <CartOperations>
          <ClearBtn onClick={handleClearCart}>Clear Cart</ClearBtn>
          <OrderBtn disabled>Place Order</OrderBtn>
        </CartOperations>
      </CartBox>
    </>
  );
};
const CartImg = styled.div`
  text-align: center;
  margin: 1em;
`;
const CartBox = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 40em;
  padding: 1em;
`;
const RemoveBtn = styled.div`
  text-align: center;
  padding: 8px;
  color: red;
  font-weight: bold;
`;
const CartOperations = styled.div`
  display: flex;
`;
const Total = styled.h4`
  color: green;
  font-weightl: bold;
  margin-left: 70%;
`;
const ClearBtn = styled.button`
  background-color: red;
  color: whitesmoke;
  font-weight: bold;
  padding: 4px;
  margin-right: 5px;
`;
const OrderBtn = styled.button`
  background-color: grey;
  color: whitesmoke;
  font-weight: bold;
  padding: 4px;
`;
const mapStateToProps = (state) => ({ data: state.cart });

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
