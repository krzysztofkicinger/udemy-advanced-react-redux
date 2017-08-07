module.exports = function(app) {

    // next - for error handling
    app.get('/', function(request, response, next) {
        response.send([
            'water bottle',
            'phone',
            'paper'
        ])
    });

};