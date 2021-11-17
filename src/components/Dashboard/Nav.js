import React, {useLayoutEffect, useState} from 'react'
// import { FormOutlined } from "antd";
import { FormOutlined } from "@ant-design/icons";
import NavItem from "./NavItem";
import './style/nav.css'
//import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";

export default function Nav(props) {

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }

            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [width, height] = useWindowSize();

    return (
      <>
        <nav
          style={
            width > 1280 ? openStyle : props.isOpen ? openStyle : closeStyle
          }
        >
          <h1>DokiDoki</h1>
          <NavItem icon="bi bi-map" name="Dashboard" />
          <NavItem icon="bi bi-person-badge" name="Patient Overview" />
          <NavItem icon="bi bi-map" name="Map View" />
          <NavItem icon="bi bi-person" name="Employee View" />
          <NavItem icon="bi bi-map" name="Resident / Employee search" />
          <NavItem icon="bi bi-map" name="Call / Message screen" />
          <NavItem icon="bi bi-map" name="Device portal / Provisioning" />
          <NavItem icon="bi bi-map" name="Track visitors" />
          <NavItem icon="bi bi-map" name="Hyperledger" />
          {/* <FormOutlined className="formOutlined" style={{ fontSize: "550%" }} /> */}
        </nav>
      </>
    );
};

const openStyle = {
    display: 'flex'
}

const closeStyle = {
    display: 'none'
}
