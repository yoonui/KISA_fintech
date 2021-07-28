import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Header from "./components/Header"

const Element = ({username}) => {
  return (
    <>
      <h1>안녕하세요. {username}의 새로운 컴포넌트 입니다.</h1>
    </>
  );
}

function App() {
  const [userInput, setuserInput] = useState("초기값");

  const inputChange = (e) => {
    const {value} = e.target;
    console.log(value);
    setuserInput(value);
  }

  return (
    <div>
      <Header title="테스트 페이지"></Header>
      <Element username="코딩맘"></Element>
      <b>사용자 입력 값 : {userInput}</b>
      <br/>
      <input onChange={inputChange}></input>
    </div>
  );
}

export default App;
