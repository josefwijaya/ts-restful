import { Request, Response, NextFunction } from 'express';
import UserSvc from '../service/user.service';

const UserS = new UserSvc();

export const create = async (req:Request, res:Response, next:NextFunction) => {
  const user = await UserS.create(req.body);
  return res.jsonp(user);
};

export const list = async (req:Request, res:Response, next:NextFunction) => {
  const list = await UserS.get({ where: { } });
  return res.jsonp(list);
}
