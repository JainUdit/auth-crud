import { userConstants } from "../constants/userConstants";

export const singleUserDataStart = () => {
    return {
        type: userConstants.SINGLE_USER_DATA_REQUEST
    };
};

export const singleUserDataSuccess = (payload) => {
    return {
        type: userConstants.SINGLE_USER_DATA_REQUEST_SUCCESS,
        payload
    };
};

export const singleUserDataFail = (error) => {
    return {
        type: userConstants.SINGLE_USER_DATA_REQUEST_FAILURE,
        error: error
    };
};

export const singleUserDataRequest = (id) => {
    return dispatch => {
        dispatch(singleUserDataStart());
        const requestURL = `http://localhost:8000/users/${id}`;
        fetch(requestURL)
            .then((response) => response.json())
            .then((json) => {
                dispatch(singleUserDataSuccess(json))
            })
            .catch(error => {
                dispatch(singleUserDataFail(error));
            })
    };
};
