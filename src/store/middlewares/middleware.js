import { call, all } from "redux-saga/effects";
import { bearsSagas } from "../../Saga/bearsSaga";


export default function* middleware() {
    yield all([call(bearsSagas)]);
}