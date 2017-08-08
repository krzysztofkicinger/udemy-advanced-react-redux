const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode( {

        // sub - JWT has a sub property (subject) meaning, who does this token belong to
        sub: user.id,

        // iat - JWT issued at time (shortcut)
        iat: timestamp

    }, config.secret);
}

// Uses done(null, user) callback from the localLogin strategy
// The user is the returned object and obtains the id required in the tokenForUser method
// User can be accessed using request.user
exports.signin = function(request, response, next) {

    // User has already had their email and password authenticated
    // We just need to give the a token

    response.send({
        token: tokenForUser(request.user)
    })
};

exports.signup = function(request, response, next) {

    // See if a user with the given email exists
    const email = request.body.email;
    const password = request.body.password;

    if(!email || !password) {
        return response
            .status(422)
            .send( {
                error: "You must provide and email and password"
            })
    }

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

            // Respond to request indicating the user was created
            response.status(201).json({
                token: tokenForUser(user)
            });
        })

    });

};

