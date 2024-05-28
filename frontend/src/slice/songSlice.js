import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "song",
  initialState: {
    uploadedFile: null,
    isLoading: false,
    song: [],
    totalSong: [],
    album: [],
    artist: [],
    
    genres: [],
    filteredSong: [],
    selectedSongUrl: null,
    uploadProgress: 0,
    showPlayer: false,
    isHovered: [],
    showUpdate: [],
    error: null,
  },
  reducers: {
    uploadSong: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
      state.uploadProgress = 0;
    },
    uploadSongSuccess: (state, action) => {
      state.uploadedFile = action.payload;
      state.isLoading = false;
      state.uploadProgress = 100;
    },

    uploadSongProgress: (state, action) => {
      state.uploadProgress = action.payload;
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
      state.album = action.payload;
      state.isLoading = false;
    },
    fetchSongByAlbumFailure: (state, action) => {
      (state.isLoading = false), (state.error = action.payload);
    },
    removeSongRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    removeSongSuccess: (state, action) => {
      state.isLoading = false;
      state.song = state.song.filter((song) => song._id !== action.payload);
    },
    removeSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateSongRequest: (state) => {
      state.isLoading = true;
    },
    updateSongSuccess: (state, action) => {
      state.isLoading = false;
      state.song = state.song.map((song) =>
        song._id === action.payload._id ? action.payload : song
      );
    },
    updateSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    fetchSongByArtistRequest: (state) => {
      state.isLoading = true;
    },
    fetchSongByArtistSuccess: (state, action) => {
      state.artist = action.payload;
      state.isLoading = false;
    },
    fetchSongByArtistFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchSongByGenresRequest: (state) => {
      state.isLoading = true;
    },
    fetchSongByGenresSuccess: (state, action) => {
      state.genres = action.payload;
      state.isLoading = false;
    },
    fetchSongByGenresFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    //local state

    setShowPlayer: (state, action) => {
      state.showPlayer = action.payload;
    },
    setSelectedSongUrl: (state, action) => {
      console.log("on slice", action.payload);
      state.selectedSongUrl = action.payload;
    },
    setIsHovered: (state, action) => {
      state.isHovered = action.payload;
      state.isHovered = new Array(action.payload.songs.length).fill(false);
    },
    setShowUpdate: (state, action) => {
      state.showUpdate = action.payload;
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
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  removeSongFailure,
  removeSongRequest,
  removeSongSuccess,
  uploadSongProgress,
  fetchSongByArtistFailure,
  fetchSongByArtistRequest,
  fetchSongByArtistSuccess,
  fetchSongByGenresFailure,
  fetchSongByGenresRequest,
  fetchSongByGenresSuccess,

  setIsHovered,
  setSelectedSongUrl,
  setShowPlayer,
  setShowUpdate,
} = songSlice.actions;

export default songSlice.reducer;
