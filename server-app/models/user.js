const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define model using mongoose
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password : String
});

// Ons Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {

    // Get access of the userModel (it changes in the following functions that we need to refer to in)
    const user = this;

    // Generate a salt then run callback
    bcrypt.genSalt(10, function (error, salt) {
        if(error) {
            return next(error);
        }

        // Hash (encrypt) password using the salt
        bcrypt.hash(user.password, salt, null, function(error, hash) {
            if(error) {
                return next(error);
            }

            // Overwrite plain text password with encrypted password
            user.password = hash;
            next();
        });
    });
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;