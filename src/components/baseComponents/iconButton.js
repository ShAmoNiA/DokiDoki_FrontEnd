import { IconButton } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { RotatePicture } from "../../asset/svgIcons";
import { MainColors } from "../../config";

const MainIconButton = ({ size, color }) => {
  return (
    <IconButton size="small">
      <RotatePicture size={size} fill={color} />
    </IconButton>
  );
};

export default MainIconButton;
