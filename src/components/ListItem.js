import React from "react";
import styled, {css} from "styled-components";

import {MdDone} from 'react-icons/md';
import {BiTrashAlt} from 'react-icons/bi';

const Remove = styled.div`
    display:inline-block;
    position: relative;
    bottom:-2px;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff3333;
    }
    display:none;
`;


const ListItemBlock = styled.div`
    display:flex;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckIcon = styled.div`
    width: 26px;
    height: 26px;
    line-height: 35px;
    font-size: 26px;
    display:inline-block;
    position: relative;
    bottom:-2px;
    margin-right: 20px;
    cursor: pointer;
    &: hover {
        width: 26px;
        height: 26px;
        font-size: 26px;
        color: #7de87d;
    }
    
    ${props => props.checked &&
        css`
            color: #7de87d;
        `}

    ${props => props.checked!==true &&
        css`
            color: #000000;
        `}
`;

const Text = styled.div`
    display:inline-block;
    line-height: 35px;
    font-size: 23px;
    font-weight: 500;
    ${props=> props.checked &&
    css`
        color: #98cd98;
        text-decoration: line-through;
    `}

    ${props=> props.checked!==true &&
        css`
            color: #000000;
            text-decoration: none;
        `}
`;

const Time = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 35px;
    ${props => props.checked &&
    css`
        color: #98cd98;
    `}

    ${props => props.checked !== true &&
    css`
        color: #000000;
    `}
`;


function ListItem({todo, onRemove, onCheck}){
    const {id, text, checked, startTime, endTime} = todo;

    const printTime = () => {
        if(checked){
            return endTime;
        } else return(<div style={{paddingLeft:"18px"}, {color:"#ff3333"}}>시작 예정</div>);
    }
    return(
        <ListItemBlock>
            <div style={{width:"300px"}}>
                <CheckIcon checked={checked} onClick={() => onCheck(id)} >{<MdDone></MdDone>}</CheckIcon>
                <Text checked={checked}>{text}</Text>
                <Remove onClick={() => onRemove(id)}>
                    <BiTrashAlt style={{ margin: "0px 0px 0px 15px"}}></BiTrashAlt>
                </Remove>
            </div>
            <Time checked={checked}>{printTime()}</Time>
        </ListItemBlock>
    );
}

export default ListItem;