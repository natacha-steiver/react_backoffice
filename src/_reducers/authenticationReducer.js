import { userConstants } from '../_constants/userConstants';

let user = JSON.parse(localStorage.getItem('user'));
console.log("user auth:"+user);
//const initialState = user ? { loggedIn: true,user } : {};

export function authentication(state =  [],action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: [...state,action.payload]
            };

        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: [state,action.payload],
                name:action.payload.name,
                email:action.payload.email,
                roles:action.payload.roles[0].name
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}
