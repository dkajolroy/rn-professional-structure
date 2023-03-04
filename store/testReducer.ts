import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 10,
};

export const testSlice = createSlice({
  name: 'test-slice',
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action);
      console.log(state);
    },
  },
});
export const {increment} = testSlice.actions;
export default testSlice.reducer;
