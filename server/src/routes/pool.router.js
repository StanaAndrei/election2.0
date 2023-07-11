const express = require("express");
const PoolController = require("../controllers/pool.controller");
const router = express.Router();

router.post('/', PoolController.createPool)

module.exports = router;