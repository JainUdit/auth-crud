import { userConstants } from "../constants/userConstants";

export const editUserStart = () => {
    return {
        type: userConstants.EDIT_USER_REQUEST
    };
};

export const editUserSuccess = (payload) => {
    return {
        type: userConstants.EDIT_USER_REQUEST_SUCCESS,
        payload
    };
};

export const editUserFail = (error) => {
    return {
        type: userConstants.EDIT_USER_REQUEST_FAILURE,
        error: error
    };
};

export const editUserRequest = (id, userData, history) => {
    return dispatch => {
        dispatch(editUserStart());
        fetch(`http://localhost:8000/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch(editUserSuccess(json))
                history.push("/list");
            })
            .catch(error => {
                dispatch(editUserFail(error));
            })
    };
};
