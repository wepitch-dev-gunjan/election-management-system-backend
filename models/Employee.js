const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  designation: {
    type: String,
  },
  role: {
    type: String,
  },
  position: {
    type: String,
  },
});

module.exports = model("Employee", employeeSchema);
