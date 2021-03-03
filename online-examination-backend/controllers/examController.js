const DB = require('../db_config/dao');
const http = require('https');


exports.listPracticeTestQuestion = (request, response) => {
    http.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple', (resp) => {
        let data = '';

        // Concatinate each chunk of data
        resp.on('data', (chunk) => {
          data += chunk;
        });

        // Once the response has finished, do something with the result
        resp.on('end', () => {
            response.json(JSON.parse(data));
        });

        // If an error occured, return the error to the user
      }).on("error", (err) => {
        response.json("Error: " + err.message);
      });
};



exports.submitPracticeTest = (request, response) => {
    const practiceTestData = {
        grade: request.body.grade,
        userId: request.body.userId
    };
    DB.connect();
    let query = "INSERT INTO RESULT(grade,userId,isPractice) ";
    query += `VALUES('${practiceTestData.grade}','${practiceTestData.userId}',1)`;
    DB.query(query, function (practiceTestResult) {
        const jSONString = JSON.stringify(practiceTestResult, null, 4)
        // set content type
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        DB.disconnect();
        // send out a string
        response.end(jSONString)
    });
};
