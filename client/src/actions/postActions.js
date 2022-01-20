import axios from 'axios'
import { 
    GET_POSTS, 
    ADD_POSTS, 
    DELETE_POSTS, 
    POSTS_LOADING 
} from './types';

export const getPosts = () => dispatch => {
    dispatch(setPostsLoading());
    axios
        .get('./api/posts')
        .then(res => 
            dispatch({
                type: GET_POSTS,
                payload: res.data
            }) 
        )
}
export const deletePosts = (id) => dispatch => {
    axios.delete(`/api/posts/{id}`).then(res =>
        dispatch({
            type: DELETE_POSTS,
            payload: id
        }))
}
export const addPosts = (post) => dispatch => {
   axios
    .post('/api/posts', post)
    .then(res => dispatch({
        type: ADD_POSTS,
        payload: res.data
    }))
}
export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING,
        
    };
}

