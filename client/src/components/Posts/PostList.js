import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import './post.css'
import { connect } from 'react-redux';
import { getPosts, deletePosts } from '../../actions/postActions';
import PropTypes from 'prop-types';

class PostList extends Component {
   
     componentDidMount() {
         this.props.getPosts();
     }
    onDeleteClick = (id) => {
        this.props.deletePosts(id)
    }

    render() {
       
        const { posts } = this.props.post;
        return(
            <div className="posts-ctr">
                
                

                
<div>
                    {posts.map(({ id, title, body }) => (
                        <div>
                        <Button
                        className="remote-btn"
                        onClick={this.onDeleteClick.bind(this, id)}
                        
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

export default connect(mapStateToProps, { getPosts, deletePosts }) (PostList);