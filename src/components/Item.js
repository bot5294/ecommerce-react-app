import React from "react";
import styled from "styled-components";
// import { connect } from "react-redux";

export const Item = (props) => {
  const fstar = "https://cdn-icons-png.flaticon.com/512/477/477406.png";
  const estar = "https://cdn-icons-png.flaticon.com/512/1828/1828961.png";
  let item = props.item;
  const genRatings = (count) => {
    let i = 1;
    let arr = [];
    console.log(count);
    while (i <= count) {
      arr.push(fstar);
      i++;
    }
    console.log(arr);
    while (i <= 5) {
      arr.push(estar);
      i++;
    }
    return arr;
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
              {genRatings(item.rating).map((star) => (
                <Star src={star} />
              ))}
            </div>
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
  //   background-image: url("https://cdn-icons-png.flaticon.com/512/477/477406.png");
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
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Item);
