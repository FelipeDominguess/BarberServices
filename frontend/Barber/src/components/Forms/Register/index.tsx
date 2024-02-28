import React from "react"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { TextField, styled } from "@mui/material";
import { Form } from "./style";


function RegisterForm() {
     const StyledLink = styled(Link)`
    text-decoration: none;
`;
    const StyledButton = styled(Button)`
    background-color: #0d5bcf;
    color: white;
  
    &:hover {
      background-color: #69d113;
    }
  `;
    return (
        <>
            <h1> Faca seu cadastro </h1>
            <Form>
                <TextField id="standard-basic" label="Nome" variant="standard" />
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Senha" variant="standard" />
                <TextField id="standard-basic" label="Confirmar Senha" variant="standard" />
                <StyledLink to="/login">
                    <StyledButton variant="contained">
                        Cadastrar
                    </StyledButton>
                </StyledLink>
            </Form>



        </>
    )
}

export default RegisterForm
