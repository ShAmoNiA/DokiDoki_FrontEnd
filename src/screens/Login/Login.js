import React, { Component } from "react";
import "./Login.css";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox/index";
import { useHistory } from "react-router-dom";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Login(props) {
  return (
    <AppContainer>
      <AccountBox {...props} />
    </AppContainer>
  );
}

export default Login;
