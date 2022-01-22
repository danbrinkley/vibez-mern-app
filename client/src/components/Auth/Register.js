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
    NavLink
  }  from 'reactstrap';

  import { connect } from 'react-redux';
  import PropTypes from 'prop-types';
  import { register } from '../../actions/authActions'

  class Register extends Component {
    state = { 
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.toggle();
    }
render() {
    return (
        <div>
            <NavLink onClick={this.toggle} href="#">
                Register
            </NavLink>

            <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >

                <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name"><p>Name</p></Label>
                            <Input 
                            type="text"
                            name="name"
                            id= "name"
                            placeholder="Name"
                            onChange={this.onChange}/>

                            <Label for="name"><p>Email</p></Label>
                            <Input 
                            type="email"
                            name="email"
                            id= "email"
                            placeholder="Email"
                            onChange={this.onChange}/>

                            <Label for="name"><p>Password</p></Label>
                            <Input 
                            type="password"
                            name="password"
                            id= "password"
                            placeholder="Password"
                            onChange={this.onChange}/>

                            <Button>
                                Register
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
        </div>
    )}

}

    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error
    })

    export default connect(
        mapStateToProps, 
        {register}
    )(Register);