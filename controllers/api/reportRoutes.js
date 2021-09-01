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

module.exports = router;
