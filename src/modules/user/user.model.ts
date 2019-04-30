import { DataTypes, Model } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

export const attr = {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },

  // fullName: { type: DataTypes.VIRTUAL }
};

export const opt = {
  // indexes: [], // e.g. [ { unique: true, fields: ['email', 'firstName'] } ]
  // getterMethods: {
  //   fullName: function () {
  //     return this.firstName + ' ' + this.lastName
  //   }
  // },
  modelName: 'User',
  tableName: 'Users'
};

export default class User extends Model {
  // public id!:number;
  public firstName!:string;
  public lastName!:string|null;
  // public password!:string;

  get fullName () {
    return this.firstName + ' ' + this.lastName;
  }

  toJSON () {
    // const fN = this.get('fullName');
    // console.log(fN);
    const values = this.get();
    console.log(this.fullName);
    return values;
  }
}
