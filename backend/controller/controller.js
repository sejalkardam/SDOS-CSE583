import Cakes from "../models/cake.js";

export async function getCakes(req, res) {
  try {
    let filteredCakes = await Cakes.find({});
    // const { category, priceFrom, priceTo } = req.query;

    // if (category) {
    //   filteredCakes = filteredCakes.filter((cake) => cake.category === category);
    // }
    // if (priceFrom) {
    //   filteredCakes = filteredCakes.filter(
    //     (cake) => cake.price >= parseFloat(priceFrom)
    //   );
    // }
    // if (priceTo) {
    //   filteredCakes = filteredCakes.filter(
    //     (cake) => cake.price <= parseFloat(priceTo)
    //   );
    // }
    res.status(200).json(filteredCakes);
  } catch (err) {
    console.log("Error fetching getCakes: " + err);
    res.status(500).json({ error: "Error getting cakes" });;
  }
}

export function addCake(req, res) {
  try {
    const newCake = req.body;

    // Perform validation and error handling as needed
    if (!newCake || !newCake.name || !newCake.price) {
      return res.status(400).json({ error: "Enter correct details of Cake" });
    }
    const cakeItem = new Cakes(newCake);
    cakeItem.save();

    res.status(201).json(newCake);
  } catch (err) {
    console.log("Error adding cake: " + err);
    
    res.status(500).json({ error: "Error adding cake" });
  }
}

// Route to update a cake by ID
export async function updateCake(req, res) {
  const cakeId = req.params.cakeId;
  const updatedCakeData = req.body;

  try {
    // Use Mongoose's updateOne method to fully update the cake by ID
    const result = await Cakes.updateOne({ "_id": cakeId }, updatedCakeData);

    if (result.nModified === 0) {
      return res.status(404).json({ error: 'Cake not found' });
    }

    res.status(200).json(updatedCakeData); // Respond with the updated data
  } catch (err) {
    console.log("Error updating cake"+err);
    res.status(500).json({ error: 'Error updating cake' });
  }
};


//Route to delete Cake
export async function deleteCake(req, res) {
  const cakeId = req.params.cakeId;

  try {
    // Use Mongoose's deleteOne function to delete the cake by ID
    const result = await Cakes.deleteOne({ "_id": cakeId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Cake not found" });
    }

    res.status(204).end();
  } catch (err) {
    console.log("Error deleting cake" + err);
    res.status(500).json({ error: "Error deleting cake" });
  }
}
