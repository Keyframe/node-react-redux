/* eslint-disable complexity */

import {
    FETCH_VERSION,
    FETCH_VERSION_SUCCESS,
    FETCH_VERSION_ERROR,
} from "../actions/types";

const initialState = {
    version: "",
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_VERSION:
        {
            return state;
        }

        case FETCH_VERSION_SUCCESS:
        {
            return {
                ...state,
                version: action.payload.data,
            };
        }

        case FETCH_VERSION_ERROR:
        {
            return {
                ...state,
                version: "",
            };
        }

        default:
            return state;
    }
}
