import { call, put } from "redux-saga/effects";
import { getsongSuccess } from "../slice/songSlice";
import axios from "axios"
function* getSongFetch() {
  const song = yield call(axios.get ,"http://localhost:3200/songs");
  const formatedSong = yield song.data
  yield put(getsongSuccess(formatedSong));
}

function* getSongAlbum() {
  const album = yield call(axios.get, "http://localhost:3200/album")
  const formatedAlbum = yield album.data
  yield put(formatedAlbum)
}


export  {getSongFetch,getSongAlbum};
