const mongoose = require("mongoose");

// Create a schema/model
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

// Export model named 'User'
module.exports = mongoose.model("User", userSchema);
