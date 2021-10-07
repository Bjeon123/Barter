import axios from 'axios';

export const fetchPost = postId => axios.get(`/api/posts/show/${postId}`);

export const fetchPosts = () => axios.get(`/api/posts`);

export const fetchCategoryPosts = category => axios.get(`/api/posts/category/${category}`)

export const fetchUserPosts = userId => axios.get(`/api/posts/user/${userId}`)

export const searchPosts = searchContent => axios.get(`/api/posts/search?term=${searchContent}`);

export const createPost = post => axios.post(`/api/posts/create`, post);

export const updatePost = postId => axios.patch(`/api/posts/update/${postId}`);

export const deletePost = postId => axios.delete(`/api/posts/delete/${postId}`);