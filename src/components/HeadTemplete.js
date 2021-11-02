import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';
import { useInterval } from 'react-use';


const HeadBlock = styled.div`

    padding-top: 48px;
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 24px;

    .headDiv {
        padding: 10px;
        line-height: 0.5;
    }

    h2 {
        display: inline-block;
        margin: 0;
        padding: 0px 20px 0px 0px;
        
    }

    h3 {
        float: right;
        margin : auto auto;
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

const LiveTimeContainer = () => {
    const [realTimeYMD, setRealTimeYMD] = useState(moment().format('YYYY년 MM월 DD일'));
    const [realTimeD, setRealTimeD] = useState(moment().format('dddd'));
  
    // useInterval
    useInterval(() => {
      setRealTimeYMD(moment().format('YYYY년 MM월 DD일'));
      setRealTimeD(moment().format('dddd'));
    }, 1000);
  
    return (
        <>
            <h2>{realTimeYMD}</h2>
            <h2>{realTimeD}</h2>
        </>
    );
  }

function Head(props){
    
    return (
        <HeadBlock>
            <div className="headDiv">
                <LiveTimeContainer></LiveTimeContainer>
                <h3>{props.todoLeft}개 남음</h3>
            </div>
            
            <hr/>
        </HeadBlock>
    );
}

export default Head;