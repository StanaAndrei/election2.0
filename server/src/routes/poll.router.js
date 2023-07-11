const express = require("express");
const PoolController = require("../controllers/poll.controller");
const router = express.Router();

router.post('/:id', PoolController.createPool)
router.get('/of/:id', PoolController.getPoolsOfUser)

module.exports = router;