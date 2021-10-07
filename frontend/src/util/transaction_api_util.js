import axios from 'axios';

export const fetchUserTransactions = userId => axios.get(`/api/transactions/user/${userId}`);

export const createTransaction = transaction => (axios.post(`/api/transactions`, transaction))

export const deleteTransaction = transactionId => axios.delete(`/api/transactions${transactionId}`);
