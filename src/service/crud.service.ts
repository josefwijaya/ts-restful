export default class CRUD {
  private model:any;
  constructor (model:any) {
    this.model = model.default;
  }

  create (data:object) {
    return this.model.create(data);
  }

  get (query:object) {
    return this.model.findAll(query);
  }


  // static create (data:object):any {
  //   return this.create(data);
  // }

  // static list (query:object):any {
  //   return this.findAll(query);
  // }
}

// import { Model } from 'sequelize';
// export default class CRUD extends Model{
//   static creates (data:object) {
//     return this.create(data);
//   }

//   static list (query:object) {
//     return this.findAll(query);
//   }

//   // static creates (data:object) {
//   //   return this.create(data);
//   // }

//   // static list (query:object) {
//   //   return this.findAll(query);
//   // }
// }
