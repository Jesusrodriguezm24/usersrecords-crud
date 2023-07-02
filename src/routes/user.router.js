const { getAllUser, createUser, deleteUser, updateUser, getOneUser } = require('../controllers/user.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
	.get(getAllUser)
        .post(createUser)

usersRouter.route("/:id")
        .get(getOneUser)
        .delete(deleteUser)
        .put(updateUser)

module.exports = usersRouter;