// src/store/slices/formSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  height: '',
  weight: '',
  gender: '',
  level: '',
  goal: '',
  frequency: '',
  duration: ''
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setLevel: (state, action) => {
        state.level = action.payload;
    },
    setGoal: (state, action) => {
        state.goal = action.payload;
    },
    setFrequency: (state, action) => {
      state.frequency = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    }
  }
});

export const { setHeight, setWeight, setGender, setLevel, setGoal, setFrequency, setDuration } = formSlice.actions;
export default formSlice.reducer;
