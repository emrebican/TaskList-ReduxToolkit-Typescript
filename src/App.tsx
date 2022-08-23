import React from "react";
import styled from "styled-components";
import InputField from "./components/InputField";

const App: React.FC = () => {
  return (
    <Main>
      <span>Todo List</span>
      <InputField />
    </Main>
  );
};

export default App;

const Main = styled.div`
  height: 100vh;
  background-color: #00a2ff;
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
