import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalState } from './types';

const initialState: GlobalState = {};

// global slice
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
});

export const { actions: globalActions, reducer: globalReducer } = globalSlice;
