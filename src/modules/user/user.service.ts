// import { User } from '../user/user.model';

// export default class Svc  {
//   static create(a:any){}
//   static get(a:any, b:any){}
// }


// export default class Svc extends User {
//   constructor () {
//     super();
//   }
// }

import User from './user.model';
export default class Svc extends User {}

// export default class Svc extends CrudFactory<User> {
//   constructor () {
//     super(User);
//   }
// }
