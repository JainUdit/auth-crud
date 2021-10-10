import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { authReducer } from './authReducer';
import { userMgtReducer } from './usersReducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  user: userMgtReducer
});

export default rootReducer;