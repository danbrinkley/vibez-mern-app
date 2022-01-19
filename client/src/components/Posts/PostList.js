import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import './post.css'
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';
import PropTypes from 'prop-types';

class PostList extends Component {
   
     componentDidMount() {
         this.props.getPosts();
     }
    

    render() {
       
        const { posts } = this.props.post;
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
                    {posts.map(({ id, title, body }) => (
                        <div>
                        <Button
                        className="remote-btn"
                        onClick={() => {
                            this.setState(state => ({
                                posts: state.posts.filter(post => post.id !== id)
                            }));
                        }}
                    >&times;</Button>
                    ,<p>Title:{title}</p>
                    <p>Body: {body}</p>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}
PostList.propTypes = {
    getPosts: PropTypes.func.isRequired, 
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ 
    post: state.post
})

export default connect(mapStateToProps, { getPosts }) (PostList);