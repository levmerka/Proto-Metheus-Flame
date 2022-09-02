const { User } = require('../models');

module.exports = {
  async createUser({ body }, res) {
    const User = await User.create(body);

    if (!User) {
      return res.status(400).json({ message: 'Unable to create User' });
    }

    res.status(200).json(User);
  },
  async getAllUsers(req, res) {
    const allUsers = await User.find({});

    if (!allUsers) {
      return res.status(400).json({ message: 'No Users found' });
    }

    res.status(200).json(allUsers);
  },
  async getUser({ params }, res) {
    const User = await User.findOne({ _id: params.id });

    if (!User) {
      return res.status(400).json({ message: 'No User found by that id' });
    }

    res.status(200).json(User);
  },
};
