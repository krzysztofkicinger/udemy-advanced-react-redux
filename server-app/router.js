const Authentication = require('./controllers/authentication');

module.exports = function(app) {

    // next - for error handling
    app.post('/', Authentication.signup);

};