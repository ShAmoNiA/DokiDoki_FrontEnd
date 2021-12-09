import React from "react";
import MainAxiosRequest from "../MainAxiosRequest";

const CheckUsernameRequest = async ({ username, datacaller }) => {
  const url = "check_username/" + username;
  await MainAxiosRequest()
    .get(url)
    .then((data) => {
      datacaller(data.data.exists);
    })
    .catch((data) => {
      datacaller(false);
    });
};

export default CheckUsernameRequest;
