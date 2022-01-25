import React, { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import Loading from "../../Loading";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import SnackBar from "./SnackBar";
import axios from "../../helper/axiosInstance";

export function ForgetPasswordForm(props) {
    const { switchToSignup, switchToForgetPasswordSuccess } = useContext(AccountContext);
    const snkbr = useRef();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const resetPassword = async () => {
        if (!email)
            return snkbr.current.openSnackbar(
                "Please enter your email adress",
                "error"
            );

        const url = "/reset_password";
        const formData = new FormData();
        formData.append("username", email);
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
        setLoading(true);

        const { data } = await axios.post(url, formData, config);
        console.log(data.success);
        if (data.success) {
            switchToForgetPasswordSuccess();
        } else {
            setLoading(false);
            return snkbr.current.openSnackbar(data.message, "error");
        }
    }

    return (
        <BoxContainer>
            <SnackBar ref={snkbr} />
            <FormContainer>
                <Input
                    type="email"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormContainer>
            <Marginer direction="vertical" margin={12} />
            <Marginer direction="vertical" margin="1.5em" />
            <SubmitButton data-testid="login-form-submit-btn" onClick={resetPassword} type="submit" disabled={loading}>
                {loading ? <Loading /> : "Reset"}
            </SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink>
                Don't have an account?
                <BoldLink style={{ cursor: "pointer" }} onClick={switchToSignup}>
                    Sign up
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    )
}