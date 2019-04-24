import { Application } from 'express'
import { create, list } from '../controller/user.controller';

export default function (app:any) {
  app.route('/users')
    .post(create)
    .get(list);
}
