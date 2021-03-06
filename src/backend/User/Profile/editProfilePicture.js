import MainAxiosRequest from "../../MainAxiosRequest";

const EditProfilePictureRequest = async ({
  profile_picture_url,
  datacaller,
}) => {
  var token = localStorage.getItem("token");

  await MainAxiosRequest()
    .post(
      "edit_profile",
      { profile_picture_url: profile_picture_url },
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    )
    .then((e) => {
      console.log(e);
      datacaller(e.data);
    })
    .catch((e) => {
      console.log(e.response);
      datacaller({ error: true });
    });
};

export default EditProfilePictureRequest;
