import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { Input, InputAdornment, InputLabel, TextField, styled } from "@mui/material";
import { Form, StyledButton, StyledLink } from "./style";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from "../../../context/User";
import { FormControl } from "@mui/base";
import AccountCircle from '@mui/icons-material/AccountCircle';

export interface RegisterProps {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}
export const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Deve ser um e-mail").required("Campo obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
    confirmPassword: yup.string().required("Confirmar senha é obrigatória"),
});

function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    });

    const { registerUser } = useContext(UserContext);


    const submit: SubmitHandler<RegisterProps> = (data) => {
        registerUser(data)
    };

    return (
        <>
            <h1> Faca seu cadastro </h1>
            <Form onSubmit={handleSubmit(submit)}>
                <FormControl >
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Nome de usuário
                    </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        {...register('name')}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
      
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

                    <InputLabel htmlFor="input-with-icon-adornment">
                        Confirmar senha
                    </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        {...register('confirmPassword')}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                    <StyledButton variant="contained" type='submit'>
                        Cadastrar
                    </StyledButton>

                    <StyledLink to="/login">
                        <StyledButton variant="contained">
                            Ir para Login
                        </StyledButton>
                    </StyledLink>
                </FormControl>

            </Form>



        </>
    )
}

export default RegisterForm
