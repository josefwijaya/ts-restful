import { env } from './lib/env';
import { asset, conn, server } from './config/index.conf';
import { Connection, Db } from './database/conn.db';
import { ExpressApp } from './www/rest';

if (env.error) console.error('ENVIRONMENT VARIABLEs could not be loaded');

async function initDb () {
  // TODO add logger component
  // TODO should use factory design pattern for new DB coz
  // it creates an instance of multiple classes
  const newCon = new Connection(conn.uri, conn.logging);
  await newCon.auth();
  await newCon.sync({});
  return {};
}

async function initApp () {
  // TODO add logger
  const app = ExpressApp(server.port);
  app.setStaticRoute(asset.public.img.route, asset.public.img.dir);
  app.mountRoute();

  await app.start();
}

(async () => {
  await initDb();
  await initApp();
})().catch(e => {
  throw e;
});
