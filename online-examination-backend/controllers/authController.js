const DB = require('../db_config/dao');

exports.login = (request, response) => {
    const loginData = {
        email: request.body.email,
        password: request.body.password,
    }
    DB.connect();
    let query = "select * from users where email='" + loginData.email + "' and password='" + loginData.password+"'";
    console.log(query);
    DB.query(query,function (userList) {
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
        name:request.body.fullName,
        email: request.body.email,
        password: request.body.password,
        dateOfBirth:request.body.dateOfBirth,
        address:request.body.address,
        image: request.body.image
    };
    DB.connect();
    let query = "INSERT INTO USERS(fullName,password,address,dob,email,image,userCreated) ";
    query+= `VALUES('${signUpData.name}','${signUpData.password}','${signUpData.address}','${signUpData.dateOfBirth}','${signUpData.email}','${signUpData.image}',NOW())`;
    console.log(query);
    DB.query(query,function (userList) {
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