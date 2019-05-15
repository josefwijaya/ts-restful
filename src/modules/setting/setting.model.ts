import { Sequelize, Model, DataTypes } from 'sequelize';

export default class Setting extends Model {
  static initialize (sequelize:Sequelize) {
    const attr = {
      key: { type: DataTypes.STRING, allowNull: false },
      value: { type: DataTypes.JSON, allowNull: false }
    };
    const opt = {
      sequelize,
      modelName: 'Setting',
      tableName: 'Settings'
    };
    return { attr, opt };
  }

  static association (model:object) {

  }
}
