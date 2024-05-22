import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "song",
  initialState: {
    uploadedFile: null,
    isLoading: false,
    song: [],
    album: [],
    filteredSong: [],
    error: null,
  },
  reducers: {
    uploadSong: (state, action) => {
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
      state.isLoading = true;
    },
    uploadSongToCloudSuccess: (state, action) => {
      state.song = action.payload;
      state.isLoading = false;
    },
    uploadSongToCloudFailure: (state) => {
      state.isLoading = false;
    },
    fetchSong: (state) => {
      state.isLoading = true;
    },
    fetchSongSuccess: (state, action) => {
      state.song = action.payload;
      state.isLoading = false;
    },
    fetchSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchSongByAlbumRequest: (state) => {
      state.isLoading = true;
    },
    fetchSongByAlbumSuccess: (state, action) => {
      state.filteredSong = action.payload;
      state.isLoading = false;
    },
    fetchSongByAlbumFailure: (state, action) => {
      (state.isLoading = false), (state.error = action.payload);
    },
    removeSongRequest: (state) => {
      state.isLoading = true;
      state.error = null
    },
    removeSongSuccess: (state, action) => {
      state.isLoading = false;
      state.song = state.song.filter((song) => song._id !== action.payload);
    },
    removeSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  uploadSong,
  uploadSongSuccess,
  uploadSongFailure,
  uploadSongToCloud,
  uploadSongToCloudSuccess,
  uploadSongToCloudFailure,
  fetchSong,
  fetchSongSuccess,
  fetchSongFailure,
  fetchSongByAlbumRequest,
  fetchSongByAlbumSuccess,
  fetchSongByAlbumFailure,
  removeSongFailure,
  removeSongRequest,
  removeSongSuccess
} = songSlice.actions;

export default songSlice.reducer;
