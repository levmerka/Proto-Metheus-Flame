const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getUser,
} = require('../../controllers/User-controller');

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUser);

module.exports = router;
