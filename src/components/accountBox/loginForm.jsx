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
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import SnackBar from "./../snackBar/SnackBar";
import axios from "axios";
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const snkbr = useRef();
  const [password, setPassword] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  /*

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

    const url = "http://pazapp.ir/account/login";
    const formData = new FormData();
    formData.append("usernameormail", email);
    formData.append("password", password);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    setLoading(true);

    axios.post(url, formData, config).then((res) => {
      if (res.data.status == "success") {
        document.cookie = `Authorization=${res.data.token}`;
        snkbr.current.openSnackbar(res.data.message, "hi");
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        if (!res.data.success)
          return snkbr.current.openSnackbar("welcome ", "info");
      } else {
        setLoading(false);
        if (!res.data.success)
          return snkbr.current.openSnackbar(res.data.message, "error");
      }
    });
  }

  */

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
      <SubmitButton
        type="submit"
        onClick={() => {
          //login()
        }}
        disabled={loading}
      >
        {loading ? "loading" : "Sign in"}
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
