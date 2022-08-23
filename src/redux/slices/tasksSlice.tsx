import { createSlice, nanoid } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface TaskState {
  tasks: any;
}

const initialState: TaskState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Object>) => {
      return {
        tasks: [
          ...state.tasks,
          { title: action.payload, id: nanoid(), completed: false },
        ],
      };
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
