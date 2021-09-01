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

    const allUserData = await User.findAll();
    const users = allUserData.map(user => user.get({plain:true}));

    const allServiceData = await Service.findAll();
    const services = allServiceData.map(service => service.get({plain:true}));
    // console.log({ reportData });

    // res.status(200).json(reportData);
    res.render("activity", { reports, users, services });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
