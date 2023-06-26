const express = require('express');
const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.route('/')
    .post(UserController.registerUser)
router.patch('/:id', AuthMiddleware.isAuth, UserController.updateUser);
router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getUser);

router.delete('/:id', AuthMiddleware.isAuth, UserController.deleteUser);

router.get('/reset-password/:email', UserController.getResetPassword);
router.patch('/reset-password/:token', UserController.resetPassword);
router.patch('/activate/:otpCode', UserController.activateUser)

module.exports = router;