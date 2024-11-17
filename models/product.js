const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });

  return Product;
}; 