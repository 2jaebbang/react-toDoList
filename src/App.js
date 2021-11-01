import './App.css';
import { Component, useState, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from './components/MainTemplete';
import Head from './components/HeadTemplete';
import List from './components/ListTemplete';
import ListCreate from "./components/ListCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #425364;
  }
`;


function App(){
  const[todos, setTodos] = useState([]);
  const nextId = useRef(0);
  const todoLeft = todos.length;
  const todoSubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current ++;
  }

  const todoRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? {...todo, checked: !todo.checked} : todo;
      })
    );
  };

return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Main>   {/* 투두리스트 전체 블록 css */}
        <h1 style={{textAlign: "center"}}>미리 알림</h1>
        <Head todoLeft={todoLeft}></Head>
        <List todos={todos} onRemove={todoRemove} onCheck={todoCheck}></List>
        <ListCreate onSubmit={todoSubmit}></ListCreate>
      </Main> 
    </div>
  );
}



export default App;
