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
import { func } from "prop-types";
import * as PostService from "../../api/PostService";

const PostForm = ({ getPostsAgain, user }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async () => {
        let newPost = { title, author: user._id, body };
        const res = await PostService.create(newPost);

        if (res.status === 201) {
            setTitle("");
            setBody("");
            getPostsAgain();
        } else {
            alert("Server Error");
        }
    };

    if (!user) {
        return <div />;
    }


   
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
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                type="text"
                                name="title"
                                placeholder="TITLE"
                            />

                            <Input
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                                type="text"
                                name="body"
                                placeholder="BODY GOES HERE"
                            />
                            <Button 
                                onClick={handleSubmit}>Add Post +</Button>
                        
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
    PostForm.propTypes = {
        getPostsAgain: func,
    };

export default PostForm;