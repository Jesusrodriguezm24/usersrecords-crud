const express = require('express');
const users = require('./user.router.js');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", users)

module.exports = router;