const { Schema, model } = require("mongoose");

const permissionSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = model("Permission", permissionSchema);
