const express = require("express");
const {
  createUser,
  getUser,
  getUsers,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/user", createUser);

router.get("/user/:user_id", getUser);
router.get("/user", getUsers);

router.put("/user/:user_id", editUser);

router.delete("/user/:user_id", deleteUser);

module.exports = router;
