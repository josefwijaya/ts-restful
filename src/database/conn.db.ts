import fs from 'fs';
import ar from 'path';
import { Sequelize, Model } from 'sequelize';
// import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from '../../lib/associations';

export class Connection {
  private sequelize:Sequelize;
  models: any;
  // private models:{ User:Model };

  constructor (uri:string, logging:boolean) {
    this.sequelize = new Sequelize(uri, { logging });
  }

  auth () {
    return this.sequelize.authenticate();
  }

  /** load models */
  async load (path:string, pattern:string) {
    const modelPaths = this.getModels(path, pattern);
    const models:any = [];

    modelPaths.forEach(e => {
      const m = require(ar.resolve(e));
      models.push(m);
    });

    // const promises:any[] = [];
    // modelPaths.forEach(e => {
    //   promises.push(import(ar.resolve(e)));
    // });
    // const models = await Promise.all(promises);
    console.log('1', models);
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

  private getModels (path:string, pattern:string) {
    const files = fs.readdirSync(path);
    let models:string[] = [];
    files.forEach(e => {
      if (e.split('.').length === 1) {
        // recursive get all model files
        models = models.concat(this.getModels(`${path}/${e}`, pattern));
      }
      if (e.match(pattern)) {
        models.push(path + '/' + e); // ./src/modules + / + user.model.ts
      }
    });

    return models;
  }
}

export class Db extends Sequelize {};
