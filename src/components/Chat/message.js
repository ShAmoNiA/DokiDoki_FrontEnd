import React from "react";
import { CheckIcon, DoubleCheckIcon } from "../../asset/svgIcons";
import { MainColors } from "../../config";

const messageDirection = {
  true: { direction: "ltr", marginRight: 24 },
  false: { direction: "rtl", marginLeft: 24 },
};

const messageColor = {
  true: {
    backgroundColor: MainColors.ContrastedPurple,
    borderBottomLeftRadius: 0,
  },
  false: {
    backgroundColor: MainColors.Gray,
    borderBottomRightRadius: 0,
  },
};

const multipleMessage = {
  true: { marginTop: 0 },
  false: { marginTop: 8 },
};

const MainMessage = ({
  date,
  message,
  sender = false,
  multiple = false,
  seen = false,
}) => {
  const CreateSeen = () => {
    if (!sender) return <></>;

    return (
      <div>
        {seen ? (
          <div style={{ marginRight: 4 }}>
            <DoubleCheckIcon
              fill={MainColors.BoldBluePrimaryBorder}
              size={15}
            />
          </div>
        ) : (
          <div>
            <CheckIcon style={{ marginRight: 4 }} fill="black" size={15} />
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      style={{
        marginLeft: 8,
        marginRight: 8,

        ...messageDirection[sender],
        ...multipleMessage[multiple],
      }}
    >
      <div style={{ display: "flex" }} data-testid="message-body">
        <div
          data-testid="message-text"
          style={{
            padding: 8,
            color: "white",
            borderRadius: 16,
            ...messageColor[sender],
            textAlign: "left",
            fontSize: 18,
          }}
        >
          {message}
        </div>
      </div>

      <div style={{ display: "flex" }} data-testid="message-date">
        <div
          style={{
            marginLeft: 8,
            marginRight: 8,
            color: "black",
            opacity: 0.5,
            display: "flex",
            alignItems: "flex-end",
            fontSize: 10,
          }}
        >
          {CreateSeen()}
          {date}
        </div>
      </div>
    </div>
  );
};

export default MainMessage;
