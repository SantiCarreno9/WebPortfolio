/*
    express.js
    Santiago Felipe Carreño Pardo
    301283698
    09/28/2023
*/
const express = require('express');

const appFunction = () => {
    const app = express();
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use('/', require('../app/routes/index.server.routes.js'));
    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));

    return app;
}

module.exports = appFunction;
