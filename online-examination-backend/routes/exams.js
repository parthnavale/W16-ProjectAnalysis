const express = require('express');
const router = express.Router();

const controllers = require('../controllers/examController');

router.get('/listActualTestQuestion', controllers.listActualTestQuestion);
router.get('/listPracticeTestQuestion', controllers.listPracticeTestQuestion);
router.post('/submitTest', controllers.submitTest);
router.get('/listOfTestScoresOfUser', controllers.listOfTestScoresOfUser);

module.exports = router;