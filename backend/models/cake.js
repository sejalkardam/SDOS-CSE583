import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    description: "Name of the cake.",
  },
  description: {
    type: String,
    description: "Description of the cake.",
  },
  price: {
    type: Number,
    description: "Price of the cake.",
  },
  category: {
    type: String,
    description: "Category or type of the cake.",
  },
  availability: {
    type: Boolean,
    description:
      "Availability status of the cake (true if available, false if sold out).",
  },
});

const Cake = mongoose.model("Cake", cakeSchema);

export default Cake;
