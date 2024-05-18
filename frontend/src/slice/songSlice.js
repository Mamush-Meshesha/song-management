import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "song",
  initialState: {
    uploadedFile: null,
    isLoading: false,
    song: [],
    error: null,
  },
  reducers: {
    uploadSong: (state,action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    uploadSongSuccess: (state, action) => {
      state.uploadedFile = action.payload;
      state.isLoading = false;
    },
    uploadSongFailure: (state) => {
      state.isLoading = false;
    },

    // upload song
    uploadSongToCloud: (state) => {
      state.isLoading = true
    },
    uploadSongToCloudSuccess: (state, action) => {
      state.song = action.payload
      state.isLoading = false
    },
    uploadSongToCloudFailure: (state, ) => {
      state.isLoading = false
    },
    fetchSong: (state) => {
      state.isLoading = true;
    },
    fetchSongSuccess: (state, action) => { 
      state.song = action.payload;
      state.isLoading =false
    },
    fetchSongFailure: (state,action) => {
      state.isLoading = false
      state.error = action.payload
    }
  },
});

export const { uploadSong, uploadSongSuccess, uploadSongFailure, uploadSongToCloud, uploadSongToCloudSuccess,uploadSongToCloudFailure,fetchSong,fetchSongSuccess,fetchSongFailure } =
  songSlice.actions;

export default songSlice.reducer;
