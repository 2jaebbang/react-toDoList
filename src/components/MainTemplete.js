import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
    width: 512px;
    height: 720px;

    position: relative;
    background: white;
    border-radius: 20px;

    margin: auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
`;

function Main({ children }){
    return <MainBlock >{children}</MainBlock>
}

export default Main;