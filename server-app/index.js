// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// App Setup - Middleware (incoming request will be passed into them)
app.use(morgan('combined'));    // Logging framework
app.use(bodyParser.json({type: '*/*'}));        // Parses incoming requests to JSON
app.use(cors({
    origin: [ 'http://localhost:8080' ],
    methods: [ 'GET', 'POST' ]
}));        // Enables CORS

// App Setup - Routing
router(app);

// App Setup - Connecting to MongoDB (creates a database called auth)
mongoose.connect('mongodb://localhost/auth');


// Server Setup
const port = process.env.PORT || 9300;

const server = http.createServer(app);
server.listen(port);

console.log('Server listening on port: ', port);