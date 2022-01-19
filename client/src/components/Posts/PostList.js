import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import './post.css'

class PostList extends Component {
    state = {
        posts: [
            {id: '1234', title: 'New Post 1', body: 'Checkout this post'},
            {id: "5678", title: 'New Post 2', body: 'Checkout this post'},
            {id: '9879', title: 'New Post 3', body: 'Checkout this post'}
        ]
    }

    render() {
        const { posts } = this.state;
        return(
            <div className="posts-ctr">
                <p>Test Posts</p>
                <Button

                onClick={() => {
                    const title = prompt('Add Post');
                    if(title) {
                        this.setState(state => ({
                            posts: [...state.posts, { title }]
                        }))
                    }
                }}
                >Add Post</Button>

                
<div>
                    {posts.map(({ id, title }) => (
                        <div>
                        <Button
                        className="remote-btn"
                        onClick={() => {
                            this.setState(state => ({
                                posts: state.posts.filter(post => post.id !== id)
                            }));
                        }}
                    >&times;</Button>
                    ,<p>{title}</p>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default PostList;