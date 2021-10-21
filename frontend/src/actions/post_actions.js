import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_SEARCHED_POSTS = "RECEIVE_ALL_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receiveSearchedPosts = posts => ({
    type: RECEIVE_SEARCHED_POSTS,
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

export const clearPostErrors = ()=>({
    type: CLEAR_POST_ERRORS
})

export const fetchPosts = () => dispatch => (
    PostApiUtil.fetchPosts()
        .then(posts => dispatch(receivePosts(posts)))
);

// export const fetchAllPosts = () => dispatch => (
//     PostApiUtil.fetchAllPosts()
//         .then(allPosts => dispatch(receiveAllPosts(allPosts)))
// );

export const fetchUserPosts = (userId) => dispatch =>(
    PostApiUtil.fetchUserPosts(userId)
        .then(Posts => dispatch(receivePosts(Posts)))
)

export const fetchCategoryPosts = (category) => dispatch => (
    PostApiUtil.fetchCategoryPosts(category)
        .then(Posts => dispatch(receivePosts(Posts)))
)

export const fetchPost = postId => dispatch => (
    PostApiUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
);

export const searchPosts = searchContent => dispatch => (
    PostApiUtil.searchPosts(searchContent)
        .then(posts => dispatch(receivePosts(posts)))
);

export const createPost = post => dispatch => {
    return(
        PostApiUtil.createPost(post)
            .then(post => dispatch(receivePost(post)))
            .catch(err => dispatch(receivePostErrors(err.response.data)))
    )
}

export const updatePost = postId => dispatch => (
    PostApiUtil.updatePost(postId)
        .then(post => dispatch(receivePost(post)))
        .catch((error) => dispatch(receivePostErrors(error.response.data)))

);

export const deletePost = postId => dispatch => (
    PostApiUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
);