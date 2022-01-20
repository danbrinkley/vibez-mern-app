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
            <Container>
                <ListGroup>
                    <TransitionGroup className="post-list">
                    {posts.map(({ _id, title, body }) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>

                            <Button
                            className="remote-btn"
                            onClick={this.onDeleteClick.bind(this, _id)}
                            
                        >&times;</Button>
                            ,<p>Title:{title}</p>
                            <p>Body: {body}</p>
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>   
            
        )
    }
};

PostList.propTypes = {
    getPosts: PropTypes.func.isRequired, 
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ 
    post: state.post
})

export default connect(mapStateToProps, { getPosts, deletePosts }) (PostList);