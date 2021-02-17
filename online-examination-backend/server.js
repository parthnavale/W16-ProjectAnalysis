'use strict'

const express = require('express')
const app = express()
const cors = require('cors')

// SET CORS to allows cross-origin resource sharing access
app.use(cors())

// support parsing of application/json type post data
app.use(express.json())

// support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({
    extended: true
}))

// HOME PAGE http://localhost:8000
app.get('/',
    function (req, res) {
        return res.send('<h4>Online Examination API</h4>')
    }
)

const portNo = process.env.PORT || 8000
app.listen(portNo, function () {
    console.log(`Server listening to port ${portNo}, go to http://localhost:${portNo}`)
})
