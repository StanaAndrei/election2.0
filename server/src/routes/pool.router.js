const express = require("express");
const PoolController = require("../controllers/pool.controller");
const router = express.Router();

router.post('/', PoolController.createPool)
router.get('/of/:id', PoolController.getPoolsOfUser)

module.exports = router;