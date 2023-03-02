// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import profilePic from "../assets/images/profile.jpg"
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    profilePic: profilePic
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    update:(state,action) =>{
      state.profilePic =action.payload ;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = null;
      state.profilePic= profilePic;
    }
  }
});

export const { login, logout ,update} = authSlice.actions;

export default authSlice.reducer;