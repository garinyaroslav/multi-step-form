import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState, PersonalInfo } from './types';

const initialState: AppState = {
  page: 1,
  personalInfo: {
    fullName: '',
    email: '',
    phoneNumber: '',
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload;
    },
    nextPage: (state) => {
      state.page++;
    },
    prevPage: (state) => {
      state.page--;
    },
  },
});

export const { nextPage, prevPage, addInfo } = appSlice.actions;
export default appSlice.reducer;
