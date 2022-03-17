import styled from "styled-components";

interface ContainerProp {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProp>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProp {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({ bgColor, borderColor, text = "nothing" }: CircleProp) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) =>
    `Hello ${playerObj.name} You are ${playerObj.age} years old.`;

sayHello({ name: "denev", age: 32 });

// error 발생
// sayHello({ name: "denev", age: 32, hello: 1 });
