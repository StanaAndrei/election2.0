const express = require('express');
const SessionController = require('../controllers/session.controller');
const router = express.Router();

router.post('/', SessionController.createSession);

module.exports = router;