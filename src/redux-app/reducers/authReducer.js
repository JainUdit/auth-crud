import { authConstants } from "../constants/authConstants";

const initialState = {
    userDetails: {},
    error: null,
    loading: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_START:
            return { ...state, ...{ error: null, loading: true } };
        case authConstants.LOGIN_SUCCESS:
            return { ...state, ...{ userDetails: action.payload, error: null, loading: false } };
        case authConstants.LOGIN_FAILURE:
            return { ...state, ...{ error: action.payload, loading: false } };

        case authConstants.REGISTER_START:
            return { ...state, ...{ error: null, loading: true } };
        case authConstants.REGISTER_SUCCESS:
            return { ...state, ...{ userDetails: action.payload, error: null, loading: false } 
        };
        default:
            return state;
    }
};
