const router = require('express').Router();
const userRoutes = require('./user-routes');
const uploadRoutes = require('./upload-routes.js');

router.use('/user', userRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;
