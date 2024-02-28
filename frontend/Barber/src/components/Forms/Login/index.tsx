import Button from "@mui/material/Button/Button"
import React from "react"
import { Link } from "react-router-dom"
import { Form } from "../Register/style"
import { TextField, styled } from "@mui/material"

function LoginForm() {
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
      <h1> Faca seu login </h1>
      <Form>
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Senha" variant="standard" />
        <StyledLink to="/dashboard">
          <StyledButton variant="contained">
            Logar
          </StyledButton>
        </StyledLink>
      </Form>



    </>
  )
}

export default LoginForm
