import React from 'react';
import styled from "styled-components";

const MyButton = styled.button`
    background-color: red;
    color:white;
`

const StyledButton = () => {
    return <MyButton>내가만든버튼</MyButton>
}

export default StyledButton;
