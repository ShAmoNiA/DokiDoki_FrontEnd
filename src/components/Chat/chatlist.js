import React from "react";
import {
  HomeIcon,
  PowerIcon,
  SettingIcon,
  SickIcon,
} from "../../asset/svgIcons";
import "./antInput.css";
import MainChatListCard from "./chatListCard";

const MainChatList = ({
  selectusername,
  chatListWidth,
  active,
  height,
  users,
  onlineUsers,
  setOnlineUsers,
  unreadUsers,
  setUnreadUsers,
}) => {
  if (!active) return <></>;
  return (
    <div
      style={{
        height: height,
        overflowY: "hidden",
      }}
    >
      <div
        style={{
          marginTop: 18,
          display: "flex",
          width: 200,
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: 28,
        }}
      >
        <span>
          <i className="menu-item" onClick={() => {}}>
            <SettingIcon fill="rgb(94, 28, 124)" />
          </i>
        </span>

        <span>
          <i className="menu-item" onClick={() => {}}>
            <HomeIcon fill="rgb(94, 28, 124)" />
          </i>
        </span>

        <span>
          <i className="menu-item-logout" onClick={() => {}}>
            <PowerIcon fill="rgb(255,0,0)" />
          </i>
        </span>
      </div>

      <div
        className="scrollbar"
        style={{ overflowY: "auto", height: height - 75 }}
      >
        {users.map((u) => {
          return (
            <MainChatListCard
              key={u.partner_username}
              onclick={() => {
                selectusername({ username: u.partner_username });
                setUnreadUsers(
                  unreadUsers.filter((f) => f !== u.partner_username)
                );
              }}
              profilepicture={u.picture}
              username={u.partner_username}
              isonline={
                onlineUsers.filter((f) => f === u.partner_username).length === 1
              }
              lastmessage={
                unreadUsers.filter((f) => f === u.partner_username).length === 1
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainChatList;
