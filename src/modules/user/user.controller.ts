import { Request, Response, NextFunction } from 'express';
import UserSvc from './user.service';

export const create = async (req:Request, res:Response, next:NextFunction) => {
  let data;
  try {
    data = await UserSvc.create(req.body);
  } catch (e) {
    data = e;
  }
  return res.jsonp(data);
};

export const list = async (req:Request, res:Response, next:NextFunction) => {
  let list;
  try {
    list = await UserSvc.get({ where: { } }, { multi: true });
  } catch (e) {
    console.log(e);
    list = e;
  }
  return res.jsonp(list);
}

export const get = async (req:Request, res:Response, next:NextFunction) => {
  const id = req.params.id;
  let data, get;
  try {
    get = await UserSvc.get({ where: { id } }, { multi: undefined });
    data = get;
  } catch (e) {
    data = e;
  }
  return res.jsonp(get);
}
