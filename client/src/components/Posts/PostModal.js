import React, { Component } from 'react';
import {
    Button,
    Modal, 
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
  }  from 'reactstrap';

  import { connect } from 'react-redux';
  import { addPosts } from '../../actions/postActions'
  import { v4 as uuidv4 } from 'uuid';
  import PropTypes from 'prop-types';

  class PostModal extends Component {
    state = { 
        modal: false,
        title: '',
        body: '',
    }

    static propTypes = {
        isAutheticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.title]: e.target.value});
        this.setState({ [e.target.body]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.addPosts(newPost);

        this.toggle();
    }


    render() {
        return(
            <div>
                { this.props.isAutheticated ? <Button
                onClick={this.toggle}
                >Add Post</Button> : <h4 className="mb-3 ml-4"> Please login to enjoy Vibez</h4>}
                
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >

                <ModalHeader toggle={this.toggle}>Add to Post</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="post"><p>Post</p></Label>
                            <Input 
                            type="text"
                            title="title"
                            id= "post"
                            placeholder='Add post'
                            onChange={this.onChange}/>
                            <Button 
                            
                            
                            >Add Post</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
  }

//   PostModal.propTypes = {
//     post: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
    post: state.post,
    isAutheticated: state.auth.isAutheticated
})

export default connect(mapStateToProps, { addPosts })(PostModal);