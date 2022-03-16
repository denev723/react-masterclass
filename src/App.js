import styled, { keyframes } from "styled-components";

const Father = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.backgroundColor};
`;
const Box = styled.div`
    //property 전달
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// style extends
const Circle = styled(Box)`
    border-radius: 50%;
`;

const Text = styled.span`
    color: ${(props) => props.theme.textColor};
`;

const Btn = styled.button`
    color: white;
    background-color: tomato;
    border: 0;
    border-radius: 5px;
`;

// attributes 추가
const Input = styled.input.attrs({ required: true })`
    background-color: tomato;
`;

// animation 추가 styled-components에서 keyframes 불러오기
const ratationAnimation = keyframes`
    0% {
        transform: ratate(0deg);
        border-radius: 0px;
    }
    50% {
        border-radius: 100px;
    }
    100% {
        transform: rotate(360deg);
        border-radius: 0px;
    }
`;

const Emoji = styled.span`
    font-size: 36px;
`;

const AnimationBox = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${ratationAnimation} 1s linear infinite;

    //Pseudo Selector
    span {
        font-size: 36px;

        &:hover {
            font-size: 48px;
        }

        &:active {
            opacity: 0;
        }
    }
`;

const AnimationBox2 = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${ratationAnimation} 1s linear infinite;

    ${Emoji}:hover {
        font-size: 98px;
    }
`;

function App() {
    return (
        <div>
            <Father as={"header"}>
                <Box bgColor="teal">
                    <Text>Hello</Text>
                </Box>
                <Circle bgColor="tomato"></Circle>
            </Father>
            <hr></hr>
            <Father>
                <Btn>Log in</Btn>
                {/* 같은 style 컴포넌트에 다른 태그를 적용 */}
                <Btn as={"a"} href="/">
                    Log in
                </Btn>
            </Father>
            <hr></hr>
            <Father>
                <Input />
                <Input />
            </Father>
            <hr></hr>
            <Father>
                <AnimationBox>
                    <span>🤩</span>
                </AnimationBox>
            </Father>
            <br></br>
            <br></br>
            <br></br>
            <Father>
                <AnimationBox2>
                    <Emoji>🤩</Emoji>
                </AnimationBox2>
                <Emoji>🔥</Emoji>
            </Father>
        </div>
    );
}

export default App;
