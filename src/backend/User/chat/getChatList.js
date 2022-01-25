import MainAxiosRequest from "../../MainAxiosRequest";

const GetChatList = async ({ datacaller }) => {
  var token = localStorage.getItem("token");

  var tokenn = "token " + token;
  await MainAxiosRequest()
    .get("chat_list", {
      headers: {
        Authorization: tokenn,
      },
    })
    .then((e) => {
      datacaller(e.data.chats);
    })
    .catch((e) => {
      console.log("error in getting chat list from server");
    });
};

export default GetChatList;
