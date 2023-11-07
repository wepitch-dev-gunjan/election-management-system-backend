const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
  try {
    const { name, address, phone, designation, role, position } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Please enter your name" });
    }

    if (!address) {
      return res.status(400).send({ error: "Please enter your address" });
    }

    if (!phone) {
      return res.status(400).send({ error: "Please enter your phone" });
    }

    if (!designation) {
      return res.status(400).send({ error: "Please enter your designation" });
    }

    if (!role) {
      return res.status(400).send({ error: "Please enter your role" });
    }

    if (!position) {
      return res.status(400).send({ error: "Please enter your position" });
    }

    const newEmployee = {};

    if (name) newEmployee.name = name;
    if (phone) newEmployee.phone = phone;
    if (address) newEmployee.address = address;
    if (designation) newEmployee.designation = designation;
    if (role) newEmployee.role = role;
    if (position) newEmployee.position = position;

    const nEmployee = new Employee(newEmployee);

    const createdEmployee = await nEmployee.save();

    res.status(200).send({ message: "Employee created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const employee_id = req.params.employee_id;
    const employee = await Employee.findById(employee_id);

    if (!employee) {
      return res.status(404).send("No Employee found");
    }

    res.status(200).send(employee);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error " });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    if (!employees) {
      return res.status(404).send("No Employees found");
    }

    res.status(200).send(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error " });
  }
};

exports.editEmployee = async (req, res) => {
  try {
    const updateFields = {};

    if (req.body.name) {
      updateFields.name = req.body.name;
    }

    if (req.body.address) {
      updateFields.address = req.body.address;
    }

    if (req.body.phone) {
      updateFields.phone = req.body.phone;
    }

    if (req.body.designation) {
      updateFields.designation = req.body.designation;
    }

    if (req.body.role) {
      updateFields.role = req.body.role;
    }

    if (req.body.position) {
      updateFields.position = req.body.position;
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.employee_id,
      updateFields
    );

    if (!updatedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.status(200).send({ message: "Employee updated successfully " });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.deleteEmployee = async (req, res) => {
  const employee_id = req.params.employee_id;

  const employee = await Employee.findByIdAndDelete(employee_id);

  if (!employee) {
    res.status(404).send({ error: "Employee not found " });
  }

  res.status(200).send({ message: "Employee deleted successfully" });
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error " });
  }
};
