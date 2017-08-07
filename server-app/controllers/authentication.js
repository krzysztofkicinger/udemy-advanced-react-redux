const User = require('../models/user');

exports.signup = function(request, response, next) {

    // See if a user with the given email exists
    const email = request.body.email;
    const password = request.body.password;

    // If a user with email exits, return an error
    User.findOne({
        email: email
    }, function(error, existingUser) {

    });

    // If a user with email does not exist, create and save user record


    // Respond to request indicating the user was created
};