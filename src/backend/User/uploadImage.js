import React, { useState } from "react";
import { BackendImageAdress } from "../address";
import MainAxiosRequest from "../MainAxiosRequest";

const UploadImageRequest = async ({ image, datacaller }) => {
  var file = dataURLtoFile(image, "profile.jpg");

  let form_data = new FormData();
  form_data.append("image", file, "profile.jpg");

  await MainAxiosRequest()
    .post("upload_image", form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((e) => {
      if (e.data.image_url !== undefined) {
        datacaller({ image_url: e.data.image_url });
      } else {
        datacaller({ error: true });
      }
    })
    .catch((e) => {
      datacaller({ error: true });
    });
};

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export default UploadImageRequest;
