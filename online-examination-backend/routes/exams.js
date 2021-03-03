const express = require('express');
const router = express.Router();

const controllers = require('../controllers/examController');

router.get('/listPracticeTestQuestion', controllers.listPracticeTestQuestion);
router.post('/submitPracticeTest', controllers.submitPracticeTest);

module.exports = router;