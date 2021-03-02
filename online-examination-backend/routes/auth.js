const express = require('express');
const router = express.Router();

const controllers = require('../controllers/authController');

router.post('/login', controllers.login);
router.post('/signup', controllers.signup);
router.post('/purchase', controllers.purchase);

router.get("/setupDatabaseAndTables", controllers.setupDatabaseAndTables)

module.exports = router;