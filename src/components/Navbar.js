import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
export function Navbar(props) {
  return (
    <Nav>
      <StyledLink
        to="/"
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        <Title>eCommerce</Title>
      </StyledLink>
      <NavOption>
        <StyledLink to="/products">Products</StyledLink>
      </NavOption>
      <NavOption>
        <StyledLink to="/addProduct">
          Add a Product{" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
            width="15px"
            height="15px"
            alt="add-img"
          />
        </StyledLink>
      </NavOption>
      <Link to="/cart">
        <Cart>
          <img
            src="https://cdn-icons-png.flaticon.com/512/679/679701.png"
            width="25px"
            alt="cart-img"
          />
          {/* fetching count from redux store and displaying here */}
          <CartCounter>{props.count}</CartCounter>
        </Cart>
      </Link>
      <Userlogo>
        <UserName>John Doe</UserName>
        <UserDp>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8529/8529896.png"
            width="40px"
            height="40px"
            alt="user-dp"
          />
        </UserDp>
      </Userlogo>
    </Nav>
  );
}

const Nav = styled.div`
  background-color: whitesmoke;
  display: flex;
  width: 100%;
`;
const Title = styled.span`
  color: rgb(55, 185, 217);
  margin-left: 1em;
  padding: 15px;
  font-weight: bold;
  font-size: 1.3em;
`;
const NavOption = styled.span`
  padding: 20px;
`;
const Userlogo = styled.span`
  position: absolute;
  margin-left: 85%;
  padding: 20px;
  display: flex;
  align-items: start;
`;
const UserName = styled.div`
  display: inline-block;
  font-weight: bold;
  @media (max-width: 1100px) {
    display: none;
  }
`;
const UserDp = styled.div`
  margin-left: 8px;
  padding: 2px;
  margin-top: -15px;
  margin-bottom: 10%;
  border: 1px solid grey;
  border-radius: 25%;
  background-color: lightgrey;
  @media (max-width: 560px) {
    display: none;
  }
`;
const Cart = styled.div`
  display: inline-block;
  padding: 20px;
  padding-left-0px
`;
const CartCounter = styled.div`
  display: inline;
  position: absolute;
  margin-top: -15px;
  background-color: red;
  border: 1px solid white;
  border-radius: 50%;
  font-size: 10px;
  padding: 2px;
  color: white;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 15px;
`;

function mapStateToProps(state) {
  return { count: state.cart.count };
}

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Navbar);
