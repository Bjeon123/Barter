const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validatePost(post) {
    let errors = {};

    if(Validator.isEmpty(post.userId)){
        errors.userId = "User ID is required";
    }
  

    if(Validator.isEmpty(post.category)) {
        errors.category = "Category is required";
    }

    if(Validator.isEmpty(post.itemName)) {
        errors.itemName = "Item Name is required";
    }
    
    let regPos = /^[0-9]+.?[0-9]*/;

    if(post.price === null){
        post.price = "";
    }else if(!regPos.test(post.price) || post.price < 0 || post.price > 1000){
        errors.price = "Invalid price";
    }

    if(Validator.isEmpty(post.description)) {
        errors.description = "Description is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};