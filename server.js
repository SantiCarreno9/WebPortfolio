/*
    server.js
    Santiago Felipe Carreño Pardo
    301283698
    09/28/2023
*/
const express = require('./config/express');
const app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');