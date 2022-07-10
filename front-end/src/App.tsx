import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./assets/styles/global";

import { Links } from "./pages/links";
import { Switcher } from "./components/switcher";
import { Navbar } from "./components/navbar";

import { ThemeProvider } from "styled-components";
import dark from "./assets/styles/themes/dark";
import light from "./assets/styles/themes/light";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const recoveredTheme = localStorage.getItem("theme");

    if (!recoveredTheme) {
      localStorage.setItem("theme", "dark");
      setTheme(dark);
    } else if (recoveredTheme === "light") {
      setTheme(light);
    } else setTheme(dark);

    setTimeout(() => {
      document.body.classList.add("sc-h69tZM");
    }, 0);
  }, []);

  const toggleTheme = () => {
    const recoveredTheme = localStorage.getItem("theme");

    setTheme(theme.title == "dark" ? light : dark);

    if (recoveredTheme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRoutes />
        <Navbar />

        <Switcher toggleTheme={toggleTheme} />

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
