const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), // Whenever HTTP Request comes, we need to take a look to the authorization header of it to find the JWT
    secretOrKey: config.secret
};

// Create JWT Strategy
//  - payload - decoded JWT token (it will be the same object that was encoded in the authentication.js -> tokenForUser -> jwt.encode(payload, ...)
//  - done
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {

    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with that user
    // otherwise, call done without a user object
    const userId = payload.sub;
    User.findById(userId, function(error, user) {
        if(error) {
            return done(error, false);
        }

        if(user) {
            // This user argument tells passport who the user is
            done(null, user);
        } else {
            // This user argument tells passport that there is no user with requested id
            done(null, false);
        }
    })
});

// Tell passport to use this strategy
passport.use(jwtLogin);