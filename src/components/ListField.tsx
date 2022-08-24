import React from "react";
import ListWrapper from "./styled-folders/listField_styled";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import TaskCard from "./TaskCard";

const ListField: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  console.log(tasks);

  interface TaskInterface {
    title: string;
    id: string;
    completed: boolean;
    edit: boolean;
  }

  return (
    <ListWrapper>
      {tasks.length ? (
        <section>
          {tasks.map((task: TaskInterface) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </section>
      ) : (
        <h2>There is no tasks, we are free today 🥳🥳🎉🎉🎉</h2>
      )}
    </ListWrapper>
  );
};

export default ListField;
