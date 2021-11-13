import { BackendImageAdress } from "../../address";
import MainAxiosRequest from "../../MainAxiosRequest";

const GetProfilePictureRequest = async ({
  profile_picture_url,
  datacaller,
}) => {
  var token = localStorage.getItem("token");

  await MainAxiosRequest()
    .get("get_profile", {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((e) => {
      console.log("here must be cleaned, pass profile url to avatar component");
      console.log(e);
      datacaller(BackendImageAdress + e.data.profile_picture_url);
    })
    .catch((e) => {
      datacaller({ error: true });
    });
};

export default GetProfilePictureRequest;
