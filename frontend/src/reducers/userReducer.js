import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from '../constants/userConstant';


export const userLogin = (state = {loading: false, userInfo: {}, error: ''}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                userInfo: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return {loading: false}
    }
}