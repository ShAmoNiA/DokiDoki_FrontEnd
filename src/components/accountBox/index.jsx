import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { ForgetPasswordForm } from "./forgetPasswordForm";
import SignupSuccessForm from "./signupSuccessForm";
import ForgetPasswordSuccessForm from './forgetPasswordSuccess';
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";

const BoxContainer = styled.div`
  width: 280px;
  /* padding-right: 10px; */
  max-height: 635px;
  min-height: 635px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #ffffff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  left: -70px;
  background: rgb(3, 0, 36);
  background: linear-gradient(
    70deg,
    rgba(3, 0, 36, 1) 0%,
    rgba(97, 9, 121, 1) 34%,
    rgba(0, 115, 255, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 218px;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

const backdropVariants = {
  expanded: {
    width: "400%",
    height: "1170px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(props.type);

  const history = useHistory();

  useEffect(() => {
    setActive(props.type);
  }, [props]);

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      history.replace("/signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      history.replace("/login");
    }, 400);
  };

  const switchToForgetPassword = () => {
    playExpandingAnimation();
    setTimeout(() => {
      history.replace("/forgetpassword");
    }, 400);
  }

  const switchToSignUpSuccess = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("success");
    }, 400);
  };

  const switchToForgetPasswordSuccess = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("forget_password_success")
    }, 400);
  }

  const contextValue = {
    switchToSignup,
    switchToSignin,
    switchToForgetPassword,
    switchToSignUpSuccess,
    switchToForgetPasswordSuccess,
  };

  var BackDropStyle = {};
  var InnerContainerStyle = {};
  var TopContainerStyle = {};
  if (active === "signin") {
    BackDropStyle = { top: "-210px" };
    InnerContainerStyle = { marginTop: "70px" };
  } else if (active === "signup") {
    BackDropStyle = { top: "-390px" };
    InnerContainerStyle = { marginBottom: 16 };
    TopContainerStyle = { height: 130 };
  } else if (active === "success") {
    BackDropStyle = { top: "-280px" };
  }

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer style={TopContainerStyle}>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
            style={BackDropStyle}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Have an</HeaderText>
              <HeaderText>Account?</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer style={{ marginBottom: -20 }}>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "forgetpassword" && (
            <HeaderContainer style={{ marginBottom: 70 }}>
              <HeaderText>Forget</HeaderText>
              <HeaderText>Password ?</HeaderText>
              <SmallText>Please enter your email</SmallText>
            </HeaderContainer>
          )}
          {active === "success" && (
            <HeaderContainer style={{ marginBottom: 50 }}>
              <HeaderText>Account</HeaderText>
              <HeaderText>Created</HeaderText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer style={InnerContainerStyle}>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
          {active === "success" && <SignupSuccessForm />}
          {active === "forgetpassword" && <ForgetPasswordForm />}
          {active === "forget_password_success" && <ForgetPasswordSuccessForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
