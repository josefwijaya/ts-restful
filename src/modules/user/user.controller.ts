import { Request, Response, NextFunction } from 'express';
import UserSvc from './user.service';

const UserS = new UserSvc();

export const create = async (req:Request, res:Response, next:NextFunction) => {
  const user = await UserS.create(req.body);
  return res.jsonp(user);
};

export const list = async (req:Request, res:Response, next:NextFunction) => {
  const list = await UserS.get({ where: { } }, { multi: true });
  return res.jsonp(list);
}

export const get = async (req:Request, res:Response, next:NextFunction) => {
  const id = req.params.id;
  let data, get;
  try {
    get = await UserS.get({ where: { id } }, { multi: undefined });
    data = get;
  } catch (e) {
    data = e;
  }
  return res.jsonp(get);
}
