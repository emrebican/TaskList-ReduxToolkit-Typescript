import CardWrapper from "./styled-folders/taskCard_styled";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { completeTask, removeTask, editTask } from "../redux/slices/tasksSlice";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdDone } from "react-icons/md";

interface TaskInterface {
  title: string;
  id: string;
  completed: boolean;
  edit: boolean;
}

type Prop = {
  task: TaskInterface;
};

const TaskCard = ({ task }: Prop) => {
  const [edit, setEdit] = useState(task.title);

  const dispatch = useDispatch();
  console.log(task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, title: edit }));
  };

  useEffect(() => {
    setEdit(task.title);
  }, [task.edit]);

  return (
    <CardWrapper>
      <form onSubmit={handleSubmit}>
        {task.edit ? (
          <input
            type="text"
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          />
        ) : task.completed ? (
          <s>{task.title}</s>
        ) : (
          <article>{task.title}</article>
        )}
      </form>
      <div>
        <FaEdit
          onClick={() => dispatch(editTask({ id: task.id, title: task.title }))}
        />
        <MdDone onClick={() => dispatch(completeTask(task.id))} />
        <RiDeleteBack2Fill onClick={() => dispatch(removeTask(task.id))} />
      </div>
    </CardWrapper>
  );
};

export default TaskCard;
