const { Schema, model } = require("mongoose");

const departmentSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = model("Department", departmentSchema);
