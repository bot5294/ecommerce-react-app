import React from "react";
import styled from "styled-components";

export function Fof() {
  return <Error>Error: 404 Nothing here!</Error>;
}
const Error = styled.div`
  text-align: center;
  margin: 2em auto;
  color: red;
  font-weight: bold;
`;
