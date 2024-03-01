import Button from "@mui/material/Button/Button"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Form, StyledButton, StyledLink} from "../Register/style"
import { InputAdornment, InputLabel, TextField, styled, Input } from "@mui/material"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from "react-hook-form"
import { UserContext } from "../../../context/User"
import { FormControl } from "@mui/base"
import AccountCircle from "@mui/icons-material/AccountCircle"

export interface LoginProps {
  email: string,
  password: string
}

export const LoginDataSchema = yup.object({
  email: yup.string().email("Deve ser um e-mail").required("Campo obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(LoginDataSchema)
  });

  const { LoginUser } = useContext(UserContext)

  const submit: SubmitHandler<LoginProps> = (data) => {
    LoginUser(data)
  }
  return (
    <>
      <h1> Faca seu login </h1>
      <Form onSubmit={handleSubmit(submit)}>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">
            Email
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <InputLabel htmlFor="input-with-icon-adornment">
            Senha
          </InputLabel>

          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <StyledButton variant="contained" type='submit'>
            Logar
          </StyledButton>

          <StyledLink to="/">
            <StyledButton variant="contained">
              Ir para Cadastro
            </StyledButton>
          </StyledLink>
        </FormControl>
      </Form>
    </>
  )
}

export default LoginForm
