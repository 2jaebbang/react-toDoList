import React, {useState, useEffect, useRef} from "react";
import styled, {css} from "styled-components";
import {MdAdd} from 'react-icons/md';

const ListItemBlock = styled.div`
    display:flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    
`;

const CreateIcon = styled.div`
    width: 39px;
    height: 39px;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    cursor: pointer;
    &:hover {
        color: #ff3333;
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
    padding: 10px;
    border-radius: 8px;
`;

function ListCreate(props){
    const [content, setContent] = useState("");  //리스트 추가하기 위한 내용
    const [isClick, setIsClicked] = useState(false);   //추가 버튼 클릭판별

    //이벤트 감지 (한 글자씩 입력되면)
    const changeInput = (e) => {
        setContent(e.target.value);
    }

    const changeClick = ()=> {
        setIsClicked(isClick => !isClick);  
    };


    const todoSubmit = () => {
        if(!content) return;
        props.onSubmit(content);
        setContent("");
    };

    const keyPress = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            todoSubmit();
            
        }
    }

    return (
        <ListItemBlock style={{padding: "15px 48px"}}>
            <CreateIcon onClick={changeClick}><MdAdd></MdAdd></CreateIcon>
            <InsertForm clicked={isClick} >         
                <Input placeholder="입력할 것" type="text" value={content} onChange={changeInput} onKeyPress={keyPress} autoFocus></Input>
            </InsertForm>
        </ListItemBlock>
        
    );
}

export default ListCreate;