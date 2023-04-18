'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Band.init({
    event_id: DataTypes.INTEGER,
    stage: DataTypes.STRING,
    stage_event: DataTypes.TEXT,
    set_time: DataTypes.DATE,
    meet_greet: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};