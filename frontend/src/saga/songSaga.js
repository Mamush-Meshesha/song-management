import { call,all, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  uploadSongSuccess,
  uploadSongFailure,
  uploadSongToCloudSuccess,
  uploadSongToCloudFailure,
  fetchSongSuccess,
  fetchSongFailure,
  fetchSongByAlbumSuccess,
  fetchSongByAlbumFailure,
  fetchSongByAlbumRequest,
  removeSongSuccess,
  removeSongFailure,
  removeSongRequest,
} from "../slice/songSlice";

function* uploadSong(action) {
  try {
    console.log("Uploading file:", action.payload);
    const response = yield call(
      axios.post,
      "http://localhost:3200/upload",
      action.payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Upload response:", response.data);
    yield put(uploadSongSuccess(response.data.data));
  } catch (error) {
    console.error("Upload error:", error);
    yield put(uploadSongFailure(error.message));
  }
}

function* fetchSong() {
  try {
    const song = yield call(axios.get, "http://localhost:3200/songs")
    yield put(fetchSongSuccess(song.data))
  } catch (error) {
    yield put(fetchSongFailure(error.message))
    
  }
}
function* fetchSongsByAlbum(action) {
  try {
    const res = yield call(axios.get, `http://localhost:3200/album/${action.payload}`,)
    yield put(fetchSongByAlbumSuccess(res.data))
  } catch (error) {
    yield put(fetchSongByAlbumFailure(error.message))
  }
}

function* uploadSongTo(action) {
  try {
    const res = yield call(axios.post, "http://localhost:3200/songs", action.payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    yield put(uploadSongToCloudSuccess(res.data))
  } catch (error) {
    yield put(uploadSongToCloudFailure(error.message))
    
  }
}

function* deleteSongSage(action) {
  try {
    const res = yield call(axios.delete, `http://localhost:3200/delete/${action.payload}`)
    yield put(removeSongSuccess(action.payload))
    console.log(res.data)
  } catch (error) {
    yield put(removeSongFailure(error.message))
    console.log(error.message)
  }
}

function* watchDeleteSong() {
  yield takeLatest("song/removeSongRequest", deleteSongSage)
}

function* watchUploadSong() {
  yield takeLatest("song/uploadSong", uploadSong);
  yield takeLatest(fetchSongByAlbumRequest.type, fetchSongsByAlbum)
}

function* watchUploadTo() {
    yield takeLatest("song/uploadSongToCloud",uploadSongTo)

}

function* watchSongFetch() {
  yield takeLatest("song/fetchSong", fetchSong)
}



export default function* rootSaga() {
  yield all([
    watchUploadSong(),
    watchUploadTo(),
    watchSongFetch(),
    watchDeleteSong()
    // other sagas here
  ]);
}
