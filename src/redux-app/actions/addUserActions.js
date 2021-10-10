import { userConstants } from "../constants/userConstants";

export const addUserStart = () => {
    return {
        type: userConstants.ADD_USER_REQUEST
    };
};

export const addUserSuccess = (payload) => {
    return {
        type: userConstants.ADD_USER_REQUEST_SUCCESS,
        payload
    };
};

export const addUserFail = (error) => {
    return {
        type: userConstants.ADD_USER_REQUEST_FAILURE,
        error: error
    };
};

export const addUserRequest = (userData, history) => {
    return dispatch => {
        dispatch(addUserStart());
        fetch('http://localhost:8000/users', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch(addUserSuccess(json))
                history.push("/list");
            })
            .catch(error => {
                dispatch(addUserFail(error));
            })
    };
};
