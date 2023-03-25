const express = require("express");
const router = express.Router();
const UserController = require("../controller/users");

// READ - GET
router.get("/", UserController.getAllUsers);

// CREATE - POST
router.post("/", UserController.createNewUser);

// UPDATE - PATCH
router.patch("/:id", UserController.updateUser);

// DELETE - DELETE
router.delete("/:id", UserController.deleteUser);

module.exports = router;
