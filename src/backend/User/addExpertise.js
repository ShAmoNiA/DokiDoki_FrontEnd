import MainAxiosRequest from "../MainAxiosRequest";

const AddExpertiseRequest = async ({ url, tag, datacaller }) => {
  var token = localStorage.getItem("token");

  await MainAxiosRequest()
    .post(
      "add_expertise",
      { tag: tag, image_url: url },
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

export default AddExpertiseRequest;
