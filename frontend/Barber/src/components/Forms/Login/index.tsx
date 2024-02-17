import Button from "@mui/material/Button/Button"
import React from "react"
import { Link } from "react-router-dom"

function LoginForm() {

    return (
        <>
          <h1> Faca seu login </h1>
          <form>
            <label>Email:</label>
            <input></input>
            <label>Senha:</label>
            <input></input>
            <Button component={Link} to="/dashboard" variant="contained">
                    Logar
                </Button>
          </form>
               
           

        </>
    )
}

export default LoginForm
