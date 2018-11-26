var mysql = require('mysql');

var conn = mysql.createConnection({
    localhost: 'localhost',
    user: 'kim3dis',
    password: 'root',
    database: 'usuarios'
});

module.exports = conn;