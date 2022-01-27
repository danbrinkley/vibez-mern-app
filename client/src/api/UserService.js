import VibezActions from "./VibezActions";
import * as tokenService from "../utils/tokenService";

const create = (data) => {
    return VibezActions.post("/users", data);
};

const login = (data) => {
    return VibezActions.post("/auth/login", data);
};

function getUser() {
    let user = tokenService.getUserFromToken();
    console.log("DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ", user);
    return user;
}

export { create, login, getUser };