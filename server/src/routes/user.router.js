const express = require('express');
const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.route('/')
    .post(UserController.registerUser);
router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getUser);

router.delete('/:id', AuthMiddleware.isAuth, UserController.deleteUser);

module.exports = router;