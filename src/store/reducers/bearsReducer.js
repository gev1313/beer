import {BEARS_ACTION_TYPES} from "../actions/bearsActions";

const initialState = {
    bears: {
        name: '',
        tagline: '',
        items: []
    },
    singleBear: null,
    resultsFlag: false,
    error: null,
    randomBear: []
};

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case BEARS_ACTION_TYPES.BEARS_GET_REQUEST_SUCCESS: {
            return {
                ...state,

                bears: {
                    ...state.bears,
                    name: payload.bears.name,
                    items: payload.bears,
                    tagline: payload.bears.tagline
                },
                resultsFlag: true,
            }
        }

        case BEARS_ACTION_TYPES.BEARS_GET_SINGLE_REQUEST_SUCCESS : {
            return {
                ...state,
                error: null,
                singleBear: payload,
                resultsFlag: true,
            }
        }

        case BEARS_ACTION_TYPES.BEARS_RANDOM_REQUEST_SUCCESS : {
            return {
                ...state,
                error: null,
                randomBear: [
                    ...payload.random,
                    ...state.randomBear,
                ],
                resultsFlag: true,
            }
        }

        case BEARS_ACTION_TYPES.LOADING : {
            return {
                ...state,
                error : null,
                resultsFlag: true
            }
        }

        case BEARS_ACTION_TYPES.ERROR : {
            return {
                ...state,
                error: payload.error,
                resultsFlag: true,
            }
        }

        default:
            return state;
    }
};