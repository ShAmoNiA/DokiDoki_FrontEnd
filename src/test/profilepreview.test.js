import { render, screen, fireEvent } from "@testing-library/react";
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
import ProfilePreview from "../components/profile/profilePreview";
import MainSearch from "../components/search/MainSearch";
import Login from "../screens/Login/Login";

test("ProfilePreview: rendering", () => {
  render(<ProfilePreview username="" />);
});

test("ProfilePreview: rendering, with a username", () => {
  render(<ProfilePreview username="rahmaniii" />);
});

test("ProfilePreview: containing items", () => {
  render(<ProfilePreview username="rahmaniii" />);

  var username = screen.findByText("username");
  var avatar = screen.findByTestId("avatar");
  var fullname = screen.findByTestId("fullname");

  expect(username).toBeInTheDocument;
  expect(avatar).toBeInTheDocument;
  expect(fullname).toBeInTheDocument;
});
