export function getCakes(req, res) {
  const { category, priceFrom, priceTo } = req.query;
  
  let filteredCakes = cakes;
  if (category) {
    filteredCakes = filteredCakes.filter((cake) => cake.category === category);
  }
  if (priceFrom) {
    filteredCakes = filteredCakes.filter(
      (cake) => cake.price >= parseFloat(priceFrom)
    );
  }
  if (priceTo) {
    filteredCakes = filteredCakes.filter(
      (cake) => cake.price <= parseFloat(priceTo)
    );
  }

  res.status(200).json(filteredCakes);
}

export function addCake(req, res) {
  const newCake = req.body;

  // Perform validation and error handling as needed
  if (!newCake || !newCake.name || !newCake.price) {
    return res.status(400).json({ error: "Bad Request" });
  }
  cakes.push(newCake);

  res.status(201).json(newCake);
}
