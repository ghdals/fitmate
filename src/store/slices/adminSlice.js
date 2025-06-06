import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setUsers, deleteUser, setLoading, setError } = adminSlice.actions;

export const selectUsers = (state) => state.admin.users;
export const selectLoading = (state) => state.admin.loading;
export const selectError = (state) => state.admin.error;

export default adminSlice.reducer;