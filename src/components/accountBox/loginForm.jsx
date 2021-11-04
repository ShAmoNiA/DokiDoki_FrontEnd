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
import axios from "axios";
import { Redirect } from "react-router-dom";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const snkbr = useRef();
  const [password, setPassword] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function login() {
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

    const url = "http://185.141.107.81:1111/api/login";
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    setLoading(true);

    axios
      .post(url, formData, config)
      .then((res) => {
        if (res.data.success === true) {
          document.cookie = `Authorization=${res.data.token}`;
          snkbr.current.openSnackbar("WELCOME", "hi");
          console.log("loged in");
          setLoading(false);
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
          // if (!res.data.success) return snkbr.current.openSnackbar('welcome ', 'info');
        }
        // else {
        // 	setLoading(false);
        // 	if (!res.data.success) return snkbr.current.openSnackbar(res.data.message, 'error');
        // }
      })
      .catch((e) => {
        setLoading(false);
        const { data } = e.response;
        snkbr.current.openSnackbar(
          data.non_field_errors[0] || e.message,
          "error"
        );
      });
  }

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
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.5em" />
      <SubmitButton type="submit" onClick={login} disabled={loading}>
        {loading ? <Loading /> : "Sign in"}
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Don't have an account?
        <BoldLink href="#" onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
