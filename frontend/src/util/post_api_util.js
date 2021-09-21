import axios from 'axios';

export const fetchPost = postId => axios.get(`/api/posts/show/${postId}`);

export const fetchPosts = () => axios.get(`/api/posts`);

export const searchPosts = search => axios.get(`/api/posts/search`, { params: search});

export const createPost = post => axios.post(`/api/posts/create`, post);

export const updatePost = postId => axios.patch(`/api/posts/update/${postId}`, post);

export const deletePost = postId => axios.delete(`/api/posts/delete/${postId}`);