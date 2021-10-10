import { userConstants } from "../constants/userConstants";

export const usersListStart = () => {
    return {
        type: userConstants.USERS_LIST_REQUEST
    };
};

export const usersListSuccess = (payload) => {
    return {
        type: userConstants.USERS_LIST_REQUEST_SUCCESS,
        payload
    };
};

export const usersListFail = (error) => {
    return {
        type: userConstants.USERS_LIST_REQUEST_FAILURE,
        error: error
    };
};

export const usersListRequest = () => {
    return dispatch => {
        dispatch(usersListStart());
        const requestURL = `http://localhost:8000/users`;
        fetch(requestURL)
            .then((response) => response.json())
            .then((json) => {
                dispatch(usersListSuccess(json))
            })
            .catch(error => {
                dispatch(usersListFail(error));
            })
    };
};
