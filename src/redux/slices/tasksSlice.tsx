import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface TaskState {
  tasks: [];
}

const initialState: TaskState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

// export const {} tasksSlice.actions;

export default tasksSlice.reducer;
