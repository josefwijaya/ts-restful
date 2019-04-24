import Crud from './crud.service'
import { User } from '../model/index.model';

export default class Svc extends Crud {
  constructor () {
    super(User);
  }
}
