import React from "react";
import MainAxiosRequest from "../MainAxiosRequest";

const SignUpRequest = async ({
  username,
  password,
  email,
  phone,
  fullname,
  role,
  datacaller,
}) => {
  var is_doctor = false;
  if (role === 1) is_doctor = true;

  await MainAxiosRequest()
    .post("sign_up", { username, password, email, phone, fullname, is_doctor })
    .then((data) => {
      datacaller(data);
    })
    .catch(() => {
      datacaller(false);
    });
};

export default SignUpRequest;
