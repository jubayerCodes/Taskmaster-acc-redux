import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "task",
  initialState: { task: [] },
  reducers: {},
});

export default tasksSlice.reducer;
