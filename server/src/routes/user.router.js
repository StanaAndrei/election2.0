const express = require('express');
const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');
const processJwt = require('../middlewares/jwt.middleware');

const router = express.Router();

router.get('/request-recovery/:email', UserController.getResetPassword);
router.patch('/reset-password', UserController.resetPassword);
router.route('/')
    .post(UserController.registerUser)
router.patch('/:id', [ processJwt, AuthMiddleware.isAuth], UserController.updateUser);
router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getUser);

router.delete('/:id', [ processJwt, AuthMiddleware.isAuth], UserController.deleteUser);
router.patch('/activate/:otpCode', UserController.activateUser)

module.exports = router;