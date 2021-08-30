const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const manageUserRoutes = require('./manageUserRoutes');
const activityRoutes = require('./activityRoute')


router.use('/users', userRoutes);
router.use('/services', serviceRoutes);
router.use('/manageUsers', manageUserRoutes);
router.use('/activity' , activityRoutes);

module.exports = router;
