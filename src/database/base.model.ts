import { Model, FindAndCountOptions } from 'sequelize';

interface IQuery extends FindAndCountOptions {

}

interface IOpt {
  multi?:boolean;
  scope?:string;
}

// abstract class ModelFactory<T extends Model> {
//   constructor(private modelConstructor: new () => T) { }

//   public create(): T {
//       return new (this.modelConstructor)();  // OK!
//   }
// }

// export default ModelFactory;

// attempt 2

// function ModelFactory<T> () {
//   return class CustomModel extends Model<T> {
//     static get (query:IQuery, opt:IOpt):any {
//       let model;
//       model = opt.scope ? this.scope(opt.scope) : this;

//       if (opt.multi) {
//         return model.findAndCountAll(query);
//       } else {
//         return model.findOne(query);
//       }
//     }
//   };
// }

// export default ModelFactory;

// attempt 4

export default class BaseModel extends Model {
  static get (query:IQuery, opt:IOpt):any {
    let model;
    model = opt.scope ? this.scope(opt.scope) : this;

    if (opt.multi) {
      return model.findAndCountAll(query);
    } else {
      return model.findOne(query);
    }
  }
}

// attempt 3

// export default class CustomModel<T> extends Model<T> {
//   static get (query:IQuery, opt:IOpt):any {
//     let model;
//     model = opt.scope ? this.scope(opt.scope) : this;

//     if (opt.multi) {
//       return model.findAndCountAll(query);
//     } else {
//       return model.findOne(query);
//     }
//   }
// }

// import { Model, ModelType, FindOptions,  } from 'sequelize';
// import { object } from 'joi';

// interface IQuery extends FindOptions {

// }

// interface IOpt {
//   multi?:boolean;
//   scope?:string;
// }

// export default class CRUD extends Model {
//   static get (query:IQuery, opt:IOpt):any {
//     let model;
//     model = opt.scope ? this.scope(opt.scope) : this;

//     if (opt.multi) {
//       return model.findAndCountAll(query);
//     } else {
//       return model.findOne(query);
//     }
//   }
// }

// // export default class CRUD {
// //   private model:any;

// //   constructor(model:any) {
// //     this.model = model;
// //   }

// //   create (data:object):any {
// //     return this.model.create(data);
// //   }

// //   get (query:IQuery, opt:IOpt):any {
// //     let model;
// //     model = opt.scope ? this.model.scope(opt.scope) : this.model;

// //     if (opt.multi) {
// //       return model.findAndCountAll(query);
// //     } else {
// //       return model.findOne(query);
// //     }
// //   }

// //   update (query:IQuery, update:object):any {

// //   }
// // }
