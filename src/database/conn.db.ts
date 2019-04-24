import _ from 'lodash';
import { Sequelize, Model } from 'sequelize';
// import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from '../../lib/associations';
import * as model from '../model/index.model';

export class Connection {
  private sequelize:any;

  constructor (uri:string, logging:boolean) {
    this.sequelize = new Sequelize(uri, { logging });
    _.forEach(model, e => {
      const o = {
        modelName: e.opt.modelName, tableName: e.opt.tableName,
        sequelize: this.sequelize
      };
      e.default.init(e.attr, o);
      // const opt = {
      //   tableName: e.opt.tableName, modelName: e.opt.modelName,
      //   sequelize: this.sequelize
      // }
      // e.model.init(e.attr, opt);
    });
  }

  auth () {
    return this.sequelize.authenticate();
  }

  /** sync modules models with the database */
  sync (config:object) {
    return this.sequelize.sync(config);
  }

  stop () {
    return this.sequelize.close();
  }

  get () {
    return this.sequelize;
  }
}

export class Db extends Sequelize {};
