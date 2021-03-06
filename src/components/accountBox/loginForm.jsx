import React, { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import Loading from "../../Loading";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import SnackBar from "./SnackBar";
import axios from "../../helper/axiosInstance";
import { Redirect } from "react-router-dom";
import auth from "../../helper/auth";
import { useHistory } from "react-router-dom";

export function LoginForm(props) {
  const { switchToSignup, switchToForgetPassword } = useContext(AccountContext);
  const snkbr = useRef();
  const [password, setPassword] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const login = async () => {
    var token = "";
    if (!email)
      return snkbr.current.openSnackbar(
        "Please enter your email address",
        "error"
      );
    if (!password)
      return snkbr.current.openSnackbar(
        "Please enter your email adress",
        "error"
      );
    if (password.length < 8)
      return snkbr.current.openSnackbar(
        "Password should have less than 8 character",
        "error"
      );

    const url = "/login";
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    setLoading(true);
    try {
      const { data } = await axios.post(url, formData, config);
      setLoading(false);
      auth.setToken(data.token);
      snkbr.current.openSnackbar("welcome", "info");
      window.location = "/";
    } catch (e) {
      setLoading(false);
      let errors = { ...e.response.data };
      let message = "";
      for (let field in errors) {
        message += errors[field].reduce((acc, val) => acc + val, "");
      }
      return snkbr.current.openSnackbar(message, "error");
    }
  };

  return (
    <BoxContainer>
      <SnackBar ref={snkbr} />
      <FormContainer>
        <Input
          type="email"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={12} />
      <MutedLink>
        <BoldLink
          style={{ cursor: "pointer" }}
          onClick={switchToForgetPassword}
        >
          Forget your password?
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="1.5em" />
      <SubmitButton
        data-testid="login-form-submit-btn"
        type="submit"
        onClick={login}
        disabled={loading}
      >
        {loading ? <Loading /> : "Sign in"}
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Don't have an account?
        <BoldLink style={{ cursor: "pointer" }} onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
