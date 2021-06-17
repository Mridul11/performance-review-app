'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING, },
    lastName: {
      type: DataTypes.STRING, },
    email: {
      type: DataTypes.STRING, },
    userReview: {
      type: DataTypes.STRING, },
    admin: {
      type: DataTypes.BOOLEAN, defaultValue: 0 },
    rating: {
      type: DataTypes.INTEGER, defaultValue:5 }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};