import { Avatar } from "antd";
import React from "react";
import "./card.css";

function card({ title, imageUrl, location, Specialty, sex, openModal }) {
  return (
    <div className="card-container">
      <div
        style={{ textAlign: "center", paddingTop: 16 }}
        className="image-container"
      >
        <Avatar size={200} src={imageUrl} alt="card_avatar" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>Dr. {title}</h3>
        </div>
        <div style={{ paddingTop: 2, textAlign: "center" }}>
          <p>Specialty : {Specialty}</p>
        </div>
        <div style={{ paddingTop: 2, textAlign: "center" }}>
          <p>location : {location}</p>
        </div>
        <div style={{ paddingTop: 2, textAlign: "center" }}>sex : {sex}</div>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            openModal(title);
          }}
        >
          <a>Go to user profile</a>
        </button>
      </div>
    </div>
  );
}

const MainDoctorCard = card;

export default MainDoctorCard;
