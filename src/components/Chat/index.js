import React, { useState } from "react";
import { MainColors } from "../../config";
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

const testusers = [
  {
    username: "rahmani01",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "rahmani02",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "rahmani03",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "rahmani04",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "rahmani05",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "rahmani06",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "rahmani07",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "rahmani08",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "rahmani09",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "rahmani10",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
  {
    username: "ahmadrezadl",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },

  {
    username: "	rahmaniii",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },

  {
    username: "shayan",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU",
  },
];

const MainChatPage = () => {
  const [users, setUsers] = useState(testusers);

  const [selectedUserChat, setSelectedUserChat] = useState("rahmani");

  const [activePart, setActivePart] = useState("chatbox");

  const { height, width } = useWindowDimensions();
  var { chatBoxWidth, chatListWidth, activeback, activechat, activechatlist } =
    calcWidth({
      windowWidth: width,
      activePart: activePart,
    });

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
            back={() => {
              setActivePart("chatlist");
              setSelectedUserChat("");
            }}
            username={selectedUserChat}
            activeback={activeback}
            active={activechat}
            chatformheight={height - 122}
          />
        </div>
      </div>
    </div>
  );
};

export default MainChatPage;
