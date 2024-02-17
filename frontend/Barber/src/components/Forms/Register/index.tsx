import React from "react"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

function RegisterForm() {

    return (
        <>
            <h1> Faca seu cadastro </h1>
            <form>
                <label>Nome:</label>
                <input></input>
                <label>Email:</label>
                <input></input>
                <label>Senha:</label>
                <input></input>
                <label>Confirmar senha:</label>
                <input></input>
                <Button component={Link} to="/login" variant="contained">
                    Ir para login
                </Button>
            </form>



        </>
    )
}

export default RegisterForm
