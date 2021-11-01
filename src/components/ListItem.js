import React from "react";
import styled, {css} from "styled-components";
import {MdDone} from 'react-icons/md';
import {FiDelete} from 'react-icons/fi';

const Remove = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display:none;
`;


const ListItemBlock = styled.div`
    display:flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckIcon = styled.div`
    width: 24px;
    height: 24px;

    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    &: hover {
        width: 32px;
        height: 32px;
        font-size: 32px;
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
    font-size: 24px;
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


function ListItem({todo, onRemove, onCheck}){
    const {id, text, checked} = todo;

    return(
        <ListItemBlock>
            <CheckIcon checked={checked} onClick={()=> onCheck(id)} >{<MdDone></MdDone>}</CheckIcon>
            <Text checked={checked}>{text}</Text>
            <Remove onClick={()=> onRemove(id)}>
                <FiDelete></FiDelete>
            </Remove>
        </ListItemBlock>
    );
}

export default ListItem;