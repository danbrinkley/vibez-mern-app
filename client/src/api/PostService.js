import VibezActions from "./VibezActions";

const getAll = () => {
    return VibezActions.get("/posts");
};

const get = (id) => {
    return VibezActions.get(`/posts/${id}`);
}

const getAllComments = (id) => {
    return VibezActions.get(`/posts/${id}/comments`);
}

const create = (data) => {
    return VibezActions.post("/posts", data);
};

const createComment = (id, data) => {
    return VibezActions.post(`/posts/${id}/comment`, data);
}

const update = (id, data) => {
    return VibezActions.put(`/posts/${id}`, data);
};

const updateComment = (id, commentId, data) => {
    return VibezActions.put(`/posts/${id}/comment/${commentId}`, data);
}

const remove = (id) => {
    return VibezActions.delete(`/posts/${id}`);
};

const removeComment = (id, commentId) => {
    return VibezActions.delete(`/posts/${id}/comment/${commentId}`);
}

// You can only export default when there's one thing to export
export { getAll, get, getAllComments, create, createComment, update, updateComment, remove, removeComment };