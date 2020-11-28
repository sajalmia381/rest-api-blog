import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from '../constants/userConstant';

import API from '../api'

export const userLogin = (username, password) => async (dispatch) => {
    try{
        dispatch({type: USER_LOGIN_REQUEST})
        const response = await API.post('/auth/token', {
            username,
            password
        })
        if (response.status === 200) {
            API.defaults.headers['Authorization'] = "Bearer " + response.data.access;
            localStorage.setItem('access', response.data.access)
        }
        dispatch({type: USER_LOGIN_SUCCESS, payload: response.data})
        return true
    } catch(err) {
        dispatch({type: USER_LOGIN_FAIL, payload: err.message})
    }
}