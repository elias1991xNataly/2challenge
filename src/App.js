import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import bootstrap
import "bootstrap/dist/css/bootstrap.css";
import { ThemeContext } from "./components/Header/Header";
import React, { useContext } from "react";


function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Header>

        <Main />
    </Header>
  );
}

export default App;
