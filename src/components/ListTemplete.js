import React, { useState } from "react";
import styled from "styled-components";
import ListItem from './ListItem';



const ListBlock = styled.div`
    padding: 10px 55px;
    padding-bottom: 0px;
`;

function List({todos, onRemove, onCheck}){
    
    return (
        <ListBlock>
            {todos.map((todo)=>(
                <ListItem todo = {todo} key={todo.id} onRemove={onRemove} onCheck={onCheck}></ListItem>
            ))}
        </ListBlock>
    );
}

export default List;