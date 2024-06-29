import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  user: null,
  error:null
};

export const userReducer = createReducer(initialState, {
  loginRequest: (state) => {
    state.loading = true;
  },

  loginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },

  loginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  registerRequest: (state) => {
    state.loading = true;
  },
  registerSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  registerFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  loaduserRequest: (state) => {
    state.loading = true;
  },
  loaduserSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  loaduserFailure: (state,action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  logoutRequest: (state) => {
    state.loading = true;
  },
  logoutSuccess: (state) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
  },
  logoutFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },
  updateRequest:(state)=>{
state.loading = true;
  },
  updateSuccess:(state,action)=>{
    state.loading = false;
state.updatedData = action.payload;
  },
  updateFailure:(state,action)=>{
    state.loading = false;
state.error = action.payload;
  },
  clearError:(state)=>{
    state.error= null;
  }
});
