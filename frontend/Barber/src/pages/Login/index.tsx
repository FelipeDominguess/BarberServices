import { Box, styled } from "@mui/material";
import React from "react";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import LoginForm from "../../components/Forms/Login";

export const Main = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
`

export const LoginPage = () => {
    return (
        <>
            <Main>
            <HeaderComponent></HeaderComponent>
            <LoginForm/>
                <FooterComponent></FooterComponent>
            </Main>

        </>
    )
}