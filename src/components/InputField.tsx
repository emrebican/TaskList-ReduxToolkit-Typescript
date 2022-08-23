import React, { useState } from "react";
import FormWrapper from "./styled-folders/inputField_styled";

import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";

const InputField: React.FC = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(addTask(task));
  };

  const handleChange = (e: any) => {
    setTask(e.target.value);
  };

  return (
    <FormWrapper>
      <input
        type="text"
        placeholder="type something to do"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Go
      </button>
    </FormWrapper>
  );
};

export default InputField;
