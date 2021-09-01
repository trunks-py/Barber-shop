const router = require('express').Router();
const { Activity, User, Service } = require('../../models');
// const withAuth = require("../../utils/auth");

router.get('/', async (req, res) => {
  try {
    const userData = await Activity.findAll({
      include: [User, Service],

    });
    console.log({ userData });
    const reports = userData.map(report => report.get({plain: true}));
    // console.log({ reportData });

    // res.status(200).json(reportData);
    res.render("activity", { reports });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
