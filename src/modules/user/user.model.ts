// import { Model, DataTypes } from 'sequelize';

// export class User extends Model {
//   static getAttr () {
//     return
//   }
// }

// export const init = {
//   attributes: {
//     id: {
//       type: new DataTypes.INTEGER.UNSIGNED(),
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: new DataTypes.STRING(128),
//       allowNull: false,
//     },
//   },
//   options: {
//     tableName: 'Users',
//     modelName: 'User',
//     // sequelize: sequelize, // this bit is important
//   }
// };

// export const association = function (models) {

// }

const Sequelize = require('sequelize');

exports.init = {
  attributes: {
    id: {
      type: Sequelize.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  options: {
    tableName: 'Users',
    modelName: 'User',
    // sequelize: sequelize, // this bit is important
  }
};
