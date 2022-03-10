import {BEARS_ACTION_TYPES} from "../actions/bearsActions";


export function getBearsRequest(searchedBears, page) {
    return { type: BEARS_ACTION_TYPES.BEARS_GET_REQUEST, payload: { searchedBears, page } };
}
export function getBearsRequestSucceed(bears) {
    return { type: BEARS_ACTION_TYPES.BEARS_GET_REQUEST_SUCCESS, payload: { bears } };
}

export function getSinglBearsRequest(id) {
    return {type: BEARS_ACTION_TYPES.BEARS_GET_SINGLE_REQUEST,payload: { id } };
}
export function getSinglBearsRequestSucceed(bear) {
    return { type: BEARS_ACTION_TYPES.BEARS_GET_SINGLE_REQUEST_SUCCESS, payload:  bear};
}
export function getRandomBearRequest() {
    return {type: BEARS_ACTION_TYPES.BEARS_RANDOM_REQUEST};
}
export function getRandomBearRequestSucceed(random) {
    return { type: BEARS_ACTION_TYPES.BEARS_RANDOM_REQUEST_SUCCESS, payload: { random } };
}
export function loadingType() {
    return { type: BEARS_ACTION_TYPES.LOADING, payload: {} };
}
export function showError(error) {
    return { type : BEARS_ACTION_TYPES.ERROR, payload : {error} }
}