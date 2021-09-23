import axios from 'axios';

export const postImage = formData => axios.post(`https://api.cloudinary.com/v1_1/dhdeqhzvx/image/upload`,formData);

// ys8sasql