const DB = require("../db_config/dao");
const http = require("https");

exports.listActualTestQuestion = (request, response) => {
  http
    .get(
      "https://opentdb.com/api.php?amount=25&category=9&difficulty=medium&type=multiple",
      (resp) => {
        let data = "";

        // Concatinate each chunk of data
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // Once the response has finished, do something with the result
        resp.on("end", () => {
          response.json(JSON.parse(data));
        });

        // If an error occured, return the error to the user
      }
    )
    .on("error", (err) => {
      response.json("Error: " + err.message);
    });
};

exports.listPracticeTestQuestion = (request, response) => {
  http
    .get(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
      (resp) => {
        let data = "";

        // Concatinate each chunk of data
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // Once the response has finished, do something with the result
        resp.on("end", () => {
          response.json(JSON.parse(data));
        });

        // If an error occured, return the error to the user
      }
    )
    .on("error", (err) => {
      response.json("Error: " + err.message);
    });
};

exports.submitTest = (request, response) => {
  const testData = {
    grade: request.body.grade,
    userId: request.body.userId,
    isPractice: request.body.isPractice,
  };
  DB.connect();
  let query = "INSERT INTO RESULT(grade,userId,isPractice) ";
  query += `VALUES('${testData.grade}','${testData.userId}',${testData.isPractice})`;
  DB.query(query, function (testResult) {
    const jSONString = JSON.stringify(testResult, null, 4);
    // set content type
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    DB.disconnect();
    // send out a string
    response.end(jSONString);
  });
};

exports.listOfTestScoresOfUser = (request, response) => {
  const testData = {
    userId: request.query.userId,
    isPractice: request.query.isPractice,
  };
  DB.connect();
  let query = `select resultId, grade, userId, isPractice, DATE_FORMAT(createdDate, '%W, %M %e, %Y, %h:%i:%l %p') as createdDate from result where userId=${testData.userId} and isPractice=${testData.isPractice} ORDER by createdDate DESC`;
  DB.query(query, function (testResult) {
    const jSONString = JSON.stringify(testResult, null, 4);
    // set content type
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    DB.disconnect();
    // send out a string
    response.end(jSONString);
  });
};
