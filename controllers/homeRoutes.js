const router = require("express").Router();
const { Project, Service } = require("../models");
//const getProjectsByUser = require('../utils/helpers');

router.get("/services", async (req, res) => {
  try {
    const dbServices = await Service.findAll();

    const services = dbServices.map((service) => service.get({ plain: true }));

    res.render("service", { services });

    // res.json(dbServices);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Prevent non logged in users from viewing the homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
    // res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    return res.redirect("/");
  }
  res.render("login");
});

module.exports = router;
