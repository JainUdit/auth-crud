import { userConstants } from "../constants/userConstants";

const initialState = {
    usersListData: [],
    singleUserData: {},
    error: null,
    isUserListLoading: false,
    singleUserDataLoading: false,
    addUserLoading: false,
    editUserLoading: false,
    deleteUserLoading: false,
};

export const userMgtReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.USERS_LIST_REQUEST:
            return { ...state, ...{ error: null, isUserListLoading: true } };

        case userConstants.USERS_LIST_REQUEST_SUCCESS:
            return { ...state, ...{ usersListData: action.payload, error: null, isUserListLoading: false } };

        case userConstants.USERS_LIST_REQUEST_FAILURE:
            return { ...state, ...{ error: action.error, isUserListLoading: false } };



        case userConstants.SINGLE_USER_DATA_REQUEST:
            return { ...state, ...{ error: null, singleUserDataLoading: true } };

        case userConstants.SINGLE_USER_DATA_REQUEST_SUCCESS:
            return { ...state, ...{ singleUserData: action.payload, error: null, singleUserDataLoading: false } };

        case userConstants.SINGLE_USER_DATA_REQUEST_FAILURE:
            return { ...state, ...{ error: action.error, singleUserDataLoading: false } };



        case userConstants.ADD_USER_REQUEST:
            return { ...state, ...{ error: null, addUserLoading: true } };

        case userConstants.ADD_USER_REQUEST_SUCCESS:
            return { ...state, ...{ addUserLoading: false } };

        case userConstants.ADD_USER_REQUEST_FAILURE:
            return { ...state, ...{ error: action.error, addUserLoading: false } };



        case userConstants.EDIT_USER_REQUEST:
            return { ...state, ...{ error: null, editUserLoading: true } };

        case userConstants.EDIT_USER_REQUEST_SUCCESS:
            return { ...state, ...{ editUserLoading: false } };

        case userConstants.EDIT_USER_REQUEST_FAILURE:
            return { ...state, ...{ error: action.error, editUserLoading: false } };



        case userConstants.DELETE_USER_REQUEST:
            return { ...state, ...{ error: null, deleteUserLoading: true } };

        case userConstants.DELETE_USER_REQUEST_SUCCESS:
            return { ...state, ...{ deleteUserLoading: false } };

        case userConstants.DELETE_USER_REQUEST_FAILURE:
            return { ...state, ...{ error: action.error, deleteUserLoading: false } };

        default:
            return state;
    }
};