const express = require("express");
const {
  createEmployee,
  getEmployee,
  getEmployees,
  editEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");
const router = express.Router();

router.post("/employee", createEmployee);

router.get("/employee/:employee_id", getEmployee);
router.get("/employee", getEmployees);

router.put("/employee/:employee_id", editEmployee);

router.delete("/employee/:employee_id", deleteEmployee);

module.exports = router;
