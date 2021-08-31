const router = require("express").Router();
const { Activity, User, Service } = require("../../models");
//const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await Activity.findAll({
      include: [
        {
          model: Service,
          where: { service_name: activity.service_id },
          include: [
            {
              model: User,
              where: {
                state: activity.user_id,
              },
            },
          ],
        },
      ],
    });

    const projects = userData.get({ plain: true });
    console.log({ userData });
    console.log({ projects });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
