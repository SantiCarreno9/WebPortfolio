process.env.NODE_ENV = process.env.NODE_ENV || 'development';//Here it will take the first value that is assigned
const express = require('./config/express');
const app = express();
app.listen(3000);
module.exports = app;//Done to avoid writing the path to the module

console.log('Server running at http://localhost:3000/');