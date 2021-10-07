const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateItem(item) {
    let errors = {};

    if (Validator.isEmpty(item.userId)) {
        errors.userId = "User ID is required";
    }

    if (Validator.isEmpty(item.name)) {
        errors.name = "Item Name is required";
    }

    if (Validator.isEmpty(item.description)) {
        errors.description = "Description is required";
    }

    if (Validator.isEmpty(item.imageUrl)) {
        errors.description = "Image is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};