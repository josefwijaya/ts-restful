import { Sequelize, DataTypes, Model } from 'sequelize';

export default class Setting extends Model {}

export const attr = {
  key: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.JSON }
};

export const opt = {
  modelName: 'Setting',
  tableName: 'Settings'
};

// export default { model, attr, opt }
