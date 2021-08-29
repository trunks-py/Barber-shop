const router = require('express').Router();
const { Service } = require('../../models');

router.post("/", async (req, res) => {
  const { service_name, price } = req.body;
  if (!service_name || !price)
    throw new Error("You must provide a service name and a price");
  try {
    const newService = await Service.create({
      service_name,
      price,
    });
    res.status(200).json(newService);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const dbServices = await Service.findAll();
    res.json(dbServices);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
