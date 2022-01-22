import axios from 'axios';
import reducers from '../reducers';

import {
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING
} from './types';


export const loadUser = () => (dispatch, getState)  => {
    dispatch({ type: USER_LOADING });

    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if(token) {
        config.headers['x-auth-token'] = token;
    }

    axios.get('/api/auth/user', config)
        .then(res => dispatch({ 
            type: USER_LOADED,
            payload: res.data
         }))
         .catch(err => {
             dispatch({
                 type: AUTH_ERROR
             })
         })
}



