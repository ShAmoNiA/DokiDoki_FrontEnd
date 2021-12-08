import React from "react";

const DoctorIcon = (props) => {
  return (
    <svg
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


export {
  DoctorIcon,
  SickIcon,
  AccountTick,
  LoadingGif,
  RotatePicture,
  CameraIcon,
  UploadAvatar,
};
