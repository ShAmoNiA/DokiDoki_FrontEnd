import { BackendImageAdress } from "../../address";
import MainAxiosRequest from "../../MainAxiosRequest";

const GetProfilePictureRequest = async ({
  profile_picture_url,
  datacaller,
}) => {
  var token = localStorage.getItem("token");

  var tokenn = "token " + token;
  await MainAxiosRequest()
    .post(
      "profile_preview",
      {},
      {
        headers: {
          Authorization: tokenn,
        },
      }
    )
    .then((e) => {
      console.log("here must be cleaned, pass profile url to avatar component");
      console.log(e);
      if (e.data.success) {
        datacaller(BackendImageAdress + e.data.profile.profile_picture_url);
      }
    })
    .catch((e) => {
      console.log(e.response);
      datacaller({ error: true });
    });
};

export default GetProfilePictureRequest;
