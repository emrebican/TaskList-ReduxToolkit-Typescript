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
  return (
    <form>
      <span>{task.title}</span>
      <div>
        <FaEdit />
      </div>
    </form>
  );
};

export default TaskCard;
