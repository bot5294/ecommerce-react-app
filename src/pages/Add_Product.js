import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getById } from "../utils";
import { createNotification } from "../utils/Notification";
import { addProduct } from "../actions/products";
export function AddProduct(props) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let name = getById("_name").value;
    let desc = getById("_desc").value;
    let price = getById("_price").value;
    let rating = getById("_rating").value;
    console.log(name, desc, price, rating);
    try {
      const data = {
        name,
        desc,
        price,
        rating,
        img: "",
      };
      console.log("data : ", data);
      props.addItem(data);
      createNotification("success", "Item Added!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <FormBox>
        <b>Add a Product</b>
        <Form>
          <label>
            Name
            <br />
            <input id="_name" />
            <br />
          </label>
          <label>
            Description
            <br />
            <textarea id="_desc" />
            <br />
          </label>
          <label>
            Price
            <br />
            <input id="_price" />
            <br />
          </label>
          <label>
            Rating
            <br />
            <input id="_rating" />
            <br />
          </label>
          <Button onClick={(e) => handleFormSubmit(e)}>Add</Button>
        </Form>
      </FormBox>
    </>
  );
}

const FormBox = styled.div`
  padding: 1em;
  background-color: white;
  margin: 0 auto;
  width: 20em;
  margin-top: 2em;
`;
const Form = styled.form`
  font-weight: 500;
  padding: 20px;
`;
const Button = styled.button`
  background-color: white;
  border: 1px solid grey;
  box-shadow: -1px 1px grey;
  position: absolute;
  margin-left: 18em;
`;

// function mapStateToProps(state) {
//   const { items } = state.products || {};
//   return { data: items };
// }

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addProduct(item)),
});

export default connect(null, mapDispatchToProps)(AddProduct);
