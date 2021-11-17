import { BackendImageAdress } from "../../address";
import MainAxiosRequest from "../../MainAxiosRequest";

const GetProfileDetailsRequest = async ({ datacaller }) => {
  var token = localStorage.getItem("token");

  var tokenn = "token " + token;
  await MainAxiosRequest()
    .get("profile_preview", {
      params: {
        username: "rahmani",
      },
      headers: {
        Authorization: tokenn,
      },
    })
    .then((e) => {
      console.log(e);
      if (e.data.success) {
        datacaller(e.data.profile);
      } else {
        datacaller({ error: true });
      }
    })

    .catch((e) => {
      console.log(e.response);

      datacaller({ error: true });
    });
};

export default GetProfileDetailsRequest;
