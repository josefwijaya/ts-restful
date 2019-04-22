import { DataTypes, Model } from 'sequelize';

class model extends Model {}

const attr = {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING }
};

const opt = {
  modelName: 'User',
  tableName: 'Users'
};

export default { model, attr, opt }
