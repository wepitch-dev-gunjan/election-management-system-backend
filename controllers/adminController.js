const Admin = require("../models/Admin");

exports.createAdmin = async (req, res) => {
  try {
    const { name, address, phone } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Please enter your name" });
    }

    if (!address) {
      return res.status(400).send({ error: "Please enter your address" });
    }

    if (!phone) {
      return res.status(400).send({ error: "Please enter your phone" });
    }

    const newAdmin = {};

    if (name) newAdmin.name = name;
    if (address) newAdmin.address = address;
    if (phone) newAdmin.phone = phone;

    const nAdmin = new Admin(newAdmin);

    const createdAdmin = await nAdmin.save();

    res.status(200).send({ message: "Admin created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const admin_id = req.params.admin_id;
    const admin = await Admin.findById(admin_id);

    if (!admin) {
      return res.status(404).send("No Admin found");
    }

    res.status(200).send(admin);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error " });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admin = await Admin.find();

    if (!admin) {
      return res.status(404).send("No Admins found");
    }

    res.status(200).send(admin);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error " });
  }
};

exports.editAdmin = async (req, res) => {
  try {
    const updateFields = {};

    if (req.body.address) {
      updateFields.address = req.body.address;
    }

    if (req.body.name) {
      updateFields.name = req.body.name;
    }

    if (req.body.phone) {
      updateFields.phone = req.body.phone;
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.admin_id,
      updateFields
    );

    if (!updatedAdmin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.status(200).send({ message: "Admin updated successfully " });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.deleteAdmin = async (req, res) => {
  const admin_id = req.params.admin_id;

  const admin = await Admin.findByIdAndDelete(admin_id);

  if (!admin) {
    res.status(404).send({ error: "Admin not found " });
  }

  res.status(200).send({ message: "Admin deleted successfully" });
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error " });
  }
};
