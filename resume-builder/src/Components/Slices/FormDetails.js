import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    form:{
        personal:[],
        experience:[],
        skills:[],
        education:[],
        languages:[],
        online:[]
    }
}

export const FormDetails = createSlice({
    name:'formdetails',
    initialState,
    reducers:{
        addPersonal:(state, action) =>{
            state.form.personal = action.payload;
        },
        addExperience:(state, action) =>{
            state.form.experience = action.payload;
        },
        addSkills:(state, action) =>{
            state.form.skills = action.payload;
        },
        addEducation:(state, action) =>{
            state.form.education = action.payload;
        },
    }
})

export const { addPersonal, addExperience, addSkills, addEducation } = FormDetails.actions;

export default FormDetails.reducer