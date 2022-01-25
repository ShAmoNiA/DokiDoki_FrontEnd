import { Avatar } from "@material-ui/core";
import { IconButton } from "@mui/material";
import { Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { BackLeftIcon, NoChatIcon, SendIcon } from "../../asset/svgIcons";
import { MainColors } from "../../config";
import useWindowDimensions from "../customHook/useWindowDimensions";
import ProfilePreview from "../profile/profilePreview";
import "./antInput.css";
import backGroundImage from "../../asset/chatback.png";
import MainMessage from "./message";
import useMessagesSocket from "../customHook/useMessage";
import GetOldChat from "../../backend/User/chat/getOldChat";
import { BackendImageAdress } from "../../backend/address";
import { m } from "framer-motion";

const { TextArea } = Input;

const MainChatbox = ({
  username,
  back,
  activeback,
  active,
  chatformheight,
  isdoctor,
  chatsockets = [],
  onlineUsers,
  setOnlineUsers,
  unreadUsers,
  setUnreadUsers,
  profilepicture,
}) => {
  const [selectedUser, setSelectedUser] = useState(""); // برای پروفایل پریویو
  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const [incommingMessage, setIncommingMessage] = useState({
    id: 0,
    message: "",
    date: "",
    issender: false,
    seen: false,
    username: "",
  });

  const [chatSocket, setChatSocket] = useState("");

  const messageEnd = useRef();

  const ScrollToBottom = ({ smooth = false }) => {
    if (active)
      if (smooth) messageEnd.current.scrollIntoView({ behavior: "smooth" });
      else messageEnd.current.scrollIntoView({ behavior: "auto" });
  };

  // معرفی سوکت های ساخته شده توی کامپوننت والد
  useEffect(() => {
    for (var v = 0; v < chatsockets.length; v++) {
      var socket = chatsockets[v].socket;

      socket.onopen = (e) => {
        console.log(url);
        var url = e.target.url;
        var v = chatsockets.filter((f) => f.url === url);

        console.log(url);
        console.log(v[0].username);

        var usernamee = v[0].username;
        console.log("connected to user: " + usernamee);
      };

      socket.onmessage = (e) => {
        var url = e.target.url;
        var v = chatsockets.filter((f) => f.url === url);
        var usernamee = v[0].username;

        var message = JSON.parse(e.data);

        console.log(message);
        if (message.type === "partner_status") {
          if (message.partner_is_online) {
            // کاربر یوزر رو انلاین کن
            if (onlineUsers.filter((f) => f === usernamee).length === 0)
              setOnlineUsers([usernamee, ...onlineUsers]);

            console.log(usernamee + "is online");
          } else {
            console.log(usernamee + "gone offline");
            setOnlineUsers(onlineUsers.filter((f) => f !== usernamee));
          }
        }

        if (message.type === "chat_message") {
          if (!(message.is_sender_doctor === isdoctor)) {
            // پیام خونده نشده یوزر پیام خونده نشده داره
            if (unreadUsers.filter((f) => f === usernamee).length === 0)
              setUnreadUsers([usernamee, ...unreadUsers]);

            console.log("new message from " + usernamee);
          }

          // باید صفحه رو اپدیت کنیم
          // قبلش باید بررسی بشه که توی صفحه چت هستیم یا نه
          // توی افکت پیام دریافتی این بررسی رو انجام میدیم
          setIncommingMessage({
            username: usernamee,
            date: message.date,
            is_sender_doctor: message.is_sender_doctor,
            id: message.date,
            text: message.message,
            seen: message.seen,
          });
        }
      };
    }
  }, [chatsockets.length]);

  // اینجا باید وب سوکت جدید ساخته شه
  // و چتای قدیمی لود بشن
  useEffect(() => {
    if (username !== "") {
      GetOldChat({
        username: username,
        datacaller: (msgs) => {
          setMessages(
            Object.values(msgs).sort((a, b) => {
              if (a.id < b.id) return -1;
              else return 1;
            })
          );
        },
      });
    }
  }, [username]);

  // اپدیت کردن پیام ها
  useEffect(() => {
    if (incommingMessage.username === username)
      if (incommingMessage.id !== 0)
        setMessages([...messages, incommingMessage]);
  }, [incommingMessage]);

  // اسکرول تا پایین صفحه وقتی یوزر توی صفحه چت تغییر کنه
  useEffect(() => {
    if (active) if (username !== "") ScrollToBottom({ smooth: false });
  }, [username]);

  useEffect(() => {
    if (active) if (username !== "") ScrollToBottom({ smooth: true });
  }, [messages.length]);

  useEffect(() => {
    console.log(incommingMessage);
    if (messages.length > 0)
      if (!(incommingMessage.is_sender_doctor === isdoctor))
        if (incommingMessage.username === username) {
          console.log("seen");
          setMessages(
            messages.map((m) => {
              return { ...m, seen: true };
            })
          );
        }
  }, [messages.length]);

  console.log("username:" + username);

  console.log(BackendImageAdress + profilepicture);

  if (!active) {
    return <></>;
  }
  if (username === "")
    return (
      <div>
        <div
          style={{
            fontSize: 18,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "gray",
            marginTop: 250,
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <NoChatIcon size={40} />
          </div>
          <div>Choose a User to start Chat</div>
        </div>
      </div>
    );
  return (
    <div>
      <div
        key="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          margin: 8,
        }}
      >
        {activeback ? (
          <div>
            <IconButton onClick={back} size="small">
              <BackLeftIcon size={40} />
            </IconButton>
          </div>
        ) : (
          <div></div>
        )}

        <div
          className="avatar"
          style={{
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
          data-testid="username"
          onClick={() => {
            setSelectedUser(username);
          }}
        >
          {username}
          <Avatar
            style={{ marginLeft: 4 }}
            src={BackendImageAdress + profilepicture}
          />
        </div>
      </div>
      <div key="body">
        <div
          className="scrollbar"
          style={{
            display: "flex",
            flexDirection: "column",
            height: chatformheight,
            backgroundColor: MainColors.white,
            backgroundImage: `url(${backGroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            overflowY: "auto",
            paddingButtom: 18,
          }}
          key="message-form"
        >
          {messages.map((m) => {
            return (
              <MainMessage
                key={m.id}
                date={m.date.split(".")[0]}
                message={m.text}
                seen={m.seen}
                sender={isdoctor === m.is_sender_doctor}
              />
            );
          })}

          <div ref={messageEnd} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 8,
            position: "absolute",
            bottom: 0,
            width: "-webkit-fill-available",
          }}
          key="footer"
        >
          <Input
            style={{ marginRight: 4 }}
            className="messageinput scrollbar placeholder"
            color={MainColors.Gray}
            placeholder="message..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (message !== "") {
                  chatsockets
                    .filter((f) => f.username === username)[0]
                    .socket.send(`{ "message": "${message}"}`);
                  setMessage("");
                }
              }
            }}
          />

          <IconButton
            onClick={() => {
              if (message !== "") {
                chatsockets
                  .filter((f) => f.username === username)[0]
                  .socket.send(`{ "message": "${message}"}`);
                setMessage("");
              }
            }}
            size="small"
          >
            <SendIcon fill={MainColors.ContrastedPurple} size={38} />
          </IconButton>
        </div>
      </div>

      <ProfilePreview setUsername={setSelectedUser} username={selectedUser} />
    </div>
  );
};

export default MainChatbox;
