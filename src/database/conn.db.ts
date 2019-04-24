import _ from 'lodash';
import { Sequelize, Model } from 'sequelize';
// import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from '../../lib/associations';
import * as model from './model';

export class Connection {
  private sequelize:Sequelize;
  models: any;
  // private models:{ User:Model };

  constructor (uri:string, logging:boolean) {
    this.sequelize = new Sequelize(uri, { logging });
    _.forEach(model, e => {
      const o = {
        modelName: e.opt.modelName, tableName: e.opt.tableName,
        sequelize: this.sequelize
      };
      e.default.init(e.attr, o);
    });
    // global.sequelize = this.sequelize;
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
