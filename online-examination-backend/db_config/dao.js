const mysql = require('mysql');

let con = null;

function connect() {
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'examination_app'
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("Database connected!");
    });
}


function query(sqlQuery,resultCallback) {
    con.query(sqlQuery, function (err, result) {
        if (err) throw err;
        // console.log("Result: " + result);
        resultCallback(result);
      });
}



function disconnect() {
    con.end((err) => {
        // The connection is terminated gracefully
        // Ensures all remaining queries are executed
        // Then sends a quit packet to the MySQL server.
      });
}


// public interface of the module
module.exports = {
    connect: connect,
    disconnect: disconnect,
    query: query
}