import { GET_POSTS, ADD_POSTS, DELETE_POSTS } from '../actions/types'


const initialState = {
    posts: [
        {id: '1234', title: 'New Post 1', body: 'Checkout this post'},
        {id: "5678", title: 'New Post 2', body: 'Checkout this post'},
        {id: '9879', title: 'New Post 3', body: 'Checkout this post'}
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
           default:
               return state;
    }
}