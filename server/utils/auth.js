const jwt = require('jsonwebtoken');

const secret = 'beatit';
// const expiration = '2h';
const expiration = '30000';
// DEVELOPEMENT: Expiration set low for demo

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};