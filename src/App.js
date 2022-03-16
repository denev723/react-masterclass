import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Circle = styled(Box)`
    border-radius: 50%;
`;

const Text = styled.span`
    color: white;
`;

function App() {
    return (
        <Father>
            <Box bgColor="teal">
                <Text>Hello</Text>
            </Box>
            <Circle bgColor="tomato"></Circle>
        </Father>
    );
}

export default App;
