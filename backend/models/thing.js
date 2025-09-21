const mongoose = require("mongoose");

// Create a schema/model
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  userId: { type: String, required: true },
});

// Export model named 'Thing'
module.exports = mongoose.model("Thing", thingSchema);
