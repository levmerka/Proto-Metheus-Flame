const router = require('express').Router();
const {
  getAllUploads,
  createUpload,
  getUpload,
} = require('../../controllers/upload-controller');

router.route('/').get(getAllUploads);
router.route('/').post(createUpload);
router.route('/:id').get(getUpload);

module.exports = router;
