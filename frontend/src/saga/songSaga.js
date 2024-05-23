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
  updateSongSuccess,
  updateSongFailure,
  uploadSongProgress,
  fetchSongByArtistSuccess,
  fetchSongByArtistFailure,
  fetchSongByArtistRequest,
  fetchSongByGenresSuccess,
  fetchSongByGenresFailure,
  fetchSongByGenresRequest,
} from "../slice/songSlice";

const createUploadProgressHandler = (dispatch) => (progressEvent) => {
  const progress = Math.round(
    (progressEvent.loaded * 100) / progressEvent.total
  );
  dispatch(uploadSongProgress(progress));
};
function* uploadSong(action) {
  try {
    const uploadProgressHandler = createUploadProgressHandler(yield);
    console.log("Uploading file:", action.payload);
    const response = yield call(
      axios.post,
      "http://localhost:3200/upload",
      action.payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: uploadProgressHandler,        
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
    const res = yield call(axios.get, "http://localhost:3200/album", {
      params: { album: action.payload },
    })
    yield put(fetchSongByAlbumSuccess(res.data))
    console.log(res.data)
  } catch (error) {
    yield put(fetchSongByAlbumFailure(error.message))
  }
}

function* fetchSongByArtistSaga(action) {
  try {
    const res = yield call(axios.get, "http://localhost:3200/artist", {
      params: {artist: action.payload}
    })
    yield put(fetchSongByArtistSuccess(res.data))
  } catch (error) {
    yield put(fetchSongByArtistFailure(error.message))
  }
}

function* fetchSongByGenreSaga(action) {
  try {
    const res = yield call(axios.get, "http://localhost:3200/genres", {
      params: {genres: action.payload}
    })
    yield put(fetchSongByGenresSuccess(res.data))
  } catch (error) {
    yield put(fetchSongByGenresFailure(error.message))
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

function* updateSongSage(action) {
  try {
    const res = yield call(axios.put, `http://localhost:3200/update/${action.payload.id}`,action.payload)
    yield put(updateSongSuccess(res.data))
    console.log(res.data)
  } catch (error) {
    yield put(updateSongFailure(error.message))
  }
}

function* watchDeleteSong() {
  yield takeLatest("song/removeSongRequest", deleteSongSage)
}

function* watchFetchSongByArtist() {
  yield takeLatest(fetchSongByArtistRequest.type, fetchSongByArtistSaga)
}
function* watchUpdateSong() {
  yield takeLatest("song/updateSongRequest", updateSongSage)
}

function* watchFetchSongByGenres() {
  yield takeLatest(fetchSongByGenresRequest.type, fetchSongByGenreSaga)
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
    watchDeleteSong(),
    watchUpdateSong(),
    watchFetchSongByArtist(),
    watchFetchSongByGenres()
    // other sagas here
  ]);
}
