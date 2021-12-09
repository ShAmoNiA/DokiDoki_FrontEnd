import { BackendImageAdress } from "../../address";
import MainAxiosRequest from "../../MainAxiosRequest";

const GetProfilePictureRequest = async ({
  profile_picture_url,
  datacaller,
}) => {
  var token = localStorage.getItem("token");

  var tokenn = "token " + token;
  await MainAxiosRequest()
    .get("my_profile_preview", {
      headers: {
        Authorization: tokenn,
      },
    })
    .then((e) => {
      if (e.data.success) {
        datacaller(BackendImageAdress + e.data.profile.profile_picture_url);
      }
    })
    .catch((e) => {
      datacaller({ error: true });
    });
};

export default GetProfilePictureRequest;
