const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {
    session: false
});

module.exports = function(app) {

    app.get('/', requireAuth, function(request, response) {
        response.send({
            hi: 'there'
        });
    });

    // next - for error handling
    app.post('/', Authentication.signup);

};