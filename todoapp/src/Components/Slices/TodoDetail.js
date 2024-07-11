import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoDetail: {
    showTodo: false,
    taskDetailId: '',
    firstTodoId: ''
  },
};

export const todoDetail = createSlice({
  name: "todoDetails",
  initialState,
  reducers: {
    addtodoshow: (state, action) => {
      state.todoDetail.showTodo = action.payload;
    },
    taskdetailid:(state, action) =>{
      state.todoDetail.taskDetailId = action.payload;
    },
    getfirsttodo:(state, action) =>{
      state.todoDetail.firstTodoId = action.payload;
    }
  },
});

export const { addtodoshow, taskdetailid, getfirsttodo } = todoDetail.actions;

export default todoDetail.reducer;
