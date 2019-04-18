import fs from 'fs';
import { Sequelize } from 'sequelize';
// import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from '../../lib/associations';

export class Connection {
  private sequelize:any;

  constructor (uri:string, logging:boolean) {
    this.sequelize = new Sequelize(uri, { logging });
  }

  auth () {
    return this.sequelize.authenticate();
  }

  /** load models */
  async load (path:string, pattern:string) {
    // fs.readdir(directoryPath, function (err, files) {
    //   //handling error
    //   if (err) {
    //       return console.log('Unable to scan directory: ' + err);
    //   }
    //   //listing all files using forEach
    //   files.forEach(function (file) {
    //       // Do whatever you want to do with the file
    //       console.log(file);
    //   });
    // });
    const models = this.getModels(path, pattern);
    console.log('res', models)
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
        console.log(`1 ${path}/${e}`);
        models = models.concat(this.getModels(`${path}/${e}`, pattern));
        console.log('2 ', models);
      }
      if (e.match(pattern)) {
        console.log(true, path + e);
        models.push(path + '/' + e); // ./src/modules + / + user.model.ts
      }
    });

    return models;
  }
}

export class Db extends Sequelize {};
