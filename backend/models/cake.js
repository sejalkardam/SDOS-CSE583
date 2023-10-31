import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    description: "Name of the cake.",
  },

  id: {
    type: String,
    description:"Id of cake",
    unique: true
  },

  price: {
    type: Number,
    description: "Price of the cake.",
  }
});

const Cake = mongoose.model("Cake", cakeSchema);

export default Cake;
