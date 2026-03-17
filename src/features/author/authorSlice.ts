import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authorSlice = createSlice({
  name: 'author',
  initialState: 0, 
  reducers: {
    setAuthor: (state, action: PayloadAction<number>) => action.payload,
  },
});

export const { setAuthor } = authorSlice.actions;
export default authorSlice.reducer;
