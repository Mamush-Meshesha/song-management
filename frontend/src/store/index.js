import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";
import rootSaga from "../saga/songSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["song/uploadSong", "song/uploadSongToCloud"],
        ignoredActionPaths: ["payload"],
        ignoredPaths: ["song.uploadedFile"],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
