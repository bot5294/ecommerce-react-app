import React from "react";
import styled from "styled-components";
import { API_URLS } from "../utils";

export function Home() {
  return (
    <Box>
      <HomeTitle>Limitations of this project :</HomeTitle>
      <Limits>
        <h5>
          😅 Products are fetched from{" "}
          <a href={API_URLS.products()}>{API_URLS.products()}</a>
        </h5>
        <h5>
          🤫 State Changes are not persistant like: if an item is deleted, It
          will be back on next fetch as API doesn't support changes
        </h5>
        <h5>
          😱 This is a pure React Front End Project, Not Connected To any
          Database
        </h5>
        <h5>
          💘 "Place Order" button in cart is disabled [It's there for
          beautification only']
        </h5>
        <h4>
          😒 Problem Statement of this project can be found at this url =>{" "}
          <a href="https://docs.google.com/document/d/11b-MXagrJlvd_dQzGHH4jWj_gwu_JV5QNNHq0KPOIAE/edit">
            Click here!
          </a>
        </h4>
      </Limits>
    </Box>
  );
}
const HomeTitle = styled.div`
  text-align: center;
  font-size: 52px;
`;
const Limits = styled.div`
  text-align: center;
  margin: 2em;
`;
const Box = styled.div`
  background-color: white;
  margin: 0 auto;
  margin-top: 2em;
  padding: 1em;
  width: 60em;
  color: grey;
`;
