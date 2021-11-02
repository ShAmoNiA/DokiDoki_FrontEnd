import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  BoldLink,
  BoxContainer,
  MutedLink,
  SubmitButton,
  SmallText,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import SnackBar from "./../snackBar/SnackBar";
import CheckUsernameRequest from "../../backend/Guest/CheckUsername";
import styled from "styled-components";
import { DoctorIcon, LoadingGif, SickIcon } from "../../asset/svgIcons";
import SignUpRequest from "../../backend/Guest/SignUp";

const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  box-shadow: 0px 2px 8px rgba(15, 15, 15, 0.19);
  transition: all 200ms ease-in-out;
  font-size: 12px;
  margin-left: -11px;

  &::placeholder {
    color: #c4c4c4;
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.8);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(0, 115, 255, 1);
    transition: all, 100ms ease-in-out;
  }
`;

const BoldBlueBorder = "#0073ff"; // رنگی که زیر اینپوت ها هست، برای انتخاب رول هم استفاده میکنم

const LightGrayFont = "#c4c4c4";

const minUsernameLength = 4;
const minPasswordLength = 8;
const lowerCaseRegExp = /[a-z]/;
const upperCaseRegExp = /[A-Z]/;
const digitRegExp = /[0-9]/;
const emailRegExp = /\S+@\S+\.\S+/;
const errorBorderWidth = 1;
const errorBorderAndFontColor = "red";

export function SignupForm(props) {
  const { switchToSignin, switchToSignUpSuccess } = useContext(AccountContext);
  const snkbr = useRef();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const [roleUnderMouse, setRoleUnderMouse] = useState(0);

  const [usernameErrStatus, setUsernameErrStatus] = useState(false);

  const [disableSignUp, setDisableSignUp] = useState(false);

  const [errors, setErrors] = useState({
    email: true,
    password: true,
    username: true,
    confirmPassword: true,
    fullName: true,
    phone: true,
  });

  useEffect(() => {
    if (
      password === "" ||
      confirmPassword === "" ||
      email === "" ||
      phone === "" ||
      fullName === "" ||
      username === ""
    )
      setDisableSignUp(true);

    if (fullName !== "") errors.fullName = false;

    if (
      !errors.username &&
      !errors.phone &&
      !errors.password &&
      !errors.fullName &&
      !errors.email &&
      !errors.confirmPassword
    )
      setDisableSignUp(false);
  }, [password, confirmPassword, email, phone, fullName, username]);

  console.log(loading);
  console.log(disableSignUp);
  console.log(role);

  const SignUp = () => {
    setLoading(true);
    SignUpRequest({
      username,
      role,
      password,
      email,
      fullname: fullName,
      phone,
      datacaller: (data) => {
        if (data.status !== 200) {
          snkbr.current.openSnackbar(
            "Something went wrong, check your conntection",
            "error"
          );
          setLoading(false);
          console.log(data);
        } else if (data.data.success === false) {
          var str = [];
          str = Object.values(data.data.message);

          var strr = "";
          for (var i = 0; i < str.length; i++) {
            strr = strr + str[i] + "   \n";
          }

          snkbr.current.openSnackbar(strr, "error");
        } else {
          switchToSignUpSuccess();
        }
        setLoading(false);
      },
    });
  };

  const CheckUserName = ({ username }) => {
    CheckUsernameRequest({
      username,
      datacaller: (data) => {
        setUsernameErrStatus(data);
      },
    });
  };

  const FieldErrors = ({ name, justStatus }) => {
    const borderWidth = errorBorderWidth;
    const errcolor = errorBorderAndFontColor;
    const errStyle = { borderWidth: borderWidth, borderColor: errcolor };

    switch (name) {
      case "email": {
        if (email.length > 0) {
          if (!email.match(emailRegExp)) {
            errors.email = true;
            return errStyle;
          }
        }
        errors.email = false;
        return {};
      }
      case "phone": {
        if (phone.length > 0) {
          if (phone.length !== 11) {
            errors.phone = true;
            return errStyle;
          }
        }
        errors.phone = false;
        return {};
      }

      case "confirmpass": {
        if (justStatus) {
          if (confirmPassword.length > 0) {
            if (confirmPassword !== password) {
              errors.confirmPassword = true;
              return errStyle;
            }
          }
          errors.confirmPassword = false;
          return {};
        } else {
          errstr = "";

          margin = 0;
          if (confirmPassword.length > 0)
            if (confirmPassword !== password) {
              errstr = "Passwords dont match";

              margin = 4;
            }
          return (
            <SmallText
              style={{
                color: errcolor,
                alignSelf: "flex-start",
                margin: margin,
              }}
            >
              {errstr}
            </SmallText>
          );
        }
      }

      case "passworderror": {
        var errstr = "Min: ";

        var err = false;

        if (password.length !== 0) {
          if (password.length < minPasswordLength) {
            errstr = errstr + minPasswordLength + " charcter, ";
            err = true;
          }
          if (
            !(lowerCaseRegExp.test(password) || upperCaseRegExp.test(password))
          ) {
            errstr = errstr + "1 letter, ";
            err = true;
          }
          if (!upperCaseRegExp.test(password)) {
            errstr = errstr + "1 upercase, ";
            err = true;
          }
          if (!digitRegExp.test(password)) {
            errstr = errstr + "1 digit";
            err = true;
          }
        }

        if (justStatus) {
          if (err) {
            errors.password = true;
            return errStyle;
          } else {
            errors.password = false;
            return {};
          }
        }

        var margin = 4;

        if (!err) {
          errstr = "";

          margin = 0;
        }

        return (
          <SmallText
            style={{
              color: errcolor,
              alignSelf: "flex-start",
              margin: margin,
            }}
          >
            {errstr}
          </SmallText>
        );
      }

      case "checkusername": {
        var errstr = "";
        var margin = 0;

        if (justStatus) {
          if (username.length !== 0)
            if (username.length < minUsernameLength || usernameErrStatus) {
              errors.username = true;
              return errStyle;
            }

          errors.username = false;
          return {};
        } else if (username.length >= minUsernameLength) {
          if (usernameErrStatus) {
            margin = 4;
            errstr = username + " is taken";
          }
        } else if (username.length !== 0) {
          margin = 4;
          errstr = "min " + minUsernameLength + " character";
        }
        return (
          <SmallText
            style={{
              margin: 0,
              color: errcolor,
              alignSelf: "flex-start",
              margin: margin,
            }}
          >
            {errstr}
          </SmallText>
        );
      }
    }

    return {};
  };

  const CreateSelectRole = () => {
    var doctorStyle = { borderWidth: 1, borderColor: LightGrayFont };
    var patientStyle = { borderWidth: 1, borderColor: LightGrayFont };

    var doctorColor = LightGrayFont;

    var patientColor = LightGrayFont;

    if (roleUnderMouse === 1) {
      doctorStyle = { borderWidth: 1, borderColor: BoldBlueBorder };
    } else if (roleUnderMouse === 2) {
      patientStyle = { borderWidth: 1, borderColor: BoldBlueBorder };
    }

    if (role === 1) {
      doctorColor = BoldBlueBorder;
      doctorStyle = {
        boxShadow: "0px 2px 8px rgba(15, 15, 15, 0.19)",
        borderWidth: 1,
        borderColor: BoldBlueBorder,
      };
    } else if (role === 2) {
      patientColor = BoldBlueBorder;
      patientStyle = {
        boxShadow: "0px 2px 8px rgba(15, 15, 15, 0.19)",
        borderWidth: 1,
        borderColor: BoldBlueBorder,
      };
    }
    return (
      <>
        <div
          onClick={() => setRole(1)}
          onMouseEnter={() => {
            setRoleUnderMouse(1);
          }}
          onMouseLeave={() => {
            setRoleUnderMouse(0);
          }}
          style={{
            cursor: "pointer",
            height: "100%",
            marginRight: 4,
            flex: 1,
            border: "1px solid rgba(200, 200, 200, 0.3)",
            ...doctorStyle,
            display: "inline-flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: doctorColor,
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            As Doctor
          </div>{" "}
          {DoctorIcon({ fill: doctorColor })}
        </div>
        <div
          onClick={() => setRole(2)}
          style={{
            height: "100%",
            marginLeft: 4,
            flex: 1,
            border: "1px solid rgba(200, 200, 200, 0.3)",
            ...patientStyle,
            display: "inline-flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onMouseEnter={() => {
            setRoleUnderMouse(2);
          }}
          onMouseLeave={() => {
            setRoleUnderMouse(0);
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: patientColor,
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            As Patient
          </div>
          {SickIcon({ fill: patientColor })}
        </div>
      </>
    );
  };

  return (
    <BoxContainer>
      <SnackBar ref={snkbr} />

      <Input
        disabled={loading}
        style={{ ...FieldErrors({ name: "checkusername", justStatus: true }) }}
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
        onBlur={() => {
          if (username.length > 3) {
            CheckUserName({ username: username });
          }
        }}
        onFocus={() => setUsernameErrStatus(false)}
      />

      {FieldErrors({ name: "checkusername" })}

      <Input
        disabled={loading}
        style={{ marginTop: 4 }}
        type="text"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />
      <Input
        disabled={loading}
        style={{ marginTop: 4, ...FieldErrors({ name: "email" }) }}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        disabled={loading}
        style={{ marginTop: 4, ...FieldErrors({ name: "phone" }) }}
        type="number-pad"
        placeholder="Phone number"
        onChange={(e) => {
          if (e.target.value.match(/\d/g))
            if (e.target.value.length < 12) {
              if (e.target.value.length === 1) {
                if (e.target.value === "0") setPhone(e.target.value);
              } else {
                setPhone(e.target.value);
              }
            }
          if (e.target.value === "") setPhone("");
        }}
        value={phone}
      />

      <Input
        disabled={loading}
        style={{
          marginTop: 4,
          ...FieldErrors({ name: "passworderror", justStatus: true }),
        }}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      {FieldErrors({ name: "passworderror" })}
      <Input
        disabled={loading}
        style={{
          marginTop: 4,
          ...FieldErrors({ name: "confirmpass", justStatus: true }),
        }}
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />

      {FieldErrors({ name: "confirmpass" })}

      <div
        style={{
          height: 42,
          width: "100%",
          marginRight: 11,
          marginTop: 12,
          flexDirection: "row",
          display: "inline-flex",
        }}
      >
        {CreateSelectRole()}
      </div>

      <Marginer direction="vertical" margin={16} />
      <SubmitButton
        disabled={loading || disableSignUp || role === ""}
        type="submit"
        onClick={() => {
          SignUp();
        }}
      >
        {loading ? (
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <LoadingGif height="22px" fill={BoldBlueBorder} />
          </div>
        ) : (
          "Sign Up"
        )}
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign In
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
