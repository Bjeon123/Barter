const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateTransaction(transaction) {
    let errors = {};

    if (Validator.isEmpty(transaction.offerer)) {
        errors.offerer = "Offerer is required";
    }

    if (Validator.isEmpty(transaction.postDescription)) {
        errors.postDescription = "Description is required";
    }

    if (Validator.isEmpty(transaction.receiver)) {
        errors.receiver = "Receivery is required";
    }

    if (Validator.isEmpty(transaction.imageUrl)) {
        errors.imageUrl = "Image is required";
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};