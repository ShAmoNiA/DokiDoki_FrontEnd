import axios from "axios";
import React, { useEffect, useState } from "react";
import GetChatList from "../../backend/User/chat/getChatList";
import GetOldChat from "../../backend/User/chat/getOldChat";
import GetProfileDetailsRequest from "../../backend/User/Profile/getProfileDetails";
import { MainColors } from "../../config";
import useMessages from "../customHook/useMessage";
import useWindowDimensions from "../customHook/useWindowDimensions";
import MainChatbox from "./chatbox";
import MainChatList from "./chatlist";

const calcWidth = ({ windowWidth, activePart }) => {
  if (windowWidth < 700) {
    if (activePart === "chatlist")
      return { chatBoxWidth: 0, chatListWidth: "100%", activechatlist: true };
    else
      return {
        chatBoxWidth: "100%",
        chatListWidth: 0,
        activeback: true,
        activechat: true,
      };
  }
  return {
    chatBoxWidth: "100%",
    chatListWidth: 300,
    activechat: true,
    activechatlist: true,
  };
};

const MainChatPage = () => {
  const [users, setUsers] = useState([]);

  const [selectedUserChat, setSelectedUserChat] = useState("");

  const [activePart, setActivePart] = useState("chatlist");

  const [userDetails, setUserDetails] = useState({});

  const [chatSockets, setChatSockets] = useState([]);

  const [onlineUsers, setOnlineUsers] = useState([]);

  const [unreadUsers, setUnreadUsers] = useState([]);

  useEffect(() => {
    GetProfileDetailsRequest({
      datacaller: (details) => {
        setUserDetails(details);
      },
    });
  }, []);

  useEffect(() => {
    setUnreadUsers(unreadUsers.filter((f) => f !== selectedUserChat));
  }, [unreadUsers.length]);

  const { height, width } = useWindowDimensions();
  var { chatBoxWidth, chatListWidth, activeback, activechat, activechatlist } =
    calcWidth({
      windowWidth: width,
      activePart: activePart,
    });

  useEffect(() => {
    GetChatList({
      datacaller: (chats) => {
        var userss = Object.values(chats);
        setUsers(userss);

        console.log(chats);
        setUnreadUsers(
          userss.map((m) => {
            if (m.has_new_message) return m.partner_username;
          })
        );

        // ساخت سوکت برای هر کدوم از یوزر ها

        var sockets = [];
        for (var i = 0; i < userss.length; i++) {
          var url = `ws://185.141.107.81:1111/ws/chat_socket/${
            userss[i].partner_username
          }/${localStorage.getItem("token")}/`;

          var socket = new WebSocket(url);

          var chat = {
            socket: socket,
            username: userss[i].partner_username,
            url: url,
          };
          sockets = [...sockets, chat];
        }

        setChatSockets(sockets);
      },
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        textAlign: "-webkit-center",
        overflowY: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: MainColors.backGround,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: height,
            width: chatListWidth,
            backgroundColor: MainColors.backGround,
          }}
        >
          <MainChatList
            selectusername={({ username }) => {
              setSelectedUserChat(username);
              setActivePart("chatbox");
            }}
            active={activechatlist}
            height={height - 8}
            users={users}
            onlineUsers={onlineUsers}
            setOnlineUsers={setOnlineUsers}
            unreadUsers={unreadUsers}
            setUnreadUsers={setUnreadUsers}
          />
        </div>
        <div
          style={{
            width: chatBoxWidth,
            position: "relative",
            height: height,
            border: "solid",
            borderWidth: 1,
            borderColor: MainColors.white,
          }}
        >
          <MainChatbox
            isdoctor={userDetails.is_doctor}
            back={() => {
              setActivePart("chatlist");
              setSelectedUserChat("");
            }}
            username={selectedUserChat}
            activeback={activeback}
            active={activechat}
            chatformheight={height - 122}
            chatsockets={chatSockets}
            onlineUsers={onlineUsers}
            setOnlineUsers={setOnlineUsers}
            unreadUsers={unreadUsers}
            setUnreadUsers={setUnreadUsers}
            profilepicture={
              Object.values(users).filter((f) => f === selectedUserChat)[0]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MainChatPage;
