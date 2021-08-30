const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
//const serviceRoutes = require('./api/serviceRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
//router.use('/api/services', serviceRoutes);

module.exports = router;
