import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/index";
import  {RegisterPage}  from "../pages/Register/index";
import React from "react";
import { DashboardPage } from "../pages/Dashboard";


export const RoutesMain = () => {
   return (
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
   );
};