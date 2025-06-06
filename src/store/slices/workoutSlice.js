import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workoutSchedule: {},
  status: 'idle',
  error: null
};

const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    updateWorkoutStatus: (state, action) => {
      const { date, schedule } = action.payload;
      state.workoutSchedule[date] = schedule;
    },
    resetWorkoutSchedule: (state) => {
      state.workoutSchedule = {};
    }
  }
});

export const { updateWorkoutStatus, resetWorkoutSchedule } = workoutSlice.actions;
export const selectWorkoutSchedule = (state) => state.workout.workoutSchedule;

export default workoutSlice.reducer;
