import React, { useState } from "react";
import styled from "styled-components";

function App() {
    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Hello", value);
    };

    const Container = styled.div`
        background-color: ${(props) => props.theme.bgColor};
    `;
    const H1 = styled.h1`
        color: ${(props) => props.theme.textColor};
    `;

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={value}
                    type={"text"}
                    placeholder="Username"
                />
                <button>Login</button>
            </form>
            <hr />
            <Container>
                <H1>Hello</H1>
            </Container>
        </div>
    );
}

export default App;
