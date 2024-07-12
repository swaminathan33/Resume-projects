import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoDetail: {
    showTodo: false,
    taskDetailId: '',
    firstTodoId: '',
    sidebarshow:false,
    taskshow:false,
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
    },
    sidebarshow:(state, action) =>{
      state.todoDetail.sidebarshow = action.payload;
    },
    taskshow:(state, action) =>{
      state.todoDetail.taskshow = action.payload;
    }
  },
});

export const { addtodoshow, taskdetailid, getfirsttodo, sidebarshow, taskshow } = todoDetail.actions;

export default todoDetail.reducer;
