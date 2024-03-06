import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "task",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, { payload }) => {
      const id = state.tasks.length ? state.tasks.at(-1)?.id + 1 : 1;

      const task = { id, status: "pending", ...payload };

      state?.tasks.push(task);
    },
    removeTask: (state, { payload }) => {
      const remaining = state?.tasks.filter((task) => task.id !== payload);

      state.tasks = [...remaining];
    },

    setInProgress: (state, { payload }) => {
      const task = state.tasks.find((task) => task.id === payload);
      task.status = "In progress";
    },
  },
});

export const { addTask, removeTask, setInProgress } = tasksSlice.actions;

export default tasksSlice.reducer;
