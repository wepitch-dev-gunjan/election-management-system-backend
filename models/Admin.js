const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

module.exports = model("Admin", adminSchema);
