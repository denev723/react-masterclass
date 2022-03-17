import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

// dark/light theme 을 사용하라면 property name이 같아야 함
const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111"
};

const lightTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke"
};

ReactDOM.render(
    <React.StrictMode>
        {/* theme object 내용을 props로 전달해줄 수 있음 */}
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
