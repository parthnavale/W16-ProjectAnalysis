'use strict'

const express = require('express');
const app = express();
const cors = require('cors');

const authRoute = require("./routes/auth");
const examRoute=require("./routes/exams");
const institutionsRoute=require("./routes/institutions");

const DB = require('./db_config/dao');


// SET CORS to allows cross-origin resource sharing access
app.use(cors());

// support parsing of application/json type post data
app.use(express.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({
    extended: true
}));

// Auth Route(Login, Signup, etc.)
app.use('/api/auth', authRoute);
app.use('/api/exam', examRoute);
app.use('/api/institutions', institutionsRoute);

// HOME PAGE http://localhost:8000
app.get('/',
    function (req, res) {
        const welcomeString = JSON.stringify({
            msg: "Welcome to the Online Examination API",
            status: 200
        }, null, 4)
        // set content type
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        // send out a string
        res.end(welcomeString)
    }
);

app.get('/users',
    function (request, response) {
        DB.connect()
        DB.query('SELECT * from users', function (userList) {
            const userListJSONString = JSON.stringify(userList, null, 4)
            // set content type
            response.writeHead(200, {
                'Content-Type': 'application/json'
            })
            DB.disconnect();
            // send out a string
            response.end(userListJSONString)
        })
    }
);

const portNo = process.env.PORT || 8000;
app.listen(portNo, function () {
    console.log(`Server listening to port ${portNo}, go to http://localhost:${portNo}`)
});