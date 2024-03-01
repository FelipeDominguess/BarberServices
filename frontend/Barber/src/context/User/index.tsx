
import { toast } from 'react-toastify';
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { useEffect } from 'react';
import { Router } from 'react-router-dom';
import  api  from '../../services/api';



export interface User {
  id: string;
  name: string;
  email: string;
  registrationDate: string;
}

interface IUserContext {
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
  user: User[];
  registerUser: (data: any) => Promise<void>
  LoginUser: (data: any) => Promise<void>
}

interface IUserChildren {
  children: ReactNode;
}

export const UserContext = React.createContext({}as IUserContext);

export const UserProvider = ({children}: IUserChildren) => {
    const [user, setUser] = useState<User[]>([]);

    const navigate = useNavigate();
  
    const registerUser = async (data: any) => {
      try {
        const response = await api.post("users/", data);
        localStorage.setItem('@TOKEN', response.data.token);
        setUser(response.data);
        toast.success('Cadastro feito com sucesso');
        navigate("/login");
      } catch (error) {
        console.error(error);
        toast.error('Algo deu errado');
      }
    }
  


    const LoginUser = async (data: any) => {
        try {
          const response = await api.post('/login', data);
         localStorage.setItem('@TOKEN', response.data.token);
         setUser(response.data);
          navigate('/dashboard');
        } catch (error) {
          console.log(error);
        }
      };


    return <UserContext.Provider value={{ registerUser,LoginUser, user, setUser }}>{children}</UserContext.Provider>;
}
