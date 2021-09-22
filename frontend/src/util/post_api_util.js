import axios from 'axios';

export const fetchPost = postId => axios.get(`/api/posts/show/${postId}`);

export const fetchPosts = () => axios.get(`/api/posts`);

export const fetchUserPosts = (userId) => axios.get(`/api/posts/user/${userId}`)

export const searchPosts = search => axios.get(`/api/posts/search?category=${search}`);

export const createPost = post => axios.post(`/api/posts/create`, post);

export const updatePost = postId => axios.patch(`/api/posts/update/${postId}`);

export const deletePost = postId => axios.delete(`/api/posts/delete/${postId}`);