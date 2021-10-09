import * as ItemApiUtil from '../util/item_api_util';

export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const CLEAR_ITEM_ERRORS ="CLEAR_ITEM_ERRORS";

const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
});

export const receiveItemErrors = errors => ({
    type: RECEIVE_ITEM_ERRORS,
    errors
});

export const updateItem = (itemId,item)=> dispatch=>(
    ItemApiUtil.updateItem(itemId,item)
        .then(item => dispatch(receiveItem(item)))
        .catch(error => dispatch(receiveItemErrors(error.response.data)))
)

export const createItem = item => dispatch => (
    ItemApiUtil.createItem(item)
        .then(item => dispatch(receiveItem(item)))
        .catch(error => dispatch(receiveItemErrors(error.response.data)))
);
