import { message } from 'antd';
import { authConstants } from '../constants/authConstants';

// Login

export const loginStart = () => {
    return {
        type: authConstants.LOGIN_START
    };
};

export const loginSuccess = (user) => {
    return {
        type: authConstants.LOGIN_SUCCESS,
        payload: user
    };
};

export const loginFail = (error) => {
    return {
        type: authConstants.LOGIN_FAILURE,
        payload: error
    };
};

export const loginRequest = (userDetails, history) => {
    return dispatch => {
        dispatch(loginStart());

        const usersData = localStorage.getItem('userDetails')
        const user = usersData && JSON.parse(usersData);
        if (user?.username === userDetails?.username && user?.password === userDetails?.password) {
            dispatch(loginSuccess(user));
            history.push('/list');
        } else {
            message.error('Invalid credentials');
            dispatch(loginFail('Invalid credentials'));
        }
    }
}

// Logout 

export const logout = (history) => {
    localStorage.removeItem('userDetails');
    history.push('/')
    return {
        type: authConstants.LOGOUT
    };
};


// Registration

export const registrationStart = () => {
    return {
        type: authConstants.REGISTER_START
    };
};

export const registrationSuccess = (user) => {
    return {
        type: authConstants.REGISTER_SUCCESS,
        payload: user
    };
};

export const registrationRequest = (userDetails, history) => {
    return dispatch => {
        dispatch(registrationStart());

        const usersData = localStorage.getItem('userDetails')
        if (usersData) {
            let rememberDetails = userDetails ? JSON.stringify(userDetails) : '';
            localStorage.setItem('userDetails', rememberDetails);
        } else {
            localStorage.removeItem('userDetails');
            let rememberDetails = userDetails ? JSON.stringify(userDetails) : '';
            localStorage.setItem('userDetails', rememberDetails);
        }

        dispatch(registrationSuccess(userDetails));
        history.push('/');
    }
}