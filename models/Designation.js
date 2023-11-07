const { Schema, model } = require("mongoose");

const designationSchema = new Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  department: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = model("Designation", designationSchema);
