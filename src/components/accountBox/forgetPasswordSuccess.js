import React, { useContext } from "react";
import { AccountTick } from "../../asset/svgIcons";
import { AccountContext } from "./accountContext";
import { BoxContainer, SubmitButton } from "./common";

const BoldBlueBorder = "#0073ff";

const BlackColor = "black";

const ForgetPasswordSuccessForm = () => {
    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <div
                style={{
                    flex: 1,
                    alignItems: "center",
                    display: "inline-flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <AccountTick size="64" fill={BoldBlueBorder} />
                <p style={{ fontSize: 18, color: BoldBlueBorder, fontWeight: "bold" }}>
                    Congratulations
                </p>
                <p
                    style={{
                        fontSize: 14,
                        color: BlackColor,
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    email sent
                </p>
                <p
                    style={{
                        fontSize: 14,
                        color: BlackColor,
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    You can change your password now
                </p>

                <SubmitButton type="submit" onClick={switchToSignin}>
                    Sign in
                </SubmitButton>
            </div>
        </BoxContainer>
    );
};

export default ForgetPasswordSuccessForm;
