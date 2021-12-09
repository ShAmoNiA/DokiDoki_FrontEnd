import React from "react";
import { MainColors } from "../config";

const DoctorIcon = (props) => {
  return (
    <svg
      data-testid="doctor-icon"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.fill}
    >
      <path d="M10,3L8,5V7H5C3.85,7 3.12,8 3,9L2,19C1.88,20 2.54,21 4,21H20C21.46,21 22.12,20 22,19L21,9C20.88,8 20.06,7 19,7H16V5L14,3H10M10,5H14V7H10V5M11,10H13V13H16V15H13V18H11V15H8V13H11V10Z" />
    </svg>
  );
};

const SickIcon = (props) => (
  <svg
    data-testid="sick-icon"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={props.fill}
  >
    <path d="M21 9C19.9 9 19 8.1 19 7S21 3 21 3 23 5.9 23 7 22.1 9 21 9M17.5 7C17.5 6.27 17.91 5.29 18.42 4.34C16.68 2.88 14.44 2 12 2C6.47 2 2 6.5 2 12S6.47 22 12 22C17.5 22 22 17.5 22 12C22 11.45 21.94 10.91 21.86 10.38C21.58 10.45 21.3 10.5 21 10.5C19.07 10.5 17.5 8.93 17.5 7M15.62 7.38L16.68 8.44L15.62 9.5L16.68 10.56L15.62 11.62L13.5 9.5L15.62 7.38M7.32 8.44L8.38 7.38L10.5 9.5L8.38 11.62L7.32 10.56L8.38 9.5L7.32 8.44M15.44 17C14.75 15.81 13.47 15 12 15S9.25 15.81 8.56 17H6.88C7.18 16.24 7.64 15.57 8.22 15L5.24 13.3C4.79 13.56 4.23 13.58 3.75 13.3C3.03 12.89 2.79 11.97 3.2 11.25S4.53 10.29 5.25 10.7C5.73 11 6 11.5 6 12L9.57 14.06C10.3 13.7 11.12 13.5 12 13.5C14.33 13.5 16.32 14.95 17.12 17H15.44Z" />
  </svg>
);

const AccountTick = (props) => {
  var size = 24;
  if (props.size !== undefined) {
    size = props.size;
  }

  return (
    <svg
      data-testid="account-tick-icon"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={props.fill}
    >
      <path d="M21.1,12.5L22.5,13.91L15.97,20.5L12.5,17L13.9,15.59L15.97,17.67L21.1,12.5M10,17L13,20H3V18C3,15.79 6.58,14 11,14L12.89,14.11L10,17M11,4A4,4 0 0,1 15,8A4,4 0 0,1 11,12A4,4 0 0,1 7,8A4,4 0 0,1 11,4Z" />
    </svg>
  );
};

const RotatePicture = (props) => {
  var size = 24;
  if (props.size !== undefined) {
    size = props.size;
  }

  return (
    <svg
      data-testid="rotate-icon"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={props.fill}
    >
      <path d="M7.47,21.5C4.2,19.93 1.86,16.76 1.5,13H0C0.5,19.16 5.66,24 11.95,24C12.18,24 12.39,24 12.61,23.97L8.8,20.15L7.47,21.5M12.05,0C11.82,0 11.61,0 11.39,0.04L15.2,3.85L16.53,2.5C19.8,4.07 22.14,7.24 22.5,11H24C23.5,4.84 18.34,0 12.05,0M16,14H18V8C18,6.89 17.1,6 16,6H10V8H16V14M8,16V4H6V6H4V8H6V16A2,2 0 0,0 8,18H16V20H18V18H20V16H8Z" />
    </svg>
  );
};

const UploadAvatar = (props) => {
  var size = 24;
  if (props.size !== undefined) {
    size = props.size;
  }

  return (
    <svg
      data-testid="upload-avatar-icon"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={props.fill}
    >
      <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
    </svg>
  );
};

const CameraIcon = (props) => {
  var size = 24;
  if (props.size !== undefined) {
    size = props.size;
  }

  return (
    <svg
      data-testid="camera-icon"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size}
      height={size}
      fill={props.fill}
      viewBox="0 0 24 24"
    >
      <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
    </svg>
  );
};

const LoadingGif = (props) => {
  var size = 24;
  if (props.size !== undefined) {
    size = props.size;
  }

  return (
    <svg
      data-testid="loading-gif-icon"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        backgroundColor: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      height={props.height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="84" cy="50" r="10" fill="#0073ff">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.3424657534246575s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="1.36986301369863s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="#0073ff;#0073ff;#0073ff;#0073ff;#0073ff"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#0073ff">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.36986301369863s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.36986301369863s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="#0073ff">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.36986301369863s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.3424657534246575s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.36986301369863s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.3424657534246575s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="#0073ff">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.36986301369863s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.684931506849315s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.36986301369863s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.684931506849315s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#0073ff">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.36986301369863s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.0273972602739727s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.36986301369863s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.0273972602739727s"
        ></animate>
      </circle>
    </svg>
  );
};

const CloseIcon = ({
  size = 24,
  color = "black",
  onclick = () => {},
  marginright = 0,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      onClick={onclick}
      cursor="pointer"
      style={{ marginRight: marginright }}
    >
      <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
    </svg>
  );
};

const NavarGhalbSquare = ({
  size = 100,
  fill = MainColors.BoldBluePrimaryBorder,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 368.554 368.554"
        fill={fill}
      >
        <g>
          <path
            d="M292.371,17.347h-44.344V0h-127.5v17.347H76.183c-20.005,0-36.281,16.275-36.281,36.281v278.646
          c0,20.005,16.275,36.281,36.281,36.281h216.188c20.005,0,36.281-16.275,36.281-36.281V53.627
          C328.652,33.622,312.376,17.347,292.371,17.347z M135.527,15h97.5v19.693h-97.5V15z M313.652,332.273
          c0,11.734-9.546,21.281-21.281,21.281H76.183c-11.734,0-21.281-9.546-21.281-21.281V53.627c0-11.734,9.546-21.281,21.281-21.281
          h44.344v17.347h127.5V32.347h44.344c11.734,0,21.281,9.546,21.281,21.281V332.273z"
          />
          <path
            d="M249.473,169.358l-7.8,11.849c-1.11,1.686-2.794,1.882-3.467,1.888c-0.691,0.001-2.36-0.161-3.5-1.826l-0.217-0.317
          c-3.948-5.77-10.465-8.865-17.431-8.29c-6.967,0.579-12.883,4.711-15.824,11.053l-4.166,8.982
          c-1.124,2.426-3.309,2.496-4.194,2.412c-0.887-0.083-3.02-0.555-3.677-3.146l-9.067-35.742c-2.199-8.67-9.665-14.475-18.598-14.475
          c-0.036,0-0.071,0-0.107,0c-8.98,0.046-16.437,5.941-18.554,14.668l-8.178,33.702c-0.642,2.646-2.813,3.112-3.716,3.19
          c-0.901,0.076-3.122-0.009-4.208-2.507l-8.062-18.541c-3.048-7.012-9.958-11.542-17.603-11.542H79.485v15h21.619
          c1.671,0,3.181,0.99,3.847,2.523l8.062,18.541c3.343,7.688,10.895,12.188,19.253,11.47c8.353-0.721,15.027-6.451,17.003-14.598
          l8.178-33.702c0.698-2.878,3.068-3.201,4.055-3.206c1.025,0.004,3.36,0.293,4.088,3.164l9.066,35.742
          c2.024,7.979,8.628,13.629,16.825,14.393c0.624,0.059,1.243,0.087,1.857,0.087c7.461,0,14.138-4.223,17.337-11.123l4.166-8.982
          c0.927-1.998,2.727-2.354,3.458-2.416c0.728-0.056,2.565-0.006,3.809,1.812l0.217,0.317c3.586,5.241,9.498,8.356,15.84,8.355
          c0.058,0,0.116,0,0.173,0c6.408-0.057,12.338-3.287,15.861-8.64l7.801-11.849c0.778-1.182,2.088-1.888,3.503-1.888h23.563v-15
          h-23.563C259.028,160.718,253.034,163.948,249.473,169.358z"
          />
          <rect x="79.485" y="271.777" width="84.688" height="15" />
          <rect x="79.485" y="308.443" width="169.375" height="15" />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  );
};

export {
  DoctorIcon,
  SickIcon,
  AccountTick,
  LoadingGif,
  RotatePicture,
  CameraIcon,
  UploadAvatar,
  CloseIcon,
  NavarGhalbSquare,
};
