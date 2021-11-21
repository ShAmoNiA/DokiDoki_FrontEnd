import { BackendImageAdress } from "../../address";
import MainAxiosRequest from "../../MainAxiosRequest";

const GetProfileDetailsRequest = async ({ datacaller }) => {
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
        datacaller(e.data.profile);
      } else {
        datacaller({ error: true });
      }
    })

    .catch((e) => {
      datacaller({ error: true });
    });
};

export default GetProfileDetailsRequest;
