import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_Post";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const fetchPosts = () => dispatch => (
    PostApiUtil.fetchPosts()
        .then(Posts => dispatch(receivePosts(Posts)))
);

export const fetchPost = postId => dispatch => (
    PostApiUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
    PostApiUtil.createPost(post)
        .then(post => dispatch(receivePost(post)))
        .catch(error => dispatch(receivePostErrors(error.response.data)))
);

export const updatePost = postId => dispatch => (
    PostApiUtil.updatePost(postId)
        .then(post => dispatch(receivePost(post)))
        .catch((error) => dispatch(receivePostErrors(error.response.data)))

);

export const deletePost = postId => dispatch => (
    PostApiUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
);