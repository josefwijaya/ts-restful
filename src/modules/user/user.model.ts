// import { M } from '../../database/model.factory';
import BaseModel from '../../database/base.model';
import { Sequelize, DataTypes, Model } from 'sequelize';

export const init = function (sequelize:Sequelize) {
  const attr = {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false }
  };

  const opt = {
    sequelize, modelName: 'User', tableName: 'Users'
  };

  return { attr, opt };
};

export default class User extends BaseModel {
  id?:number;
  firstName!:string;
  lastName!:string;
  password!:string;
  username!:string;
  email!:string;
  createdAt?:Date;
  updatedAt?:Date;

  get fullName () {
    return this.firstName + ' ' + this.lastName;
  }

  toJSON () {
    const data = Object.assign(this.get(), { fullName: this.fullName });
    return data;
  }
}
// export default class User extends M {}
// export default class User extends Model {}
