import { userConstants } from '../_constants/userConstants';


export function forgotPassword(state = {},action) {
    switch (action.type) {
        case userConstants.FORGOT_PASSWORD_REQUEST:
            return { forgotPassword: true };
        case userConstants.FORGOT_PASSWORD_SUCCESS:
            return {};
        case userConstants.FORGOT_PASSWORD_FAILURE:
            return {};
        default:
            return state
    }
}
