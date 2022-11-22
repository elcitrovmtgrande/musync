/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { UserState, Token } from '../../types';

export const userSlice = createSlice({
  name: 'user',
  initialState: {} as UserState,
  reducers: {
    updateUser: (state, action) => {
      const { payload } = action;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (payload.spotifyToken) state.spotifyToken = payload.spotifyToken;
      if (payload.appleToken) state.appleToken = payload.appleToken;
      if (payload.youtubeToken) state.youtubeToken = payload.youtubeToken;
    },
    updateSpotify: (state, action) => {
      const { payload } = action;
      state.spotifyToken = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, updateSpotify } = userSlice.actions;

export default userSlice.reducer;
