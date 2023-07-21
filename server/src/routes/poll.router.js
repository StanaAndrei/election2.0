const express = require("express");
const PoolController = require("../controllers/poll.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const processJwt = require("../middlewares/jwt.middleware");
const router = express.Router();

router.post('/', [processJwt, AuthMiddleware.isAuth], PoolController.createPool)
router.get('/of/:id', PoolController.getPollsOfUser)

module.exports = router;