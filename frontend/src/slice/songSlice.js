import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "song",
  initialState: {
    song: [],

    error: null,
    groupedSongs: {},
  },
  reducers: {
    getSongFetch: (state) => {
      state.isLoading = true;
    },
    getsongSuccess: (state, action) => {
      state.song = action.payload;

      // const grouped = action.payload.reduce((acc, song) => {
      //   const genres = song.Genres;

      //   if (!acc[genres]) {
      //     acc[genres] = [];
      //   }
      //   acc[genres].push(song);
      //   return acc;
      // }, {});
      // state.groupedSongs = grouped;
    },
    getsongFailure: (state) => {
      state.isLoading = false;
    },

    getSongAlbum: (state) => {
      state.isLoading = true;
    },
    getSongAlbumSuccess: (state, action) => {
      state.song = action.payload;
    }
  },
});

export const { getSongFetch, getsongSuccess, getsongFailure } =
  songSlice.actions;

export default songSlice.reducer;
