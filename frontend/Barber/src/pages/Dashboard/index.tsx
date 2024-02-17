import React from "react";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import ResponsiveDatePickers from "../../components/schedule";
import Button from "@mui/material/Button/Button";
import { Link } from "react-router-dom";




export const DashboardPage = () => {


    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Button component={Link} to="/" variant="contained">
                    Sair
                </Button>
            <ResponsiveDatePickers />
            <p>Dash</p>
            <FooterComponent></FooterComponent>
        </>
    );
}