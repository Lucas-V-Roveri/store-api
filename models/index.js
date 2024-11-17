const { Sequelize } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config);

const User = require('./user')(sequelize);
const Product = require('./product')(sequelize);

module.exports = {
  sequelize,
  User,
  Product,
}; 