const router = require("express").Router();
const { Activity, User, Service } = require("../../models");
//const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await Activity.findAll({
      include: [User, Service],
    });
    const reportData = userData.map((x) => x.get({ plain: true }));
    console.log(reportData);
    res.render;
    //res.status(200).json(reportData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { service_id, user_id } = req.body;
    const newActivity = await Activity.create({
      service_id,
      user_id,
    });
    console.log({ newActivity });
    res.status(200).json(newActivity);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
