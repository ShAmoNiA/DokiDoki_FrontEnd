import "./style/Nav.css";

import React from "react";
import { useSelector } from "react-redux";
export default function Nav({ openDrawer }) {
  const user = useSelector((state) => state.user);

  return (
    <nav className="nav-bar">
      <span className="nav-title">DokiDoki</span>
      <span>
        <i
          className="bi bi-search search-icon"
          onClick={() => {
            window.location.replace("#/search");
          }}
        ></i>
      </span>
      <div onClick={openDrawer} className="nav-profile">
        <span className="profile-name">{user.username}</span>

        <img
          className="profile-pic"
          src={"http://185.141.107.81:1111" + user.profile_picture_url}
          alt="profile"
        />
      </div>
    </nav>
  );
}
