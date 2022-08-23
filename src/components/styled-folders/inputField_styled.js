import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  max-width: 40%;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 0;
  height: 2.6rem;
  border-radius: 20px;
  /* overflow: hidden; */
  box-shadow: 0px 0px 6px #212121;

  input {
    flex-basis: 60%;
    margin: 0;
    padding: 0 1rem;
    font-size: 1.2rem;
    color: #212121;
    border: none;
    outline: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    transition: all ease 0.4s;

    &:focus {
      box-shadow: 0 0 10px 10000px rgba(0, 0, 0, 0.4);
    }
  }

  button {
    flex-basis: 40%;
    border: none;
    background-color: #212121;
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    transition: all ease 0.1s;

    &:active {
      font-size: 1.5rem;
    }
  }
`;

export default FormWrapper;