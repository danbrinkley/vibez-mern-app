import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import * as UserService from "../../api/UserService";
import { setToken } from "../../utils/tokenService";

const LoginForm = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            history.push("/");
        } else {
            alert("Server Error");
        }
    };

    return (
        <div className="LoginForm-inputs">
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                title="email"
                placeholder="Email"
            />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                title="password"
                placeholder="Password"
            />
            <button onClick={handleSubmit}>LOGIN WITH MY FLEXSPACE</button>
        </div>
    );
};

export default LoginForm;