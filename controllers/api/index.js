const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const manageUserRoutes = require('./manageUserRoutes');

router.use('/users', userRoutes);
router.use('/services', serviceRoutes);
router.use('/manageUsers', manageUserRoutes);

module.exports = router;
