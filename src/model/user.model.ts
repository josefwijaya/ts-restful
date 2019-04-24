import { Sequelize, DataTypes, Model } from 'sequelize';

export default class User extends Model {}

export const attr = {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING }
};

export const opt = {
  modelName: 'User',
  tableName: 'Users',
  sequelize: ''
};

// export default { model, attr, opt }
