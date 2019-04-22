import { DataTypes, Model } from 'sequelize';

class model extends Model {}

const attr = {
  key: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.JSON }
};

const opt = {
  modelName: 'Setting',
  tableName: 'Settings'
};

export default { model, attr, opt }
