import * as TransactionApiUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const REMOVE_TRANSACTIONS = "REMOVE_TRANSACTIONS";

const receiveTransaction = transaction => ({
    type: RECEIVE_TRANSACTION,
    transaction
});

const receiveTransactions = transactions => ({
    type: RECEIVE_TRANSACTIONS,
    transactions
});

export const fetchTransactions = (userId) => dispatch => (
    TransactionApiUtil.fetchUserTransactions(userId)
        .then(transactions => dispatch(receiveTransactions(transactions)))
);

export const createTransactions = transaction => dispatch => (
    TransactionApiUtil.createTransaction(transaction)
        .then(transaction => dispatch(receiveTransaction(transaction)))
);

export const deleteTransaction = transactionId => dispatch => (
    TransactionApiUtil.deleteTransaction(transactionId)
        .then(transactions => dispatch(receiveTransaction(transactions)))
);


