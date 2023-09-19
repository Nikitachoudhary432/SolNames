import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeState } from './types';

const initialState: HomeState = {};

// home slice
export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export const { actions: homeActions, reducer: homeReducer } = homeSlice;
