import CardWrapper from "./styled-folders/taskCard_styled";

import { useDispatch } from "react-redux";
import { completeTask, removeTask } from "../redux/slices/tasksSlice";

import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdDone } from "react-icons/md";

interface TaskInterface {
  title: string;
  id: string;
  completed: boolean;
}

type Prop = {
  task: TaskInterface;
};

const TaskCard = ({ task }: Prop) => {
  const dispatch = useDispatch();
  console.log(task);

  return (
    <CardWrapper>
      <form>
        {task.completed ? <s>{task.title}</s> : <article>{task.title}</article>}
      </form>
      <div>
        <FaEdit />
        <MdDone onClick={() => dispatch(completeTask(task.id))} />
        <RiDeleteBack2Fill onClick={() => dispatch(removeTask(task.id))} />
      </div>
    </CardWrapper>
  );
};

export default TaskCard;
