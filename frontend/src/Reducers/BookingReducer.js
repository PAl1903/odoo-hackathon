import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
};

export const bookingReducer = createReducer(initialState, {
  newbookingRequest: (state) => {
    state.loading = true;
  },
  newbookingSuccess: (state, action) => {
    state.loading = false;
    state.bookingDetails = action.payload;
  },
  newbookingFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  particularBookingRequest: (state) => {
    state.loading = true;
  },
  particularBookingSuccess: (state, action) => {
    state.loading = false;
    state.mybookings = action.payload;
  },
  particularBookingFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
});
