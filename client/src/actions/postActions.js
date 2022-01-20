import { GET_POSTS, ADD_POSTS, DELETE_POSTS, POSTS_LOADING } from './types';
import axios from 'axios'

export const getPosts = () => dispatch => {
    dispatch(setPostLoading);
    axios
    .get('/api/posts')
    .then(res => 
        dispatch({
            type: GET_POSTS,    
            payload: res.data
        }))
}
export const deletePosts = (id) => {
    return {
        type: DELETE_POSTS,
        payload: id
    };
}
export const addPosts = (post) => {
    return {
        type: ADD_POSTS,
        payload: post
    };
}
export const setPostLoading = () => {
    return {
        type: POSTS_LOADING,
    };
}