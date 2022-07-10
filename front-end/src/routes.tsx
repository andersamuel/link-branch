import React from "react";
import { Route, Routes } from "react-router-dom";
import { Links } from "./pages/links";
import { Login } from "./pages/login";

export const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/:user/:page" element={<Links />} />
    </Routes>
  );
};
