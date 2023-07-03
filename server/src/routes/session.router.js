const express = require('express');
const SessionController = require('../controllers/session.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/', [AuthMiddleware.isActivated], SessionController.createSession);

module.exports = router;