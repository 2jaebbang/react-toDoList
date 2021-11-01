import React, {useState} from "react";
import styled, {css} from "styled-components";
import {MdAdd} from 'react-icons/md';

const ListItemBlock = styled.div`
    display:flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    
`;

const CreateIcon = styled.div`
    width: 30px;
    height: 30px;

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
    
    ${props => props.done && 
        css`
            color: #7de87d;
        `}
`;


const InsertForm = styled.form`


    display: none;
    ${({clicked}) => {
        return clicked ? `display: initial` : null;
    }} 
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
`;

function ListCreate(){
    const [isClick, setIsClicked] = useState(false);
    const changeClick = ()=> {
        setIsClicked(isClick => !isClick);  
        alert("Tesg");
    };

    return (
        <ListItemBlock>
            <CreateIcon onClick={changeClick}><MdAdd></MdAdd></CreateIcon>
            <InsertForm clicked={isClick} >
                <Input placeholder="입력할 것" autoFocus></Input>
            </InsertForm>
        </ListItemBlock>
        
    );
}

export default ListCreate;