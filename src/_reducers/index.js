import { combineReducers } from 'redux';

// import authenticatedReducer from './authenticated';
import { forgotPassword } from './forgotPasswordReducer';
import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { texts } from './textsReducer';
import { langues } from './languesReducer';
import { pages } from './pageReducer';
import {changeState} from './sidebarReducer';


const allReducers = combineReducers({
    // authenticated: authenticatedReducer
    authentication,
    registration,
    users,
    texts,
    langues,
    pages,
    changeState
})

export default allReducers;
