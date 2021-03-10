require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');

let con = null;

// PATH TO THE SQL file
const SQL_FILE_PATH = "../database/examination_app.sql";


const {
    HOST,
    USER,
    PASSWORD,
    DATABASE,
    MYSQL_PORT
} = process.env;

function connect() {
    con = mysql.createConnection({
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE,
        port: MYSQL_PORT,
        multipleStatements: true
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("Database connected!");
    });
}


function createDatabaseIfNotExists() {
    con = mysql.createConnection({
        host: HOST,
        user: USER,
        port: MYSQL_PORT,
        password: PASSWORD,
        multipleStatements: true
    });
    con.query(`DROP DATABASE IF EXISTS \`${DATABASE}\`;`, function (error, resObj) {
        if (error) throw error;
        console.log("Database dropped: " + JSON.stringify(resObj));
        if (resObj) {
            con.query(`CREATE DATABASE IF NOT EXISTS \`${DATABASE}\`;`, function (err, result) {
                if (err) throw err;
                console.log("Database Created: " + JSON.stringify(result));
                if (result) {
                    createTablesIfNotExists();
                }
            });
        }
    });

}

function createTablesIfNotExists() {
    connect();
    fs.readFile(SQL_FILE_PATH, 'utf8', function (err, data) {
        if (err) throw err;
        // console.log(data);
        let query = data.replace(/{{[ ]{0,2}([a-zA-Z0-9\.\_\-]*)[ ]{0,2}}}/g, function (str, mch) {
            return data[mch]
        });
        con.query(query, function (err, result) {
            if (err) throw err;
            console.log("Tables Created:-> " + JSON.stringify(result));
        });
    });
}


function setupDatabaseAndTables() {
    createDatabaseIfNotExists();
    // createTablesIfNotExists();
}

function query(sqlQuery, resultCallback) {
    con.query(sqlQuery, function (err, result) {
        if (err) throw err;
        // console.log("Result: " + result);
        resultCallback(result);
    });
}



function disconnect() {
    if (con) {
        con.end((err) => {
            // The connection is terminated gracefully
            // Ensures all remaining queries are executed
            // Then sends a quit packet to the MySQL server.
        });
    }
}


// public interface of the module
module.exports = {
    connect: connect,
    disconnect: disconnect,
    query: query,
    setupDatabaseAndTables: setupDatabaseAndTables
}