import { RECEIVE_SEARCHED_POSTS } from "../actions/post_actions";


const searchedPosts= (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SEARCHED_POSTS:
            return action.posts;
        default:
            return state;
    }
}

export default searchedPosts;