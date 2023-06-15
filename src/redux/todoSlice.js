import { createSlice } from '@reduxjs/toolkit';

const todoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const todosReducer = todoSlice.reducer;
export const getTodos = state => state.todos;
