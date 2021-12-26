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

const testmessages = {
  1: {
    id: 1,
    message:
      "im sender hi its a message hi its a message hi its a message hi its a message hi its a message hi its a message",
    date: "its a date",
    issender: true,
    seen: true,
  },
  2: {
    id: 2,
    message: "hi its a message hi its a message hi its a message hi its a m",
    date: "its a date",
    issender: false,
    seen: true,
  },
  3: {
    id: 3,
    message: "hi its a message",
    date: "its a date",
    issender: false,
    seen: true,
  },
  4: {
    id: 4,
    message:
      "hi its a message  a message  a message  a message  a message a message a message a message",
    date: "its a date",
    issender: false,
    seen: true,
  },
  5: {
    id: 5,
    message: "hi its a message",
    date: "its a date",
    issender: false,
    seen: true,
  },
  6: {
    id: 6,
    message: "hi its a message",
    date: "its a date",
    issender: false,
    seen: true,
  },
  7: {
    id: 7,
    message: "hi its a message",
    date: "its a date",
    issender: true,
    seen: true,
  },
  8: {
    id: 8,
    message: "hi its a message",
    date: "its a date",
    issender: true,
    seen: true,
  },
  9: {
    id: 9,
    message: "hi its a message",
    date: "its a date",
    issender: true,
    seen: true,
  },
  10: {
    id: 10,
    message: "hi its a message",
    date: "its a date",
    issender: true,
    seen: false,
  },
  11: {
    id: 11,
    message: "hi its a message",
    date: "its a date",
    issender: false,
    seen: true,
  },
  12: {
    id: 12,
    message: "hi its a message",
    date: "its a date",
    issender: true,
    seen: false,
  },
};

const { TextArea } = Input;

const MainChatbox = ({
  username,
  back,
  activeback,
  active,
  chatformheight,
}) => {
  const [selectedUser, setSelectedUser] = useState(""); // برای پروفایل پریویو
  const [messages, setMessages] = useState(Object.values(testmessages));

  const [message, setMessage] = useState("");

  const messageEnd = useRef();

  const ScrollToBottom = ({ smooth = false }) => {
    if (active)
      if (smooth) messageEnd.current.scrollIntoView({ behavior: "smooth" });
      else messageEnd.current.scrollIntoView({ behavior: "auto" });
  };

  // اسکرول تا پایین صفحه وقتی یوزر توی صفحه چت تغییر کنه
  useEffect(() => {
    ScrollToBottom({ smooth: false });
  }, [username]);

  useEffect(() => {
    ScrollToBottom({ smooth: true });
  }, [message.length]);

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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU"
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
                date={m.date}
                message={m.message}
                seen={m.seen}
                sender={m.issender}
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
          <TextArea
            style={{ marginRight: 4 }}
            className="messageinput scrollbar placeholder"
            color={MainColors.Gray}
            autoSize={{ minRows: 1, maxRows: 2 }}
            placeholder="message..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <IconButton
            onClick={() => {
              if (message !== "") {
                var d = new Date();
                setMessages([
                  ...messages,
                  {
                    id: messages.length + 1,
                    issender: true,
                    date: d.getFullYear() + "-" + d.getDate(),
                    message: message,
                    seen: false,
                  },
                ]);
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
