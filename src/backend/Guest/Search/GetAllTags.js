import React from "react";
import MainAxiosRequest from "../../MainAxiosRequest";

const GetAllTagsRequest = async ({ datacaller }) => {
  await MainAxiosRequest()
    .get("all_tags")
    .then((data) => {
      if (data.data.success) {
        datacaller(data.data.tags);
      } else datacaller({ error: true });
    })
    .catch((data) => {
      datacaller({ error: true });
    });
};

export default GetAllTagsRequest;
