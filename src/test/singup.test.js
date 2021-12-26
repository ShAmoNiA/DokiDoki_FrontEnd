import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import {
  AccountTick,
  CameraIcon,
  DoctorIcon,
  LoadingGif,
  RotatePicture,
  SickIcon,
  UploadAvatar,
} from "../asset/svgIcons";
import MainAvatar from "../components/avatar/avatar";
import Login from "../screens/Login/Login";

import { rest, setupWorker } from "msw";
import { setupServer } from "msw/node";
import BackendAdress from "../backend/address";

test("Signup form: rendering", () => {
  render(<Login type="signup" />);
});

test("Signup form: containing elements", () => {
  render(<Login type="signup" />);

  var username = screen.getByPlaceholderText("Username");
  var name = screen.getByPlaceholderText("Full Name");
  var email = screen.getByPlaceholderText("Email");
  var phone = screen.getByPlaceholderText("Phone number");
  var pass = screen.getByPlaceholderText("Password");
  var cpass = screen.getByPlaceholderText("Confirm Password");
  var submitSignUp = screen.getByText("Sign Up");
  var signinlink = screen.getByText("Sign In");
  var asdoctor = screen.getByText("As Doctor");
  var aspatient = screen.getByText("As Patient");

  expect(username).toBeInTheDocument;
  expect(name).toBeInTheDocument;
  expect(email).toBeInTheDocument;
  expect(phone).toBeInTheDocument;
  expect(pass).toBeInTheDocument;
  expect(cpass).toBeInTheDocument;
  expect(submitSignUp).toBeInTheDocument;
  expect(signinlink).toBeInTheDocument;
  expect(asdoctor).toBeInTheDocument;
  expect(aspatient).toBeInTheDocument;
});

test("Signup form: username conditions", () => {
  render(<Login type="signup" />);

  var username = screen.getByPlaceholderText("Username");

  fireEvent.change(username, { target: { value: "sss" } });

  var error = screen.getByText("min 4 character");

  expect(error).toBeInTheDocument;
});

test("Signup form: email conditions", () => {
  render(<Login type="signup" />);

  var email = screen.getByPlaceholderText("Email");

  fireEvent.change(email, { target: { value: "test@test" } });
  expect(email.style.borderColor).toBe("red");

  fireEvent.change(email, { target: { value: "test" } });
  expect(email.style.borderColor).toBe("red");

  fireEvent.change(email, { target: { value: "test.test" } });
  expect(email.style.borderColor).toBe("red");
});

test("Signup form: password conditions", () => {
  render(<Login type="signup" />);

  var pass = screen.getByPlaceholderText("Password");
  var cpass = screen.getByPlaceholderText("Confirm Password");

  fireEvent.change(pass, { target: { value: "11111111Q" } });
  fireEvent.change(cpass, { target: { value: "11111111" } });

  expect(pass.style.borderColor).toBe("");
  expect(cpass.style.borderColor).toBe("red");

  fireEvent.change(pass, { target: { value: "11111111" } });
  fireEvent.change(cpass, { target: { value: "11111111Q" } });

  expect(pass.style.borderColor).toBe("red");
  expect(cpass.style.borderColor).toBe("red");

  fireEvent.change(pass, { target: { value: "12345678" } });
  expect(pass.style.borderColor).toBe("red");

  fireEvent.change(pass, { target: { value: "12345678q" } });
  expect(pass.style.borderColor).toBe("red");

  fireEvent.change(pass, { target: { value: "12345678Q" } });
  expect(pass.style.borderColor).toBe("");
});

test("Signup form: dynamic sign up button  status", () => {
  render(<Login type="signup" />);

  var submitSignUp = screen.getByText("Sign Up");

  expect(submitSignUp.disabled).toBe(true);

  var username = screen.getByPlaceholderText("Username");
  var name = screen.getByPlaceholderText("Full Name");
  var email = screen.getByPlaceholderText("Email");
  var phone = screen.getByPlaceholderText("Phone number");
  var pass = screen.getByPlaceholderText("Password");
  var cpass = screen.getByPlaceholderText("Confirm Password");
  var asdoctor = screen.getByText("As Doctor");

  fireEvent.change(username, {
    target: { value: "testtesttesttesttest" },
  });
  fireEvent.change(email, { target: { value: "test@test.test" } });
  fireEvent.change(name, { target: { value: "full name" } });
  fireEvent.change(phone, { target: { value: "09999999999" } });
  fireEvent.change(pass, { target: { value: "1111111Q" } });
  fireEvent.change(cpass, { target: { value: "1111111Q" } });
  fireEvent.click(asdoctor);

  expect(submitSignUp.disabled).toBe(false);
});

const CheckUsrnameResponseTrue = rest.get(
  BackendAdress + "check_username/test1",
  (req, res, ctx) => {
    return res(ctx.json({ exists: false }));
  }
);

const CheckUsrnameResponseFalse = rest.get(
  BackendAdress + "check_username/test2",
  (req, res, ctx) => {
    return res(ctx.json({ exists: true }));
  }
);

const handlers = [CheckUsrnameResponseTrue, CheckUsrnameResponseFalse];

const server = new setupServer(...handlers);

server.listen();

test("Signup form: check username", async () => {
  render(<Login type="signup" />);

  var username = screen.getByPlaceholderText("Username");

  fireEvent.change(username, { target: { value: "test2" } });

  await waitFor(() => {
    screen.getByText("is taken");
  });
});

server.close();
