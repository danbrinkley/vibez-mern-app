import { GET_POSTS, ADD_POSTS, DELETE_POSTS } from '../actions/types'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    posts: [
        {id: uuidv4(), title: 'New Post 1', body: 'Checkout this post'},
        {id: uuidv4(), title: 'New Post 2', body: 'Checkout this post'},
        {id: uuidv4(), title: 'New Post 3', body: 'Checkout this post'}
    ]
}


export default function(state = initialState, action) {
    switch(action.type) {
       case GET_POSTS:
           return {
               ...state
           };
           case DELETE_POSTS:
               return {
                   ...state,
                   posts: state.posts.filter(post => post.id !== action.payload)
               }

            case ADD_POSTS:
                return {
                    ...state,
                    posts: [action.payload, ...state.posts]
                }
           default:
               return state;
    }
}