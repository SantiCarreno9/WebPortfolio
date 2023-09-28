const express = require('express');
const morgan = require('morgan');
const compress = require('compress');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const appFunction = () => {
    const app = express();

    //Used mainly for post request
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());//Using middleware for all incoming requests
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use('/', require('../app/routes/index.server.routes.js'));//Any route that starts with '/' redirect it to that route
    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));

    return app;
}

module.exports = appFunction;
