import { React, useState } from "react";
import styled from "styled-components";
import { add2Cart } from "../actions/cart";
import { connect } from "react-redux";
import { createNotification } from "../utils/Notification";
import { useNavigate } from "react-router-dom";
import { genRatings, getById } from "../utils";
import { editProduct } from "../actions/products";
import store from "../store";
export const Item = (props) => {
  const navigate = useNavigate();
  let item = props.item;
  // ediFlag is used for conditional rendering if user press pensil(edit) btn the
  // display input fields and when eidtFlag is false then
  // show data
  const [editFlag, setEditFlag] = useState(false);
  const handleAdd2Cart = (item) => {
    props.addItem2Cart(item);
    createNotification("success", "Added To Cart");
  };
  const handleDisplayDetail = (id) => {
    // onClick of product image redirect to respective product-details page
    navigate({
      pathname: `/productDetails/${id}`,
    });
  };
  const handleEditItem = () => {
    // this works as toggle for edit features
    setEditFlag(true);
  };
  const handleCancel = () => {
    createNotification("warning", "product Update Cancelled");
    setEditFlag(false);
  };
  const handleSave = (id) => {
    // get the values
    // getById is a shorthand custom function for document.getElementById
    // defined in utils.js
    let name = getById("_pname").value || item.name;
    let desc = getById("_pdesc").value || item.desc;
    let price = getById("_pprice").value || item.price;
    let rating = getById("_prating").value || item.rating;
    let data = {
      id: id,
      name,
      desc,
      price,
      rating,
    };
    props.ediProd(data);
    setEditFlag(false);
    createNotification("success", "Item Updated Successfully");
    props.setItems(store.getState().products.items);
  };
  return (
    <>
      <ItemCard>
        <ItemInfo>
          <div
            style={{ padding: "1em" }}
            onClick={() => handleDisplayDetail(item.id)}
          >
            <img src={item.img} alt="item-img" width="110px" height="100px" />
          </div>
          {editFlag ? (
            <Dflex>
              <div>
                Product Name :
                <input id="_pname" placeholder={item.name} />
              </div>
              <div>
                Price :
                <small>
                  Rs.
                  <input id="_pprice" placeholder={item.price} />
                </small>
              </div>
              <div>
                Ratings :
                <input id="_prating" placeholder={item.rating} />
              </div>
            </Dflex>
          ) : (
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
          )}
        </ItemInfo>
        {editFlag ? (
          <>
            <EditSpecial>
              <p>
                <textarea
                  id="_pdesc"
                  rows={5}
                  cols={50}
                  placeholder={item.desc}
                />
              </p>
              <CancelBtn onClick={handleCancel}>Cancel</CancelBtn>
              <SaveBtn onClick={() => handleSave(item.id)}>Save</SaveBtn>
            </EditSpecial>
          </>
        ) : (
          <ItemDetail>
            <p>{item.desc}</p>
            <EditTools>
              <EditBtn onClick={() => handleEditItem()}>✏️ </EditBtn>
              <br />
              <DeleteBtn onClick={() => props.handleRemoveItem(item)}>
                {" "}
                🗑️
              </DeleteBtn>
            </EditTools>
          </ItemDetail>
        )}
      </ItemCard>
    </>
  );
};
// styling
const ItemCard = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 1em auto;
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

const DeleteBtn = styled.div`
  cursor: default;
  display: inline;
`;
const EditBtn = styled.div`
  cursor: default;
  display: inline;
`;
const CancelBtn = styled.button``;
const SaveBtn = styled.button`
  color: white;
  background-color: green;
  margin-left: 10px;
`;
const EditSpecial = styled.div`
  padding: 18px;
`;
// const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addItem2Cart: (item) => dispatch(add2Cart(item)),
  ediProd: (item) => dispatch(editProduct(item)),
});

export default connect(null, mapDispatchToProps)(Item);
