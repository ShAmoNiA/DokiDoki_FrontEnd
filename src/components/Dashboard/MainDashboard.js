import React from "react";
import PatientPanel from "./PatientPanel";

import "./style/main.css";
import Profile from "./profile.png";
import ProfilePreview from "../profile/profilePreview";
import { Button } from "@material-ui/core";

export default function Main(props) {
  const CreateHeader = () => {
    return (
      <>
        <header style={{ display: "flex", flexDirection: "row" }}>
          <Button
            onClick={() => {
              localStorage.setItem("token", "");
              window.location.reload();
            }}
          >
            Log Out
          </Button>

          <div>search bar HERE</div>
          <div>mini profile picture HERE</div>
        </header>
      </>
    );
  };
  return (
    <section
      style={{ overflowY: "auto", width: 1000 }}
      className="main-container"
    >
      {CreateHeader()}
      <PatientPanel />
    </section>
  );
}
