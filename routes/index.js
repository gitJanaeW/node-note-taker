const router = require('express').Router();
const apiRoutes = require('./apiRoutes/noteRoutes');
const htmlRoutes = require('./htmlRoutes/htmlRoutes');

// direct router (ie. express) to the following routes (apiRoutes and htmlRoutes)
// all apiRoutes endpoints will start with '/api'
router.use('/api', apiRoutes);
// all html endpoints will start with '/'
router.use('/', htmlRoutes);

module.exports = router;