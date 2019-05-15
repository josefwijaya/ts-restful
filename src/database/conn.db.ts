import _ from 'lodash';
import { Sequelize, Model } from 'sequelize';
// import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from '../../lib/associations';
import * as model from './model';

export class Connection {
  private sequelize:Sequelize;
  models: any;

  constructor (uri:string, logging:boolean) {
    this.sequelize = new Sequelize(uri, { logging });
    _.forEach(model, e => {
      const a = e.init(this.sequelize);
      e.default.init(a.attr, a.opt);
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
}

export class Db extends Sequelize {}
