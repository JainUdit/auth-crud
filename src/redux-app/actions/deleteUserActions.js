import { userConstants } from "../constants/userConstants";

export const deleteUserStart = () => {
    return {
        type: userConstants.DELETE_USER_REQUEST
    };
};

export const deleteUserSuccess = (payload) => {
    return {
        type: userConstants.DELETE_USER_REQUEST_SUCCESS,
        payload
    };
};

export const deleteUserFail = (error) => {
    return {
        type: userConstants.DELETE_USER_REQUEST_FAILURE,
        error: error
    };
};

export const deleteUserRequest = (id, history) => {
    return dispatch => {
        dispatch(deleteUserStart());
        fetch(`http://localhost:8000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch(deleteUserSuccess(json))
                history.push("/list");
            })
            .catch(error => {
                dispatch(deleteUserFail(error));
            })
    };
};
