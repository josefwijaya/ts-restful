import { setTimeout } from 'timers';
import { env } from './lib/env';
import { asset, conn, server } from './config/index.conf';
import { Connection, Db } from './database/conn.db';
import { ExpressApp } from './www/rest';
import User from './model/user.model';

if (env.error) console.error('ENVIRONMENT VARIABLEs could not be loaded');

async function initDb () {
  // TODO add logger component
  // TODO should use factory design pattern for new DB coz
  // it creates an instance of multiple classes
  const newCon = new Connection(conn.uri, conn.logging);
  await newCon.auth();
  await newCon.sync(conn.sync);
  return {};
}

async function initApp () {
  // TODO add logger
  const app = ExpressApp({
    port: server.port,
    publicAsset: asset.public
  });
  await app.start();
}

(async () => {
  await initDb();
  await initApp();
  console.log(User.model.toString())
  // const created = await User.model.create({ firstName: 'jo' });
  // console.log(created);

  // const list = await User.model.findAll();
  // console.log(list);
})().catch(e => {
  console.error(e);
  process.exit(0);
});
