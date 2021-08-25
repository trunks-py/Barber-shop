const router = require("express").Router();
const { Project } = require("../models");
const withAuth = require("../utils/auth");
//const getProjectsByUser = require('../utils/helpers');

// Prevent non logged in users from viewing the homepage
router.get("/", async (req, res) => {
  try {
    const projectData = await Project.findAll({
      order: [["date_created", "ASC"]],
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      projects,
    });
    // res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    return res.redirect("/profile");
  }
  res.render("login");
});

module.exports = router;
