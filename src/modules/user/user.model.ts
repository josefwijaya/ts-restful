import { Model, DataTypes } from 'sequelize';

export class User extends Model {}

export const init = {
  attributes: {
    id: {
      type: new DataTypes.INTEGER.UNSIGNED(),
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  options: {
    tableName: 'Users',
    modelName: 'User',
    // sequelize: sequelize, // this bit is important
  }
}
