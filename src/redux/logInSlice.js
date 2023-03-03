import { createSlice } from '@reduxjs/toolkit';

export const logInSlice = createSlice({
  name: 'signIn',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {

    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    
  },
});

export const {
  setEmail,
  setPassword,
} = logInSlice.actions;

export default logInSlice.reducer;