const DB = require('../db_config/dao');

exports.login = (request, response) => {
    const loginData = {
        email: request.body.email,
        password: request.body.password,
    }
    DB.connect();
    let query = "select userId,fullName,address,dob,email,image,userCreated,userModified,isPurchased, (select count(*) from result r where r.userId=u.userId and isPractice=false) as isActualTestGiven from users u  where email='" + loginData.email + "' and password='" + loginData.password + "' LIMIT 1";
    DB.query(query, function (userList) {
        const userListJSONString = JSON.stringify(userList, null, 4)
        // set content type
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        DB.disconnect();
        // send out a string
        response.end(userListJSONString)
    });
};

exports.signup = (request, response) => {
    const signUpData = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        dateOfBirth: request.body.dateOfBirth,
        address: request.body.address,
        image: request.body.image
    };
    DB.connect();
    let query = "INSERT INTO USERS(fullName,password,address,dob,email,image,userCreated) ";
    query += `VALUES('${signUpData.name}','${signUpData.password}','${signUpData.address}','${signUpData.dateOfBirth}','${signUpData.email}','${signUpData.image}',NOW())`;

    DB.query(query, function (userList) {
        const userListJSONString = JSON.stringify(userList, null, 4)
        // set content type
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        DB.disconnect();
        // send out a string
        response.end(userListJSONString)
    });
};


exports.setupDatabaseAndTables = (req, res) => {
    DB.setupDatabaseAndTables();
    setTimeout(function () {
        res.send({
            msg: "Database and Tables are created successfully.",
            status: 200
        });
    }, 1000)

};

exports.purchase = (request, response) => {
    const purchaseData = {
        userId: request.body.userId
    };
    DB.connect();
    let query = "UPDATE users SET isPurchased=1 WHERE userId='" + purchaseData.userId + "'";
    DB.query(query, function (userList) {
        const userListJSONString = JSON.stringify(userList, null, 4)
        // set content type
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        DB.disconnect();
        // send out a string
        response.end(userListJSONString)
    });
};