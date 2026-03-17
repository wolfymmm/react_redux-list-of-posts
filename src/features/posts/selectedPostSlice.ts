import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState: null as number | null,
  reducers: {
    setSelectedPostId: (state, action: PayloadAction<number | null>) => action.payload,
  },
});

export const { setSelectedPostId } = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
