const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, date_of_birth, location } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Please enter name" });
    }

    if (!email) {
      return res.status(400).send({ error: "Please enter email" });
    }

    if (!phone) {
      return res.status(400).send({ error: "Please enter phone" });
    }

    if (!date_of_birth) {
      return res.status(400).send({ error: "Please enter date of birth" });
    }

    if (!location) {
      return res.status(400).send({ error: "Please enter location" });
    }

    const newUser = {};

    if (name) newUser.name = name;
    if (email) newUser.email = email;
    if (phone) newUser.phone = phone;
    if (date_of_birth) newUser.date_of_birth = date_of_birth;
    if (location) newUser.location = location;

    const nUser = new User(newUser);

    const createdUser = await nUser.save();

    res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).send("No user found");
    }

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error " });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // This will retrieve all users from the database

    if (!users) {
      return res.status(404).send("No users found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error " });
  }
};

exports.editUser = async (req, res) => {
  try {
    const updateFields = {};

    if (req.body.email) {
      updateFields.email = req.body.email;
    }

    if (req.body.name) {
      updateFields.name = req.body.name;
    }

    if (req.body.phone) {
      updateFields.phone = req.body.phone;
    }

    if (req.body.date_of_birth) {
      updateFields.date_of_birth = req.body.date_of_birth;
    }

    if (req.body.location) {
      updateFields.location = req.body.location;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.user_id,
      updateFields
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).send({ message: "User updated successfully " });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.deleteUser = async (req, res) => {
  const user_id = req.params.user_id;

  const user = await User.findByIdAndDelete(user_id);

  if (!user) {
    res.status(404).send({ error: "User not found " });
  }

  res.status(200).send({ message: "User deleted successfully" });
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error " });
  }
};
