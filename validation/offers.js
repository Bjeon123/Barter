const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateOffer(data) {
    let errors = {};

    if(Validator.isEmpty(data.text)){
        errors.text = "Text is required";
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    }
}
