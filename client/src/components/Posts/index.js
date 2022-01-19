import React, {Component} from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import uuid from 'uuid'

class Posts extends Component {
    state = {
        posts: [
            {id: uuid (), title: 'New Post 1', body: 'Checkout this post'},
            {id: uuid (), title: 'New Post 2', body: 'Checkout this post'},
            {id: uuid (), title: 'New Post 3', body: 'Checkout this post'}
        ]
    }

    render() {
        const { posts } = this.state;
        return(
            <Container>
                <Button

                color="dark"
                style={{marginBottom: '2rem'}}
                onDoubleClick={() => {
                    const title = prompt('Add Post');
                    if(title) {
                        this.setState(state => ({
                            posts: [...state.posts, { id: uuid(), title }]
                        }))
                    }
                }}
            </Container>
        )
    }
}

export default Posts;