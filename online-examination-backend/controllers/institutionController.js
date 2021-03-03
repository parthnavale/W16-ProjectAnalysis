const DB = require('../db_config/dao');


exports.listOfInstitutions = (request, response) => {
    DB.connect()
        DB.query('SELECT * from institutions', function (institutionsList) {
            const jSONString = JSON.stringify(institutionsList, null, 4)
            // set content type
            response.writeHead(200, {
                'Content-Type': 'application/json'
            })
            DB.disconnect();
            // send out a string
            response.end(jSONString)
        })
};