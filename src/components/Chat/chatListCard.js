import { Avatar } from "@mui/material";
import React from "react";
import { MainColors } from "../../config";
import "./antInput.css";

const MainChatListCard = ({
  username,
  profilepicture,
  lastmessage,
  isonline,
  onclick,
}) => {
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
      </div>
    </div>
  );
};

export default MainChatListCard;
