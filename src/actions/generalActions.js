/* eslint-disable no-unused-vars */
import axios from "axios";
import {
    FETCH_VERSION,
    FETCH_VERSION_SUCCESS,
    FETCH_VERSION_ERROR,
} from "./types";

export const fetchVersion = () => {
    return function action(dispatch) {
        dispatch({ type: FETCH_VERSION });

        const request = axios({
            method: "GET",
            url: "/api/v1/version/",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        });

        return request.then(
            response => {
                return dispatch({
                    type: FETCH_VERSION_SUCCESS,
                    payload: response,
                });
            },
            err => {
                return dispatch({
                    type: FETCH_VERSION_ERROR,
                    payload: err,
                });
            }
        );
    };
};

