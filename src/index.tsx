import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { dakrTheme, lightTheme } from "theme";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={dakrTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
