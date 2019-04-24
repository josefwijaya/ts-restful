import Crud from '../common/crud.service';
import User from '../user/user.model';

export default class Svc extends Crud {
  constructor () {
    super(User);
  }
}
