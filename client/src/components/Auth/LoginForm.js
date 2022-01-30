import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import * as UserService from "../../api/UserService";
import { setToken } from "../../utils/tokenService";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const user = {
            email,
            password,
        };

        const res = await UserService.login(user);
        if (res.data.data) {
            const token = res.data.data.token;
            console.log("FROM LOGIN FORM: ", token);
            setToken(token);
            setEmail("");
            setPassword("");
            navigate("/home");
        } else {
            alert("Server Error");
        }
    };

    return (
      
        <div className="login-form-ctr">
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
            <button className="login-btn" onClick={handleSubmit}>
              LOGIN
            </button>
      <p>
        Dont have an account?{" "}
        <Link className="join-link" to="/signup">
          Join Now
        </Link>{" "}
      </p>
        </div>
      
    );
};

export default LoginForm;