import React from 'react';
import styled from 'styled-components';

const HeadBlock = styled.div`

    padding-top: 48px;
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 24px;

    h2 {
        display: inline-block;
        margin: 0;
        
    }

    .day {
        margin-top: 4px;
        font-size: 18px;
    }
    .todoLeft {
        display:inline-block;
        font-size: 18px;
        font-weight: bold;
        float: right;
    }

`;


function Head(props){
    return (
        <HeadBlock>
          
            <h3>{props.todoLeft}개 남음</h3>
            <hr></hr>
        </HeadBlock>
    );
}

export default Head;