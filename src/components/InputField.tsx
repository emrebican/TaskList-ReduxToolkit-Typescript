import React, { useState, useRef } from "react";
import FormWrapper from "./styled-folders/inputField_styled";

import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";

const InputField: React.FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
    }
    inputRef.current?.blur();
    setTask("");
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type something to do"
          required
          ref={inputRef}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Go</button>
      </form>
    </FormWrapper>
  );
};

export default InputField;
