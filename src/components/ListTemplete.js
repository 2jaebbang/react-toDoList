import React, { useState } from "react";
import styled from "styled-components";
import ListItem from './ListItem';
import ListCreate from "./ListCreate";


const ListBlock = styled.div`
    padding: 20px 36px;
    padding-bottom: 48px;

`;

function List(){
    
    return (
        <ListBlock>
            <ListItem text="프로젝트 생성하기" done={true}></ListItem>
            <ListItem text="프로젝트 추가하기" done={true}></ListItem>
            <ListItem text="프로젝트 삭제하기" done={false}></ListItem>
            <ListItem text="프로젝트 살펴보기" done={false}></ListItem>
            <ListCreate></ListCreate>
        </ListBlock>
    );
}

export default List;