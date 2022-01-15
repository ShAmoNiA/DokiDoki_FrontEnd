import MainAxiosRequest from "../../MainAxiosRequest";

const GetOldChat = async ({ datacaller, username }) => {
  var token = localStorage.getItem("token");

  var tokenn = "token " + token;
  await MainAxiosRequest()
    .get("load_old_chat", {
      headers: {
        Authorization: tokenn,
      },
      params: {
        partner_username: username,
      },
    })
    .then((e) => {
      datacaller(e.data.messages);
    })
    .catch((e) => {
      console.log("error in getting old chat from server");
    });
};

export default GetOldChat;
