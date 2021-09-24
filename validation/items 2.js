const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateItem(item) {
    let errors = {};

    if (Validator.isEmpty(item.userId)) {
        errors.userId = "User ID is required";
    }

    if (Validator.isEmpty(item.postId)) {
        errors.offerId = "Offer ID is required";
    }

    if (Validator.isEmpty(item.category)) {
        errors.category = "Category is required";
    }

    if (Validator.isEmpty(item.name)) {
        errors.name = "Item Name is required";
    }

    if (Validator.isEmpty(item.description)) {
        errors.description = "Description is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};