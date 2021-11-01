import './App.css';
import { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from './components/MainTemplete';
import Head from './components/HeadTemplete';
import List from './components/ListTemplete';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

class ToDo extends Component {
  render() {
    return (
        <div>
          <ul>
            <li>test1</li>
            <li>test2</li>
          </ul>
        </div>
    );
  }
}

class App extends Component{
  render(){
return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Main>   {/* 투두리스트 전체 블록 css */}
        <h1 style={{textAlign: "center"}}>미리 알림</h1>
        <Head></Head>
        <List></List>
      </Main> 
    </div>
  );
  }
}



export default App;
