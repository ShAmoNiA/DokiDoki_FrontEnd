import { Avatar } from "@mui/material";
import React from "react";
import { NoChatIcon } from "../../asset/svgIcons";
import { MainColors } from "../../config";
import "./antInput.css";

const MainChatListCard = ({
  username,
  profilepicture,
  lastmessage,
  isonline,
  onclick,
}) => {
  console.log(isonline);
  return (
    <div
      onClick={onclick}
      className="chat-list-card"
      style={{
        borderTop: "solid",
        borderTopColor: MainColors.white,
        borderTopWidth: 1,
        padding: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "nowrap",
          fontSize: 18,
        }}
      >
        <Avatar style={{ marginRight: 4 }} src={profilepicture} />
        {username}

        {isonline ? (
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "green",
              margin: 8,
            }}
          ></div>
        ) : (
          <></>
        )}
        {lastmessage ? <NoChatIcon fill={MainColors.Gray} size={24} /> : <></>}
      </div>
    </div>
  );
};

export default MainChatListCard;
