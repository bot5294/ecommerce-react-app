import React from "react";
import styled from "styled-components";
export default function Navbar() {
  return (
    <Nav>
      <Title>eCommerce</Title>
      <NavOption>Products</NavOption>
      <NavOption>
        Add a Product{" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
          width="15px"
          height="15px"
          alt="add-img"
        />
      </NavOption>
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
`;
