import { all } from "redux-saga/effects";
import {getSongFetch} from "./songSaga";


function* rootSaga() {
    yield all([
        getSongFetch()
    ])
}

export default rootSaga