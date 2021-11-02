import React from "react";
import MainAxiosRequest from "../MainAxiosRequest";

const CheckUsernameRequest = async ({ username, datacaller }) => {
  await MainAxiosRequest()
    .get("check_username/" + username)
    .then((data) => {
      datacaller(data.data.exists);
    })
    .catch(() => {
      datacaller(false);
    });
};

export default CheckUsernameRequest;
