import { GET_POSTS, ADD_POSTS, DELETE_POSTS } from './types';


export const getPosts = () => {
    return {
        type: GET_POSTS
    };
}