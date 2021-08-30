const router = require("express").Router();
const { Service } = require("../../models");

router.post("/", async (req, res) => {
  const { serviceName, price } = req.body;
  if (!serviceName || !price)
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

router.delete("/:id", async (req, res) => {
  try {
    const serviceData = await Service.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!serviceData) {
      res.status(404).json({ message: "No service found with this id" });
      return;
    }

    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
