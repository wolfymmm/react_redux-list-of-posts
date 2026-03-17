import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'; // Додано PayloadAction
import { Comment } from '../../types/Comment';
import { getPostComments } from '../../api/comments';

export const initComments = createAsyncThunk(
  'comments/fetch',
  (postId: number) => getPostComments(postId)
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    items: [] as Comment[],
    loaded: false,
    hasError: false,
  },
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.items.push(action.payload);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(c => c.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initComments.pending, (state) => {
        state.loaded = false;
        state.hasError = false;
      })
      .addCase(initComments.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loaded = true;
      })
      .addCase(initComments.rejected, (state) => {
        state.loaded = true;
        state.hasError = true;
      });
  },
});


export const { addComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;
