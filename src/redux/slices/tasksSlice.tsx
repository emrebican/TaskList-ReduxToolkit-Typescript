import { createSlice, nanoid } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tasks: any;
}

const initialState: TaskState = {
  tasks: [],
};

interface TaskInterface {
  title: string;
  id: string;
  completed: boolean;
  edit: boolean;
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Object>) => {
      return {
        tasks: [
          ...state.tasks,
          {
            title: action.payload,
            id: nanoid(),
            completed: false,
            edit: false,
          },
        ],
      };
    },
    completeTask: (state, action: PayloadAction<Object>) => {
      state.tasks = state.tasks.map((task: TaskInterface) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    removeTask: (state, action: PayloadAction<Object>) => {
      state.tasks = state.tasks.filter(
        (task: TaskInterface) => task.id !== action.payload
      );
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task: TaskInterface) =>
        task.id === action.payload.id
          ? { ...task, edit: !task.edit, title: action.payload.title }
          : task
      );
    },
  },
});

export const { addTask, completeTask, removeTask, editTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
