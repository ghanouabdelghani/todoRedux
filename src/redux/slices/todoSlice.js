import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.Todos.push(action.payload);
    },
    setCompleted: (state, action) => {
      const todo = state.Todos.find((todo) => todo.id == action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.Todos = state.Todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, setCompleted, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
