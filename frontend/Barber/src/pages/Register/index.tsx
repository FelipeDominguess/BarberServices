import { styled, Box } from "@mui/material"
import React from "react"
import FooterComponent from "../../components/Footer"
import HeaderComponent from "../../components/Header"
import RegisterForm from "../../components/Forms/Register"

export const Main = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
`
export const RegisterPage = () => {
    return(
        <>
        <Main>
        <HeaderComponent></HeaderComponent>
        <RegisterForm/>
        <FooterComponent></FooterComponent>
        </Main>
        </>
    )
}