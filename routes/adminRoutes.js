const express = require("express");
const {
  createAdmin,
  getAdmins,
  getAdmin,
  editAdmin,
  deleteAdmin,
} = require("../controllers/adminController");
const router = express.Router();

router.post("/admin", createAdmin);

router.get("/admin/:admin_id", getAdmin);
router.get("/admin", getAdmins);

router.put("/admin/:admin_id", editAdmin);

router.delete("/admin/:admin_id", deleteAdmin);

module.exports = router;
