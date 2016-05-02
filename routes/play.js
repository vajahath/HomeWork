module.exports = function(io) {
    var app = require('express');
    var router = app.Router();

    io.on('connection', function(socket) { 
        console.log("socket io connection"); 
    });

    return router;
}