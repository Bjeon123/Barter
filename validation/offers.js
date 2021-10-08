const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateOffer(offer) {
    let errors = {};

    if(Validator.isEmpty(offer.text)){
        errors.text = "Offer description is required";
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    }
}
