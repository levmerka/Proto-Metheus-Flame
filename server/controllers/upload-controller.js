const { File } = require('../models');

module.exports = {
  async createUpload({ body }, res) {
    const Upload = await Upload.create(body);

    if (!Upload) {
      return res.status(400).json({ message: 'Unable to create Upload' });
    }

    res.status(200).json(Upload);
  },
  async getAllUploads(req, res) {
    const allUploads = await Upload.find({});

    if (!allUploads) {
      return res.status(400).json({ message: 'No Uploads found' });
    }

    res.status(200).json(allUploads);
  },
  async getUpload({ params }, res) {
    const Upload = await Upload.findOne({ _id: params.id });

    if (!Upload) {
      return res.status(400).json({ message: 'No Upload found by that id' });
    }

    res.status(200).json(Upload);
  },
};
