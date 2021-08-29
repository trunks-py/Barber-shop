const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');



router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password']}
    });

    const users = userData.map((user) => user.get({ plain: true}));

    res.render('manageUsers', {users});
    // res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});





// TODO create new user (FIX THIS)
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});





module.exports = router;
