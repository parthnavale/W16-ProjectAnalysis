const express = require('express');
const router = express.Router();

const controllers = require('../controllers/institutionController');

router.get('/listOfInstitutions', controllers.listOfInstitutions);

module.exports = router;