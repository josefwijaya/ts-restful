import { Application } from 'express'
import { create, list, get } from './user.controller';

export default function (app:Application) {
  app.route('/users')
    .post(create)
    .get(list);

  app.route('/users/:id')
    .get(get);
}
