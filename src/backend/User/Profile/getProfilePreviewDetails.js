import { BackendImageAdress } from "../../address";
import MainAxiosRequest from "../../MainAxiosRequest";

const GetProfilePreviewDetailsRequest = async ({ datacaller, username }) => {
  await MainAxiosRequest()
    .get("profile_preview", { params: { username: username } })
    .then((e) => {
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

export default GetProfilePreviewDetailsRequest;
