import React, { useLayoutEffect, useState } from "react";
// import { FormOutlined } from "antd";
import { FormOutlined } from "@ant-design/icons";
import NavItem from "./NavItem";
import "./style/nav.css";
//import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";

export default function Nav(props) {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }

      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();

  return (
    <>
      <nav
        style={width > 1280 ? openStyle : props.isOpen ? openStyle : closeStyle}
      >
        <h1 style={{ cursor: "default" }}>DokiDoki</h1>
        <NavItem icon="bi bi-map" name="Dashboard" />
        <NavItem icon="bi bi-map" name="Menu Item2" />
        <NavItem icon="bi bi-map" name="Menu Item3" />
        <NavItem icon="bi bi-map" name="Menu Item4" />
      </nav>
    </>
  );
}

const openStyle = {
  display: "flex",
};

const closeStyle = {
  display: "none",
};
