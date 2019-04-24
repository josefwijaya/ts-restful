import { Application } from 'express'
import { create, list } from './user.controller';

export default function (app:any) {
  console.log(create, list);
  app.route('/users')
    .post(create)
    .get(list);
}
