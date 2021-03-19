require('dotenv').config();

const ENV = (key) => process.env[key];

module.exports = {
  port: ENV('PORT'),
};
