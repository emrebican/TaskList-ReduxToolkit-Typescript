import React from "react";
import styled from "styled-components";
import InputField from "./components/InputField";
import ListField from "./components/ListField";

const App: React.FC = () => {
  return (
    <Main>
      <span>Todo List</span>
      <InputField />
      <ListField />
    </Main>
  );
};

export default App;

const Main = styled.div`
  height: 100vh;
  background-color: #0a8edb;
  font-family: "Roboto", sans-serif;

  span {
    position: relative;
    padding-top: 2rem;
    text-align: center;
    display: block;
    color: #fff;
    font-size: 2.4rem;
  }
`;
