import React, { useState } from "react";
import "./signup.css";
import * as UserService from "../../api/UserService";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/tokenService";

const SignupForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const newUser = {
            firstName,
            lastName,
            email,
            password,
        };

        const res = await UserService.create(newUser);

        //trying to extract a token
        if (res.data.data) {
            if (res.data.data.token) {
                const token = res.data.data.token;
                setToken(token);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                //redirect to home
                navigate("/home");
            }
        } else {
            alert("Server Error");
        }
    };

    return (
        <div className="login-form-ctr">
            <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                title="firstName"
                placeholder="First Name"
                className="input-fields"
            />
            <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                title="lastName"
                placeholder="Last Name"
                className="input-fields"
            />
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                title="email"
                placeholder="Email"
                className="input-fields"
            />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                title="password"
                placeholder="Password"
                className="input-fields"
            />
            <button 
                onClick={handleSubmit}className="signup-button">
                
                SIGNUP</button>
        </div>
    );
};

export default SignupForm;