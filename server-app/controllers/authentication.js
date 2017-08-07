const User = require('../models/user');

exports.signup = function(request, response, next) {

    // See if a user with the given email exists
    const email = request.body.email;
    const password = request.body.password;

    console.log('Email: ' + email);
    console.log('Password: ' + password);

    User.findOne({
        email: email
    }, function(error, existingUser) {


        console.log(error + " " + existingUser);

        // If internal error has occurred
        if(error) {
            return next(error);
        }

        // If a user with email exits, return an error
        if(existingUser) {
            return response.status(422)
                .send({
                    error: 'Email is in use'
                })
        }

        // If a user with email does not exist, create and save user record
        const user = new User({
            email: email,
            password: password
        });
        user.save(function(error) {

            console.log("Saving...", error);

            if(error) {
                return next(error);
            }

            response.status(201).json({
                success: true
            });
        })

    });




    // Respond to request indicating the user was created
};