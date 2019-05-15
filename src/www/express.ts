import _ from 'lodash';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import * as route from './route';

class Express {
  private ASSET_AGE = 31557600000;
  private app:any;

  constructor(port:number) {
    this.app = express();
    this.app.set('port', port);
    // this.app.set('views', path.join(__dirname, '../views'));
    // this.app.set('view engine', 'pug');
    this.app.use(compression());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // this.app.use(passport.initialize());

    this.app.get('/', function (req:any, res:any) { res.send('ok'); });
  }

  start () {
    return new Promise((resolve) => {
      const port = this.app.get('port');
      this.app.listen(port, () => {
        const port = this.app.get('port');
        const env = this.app.get('env');
        console.log('App is running at Port: %d in %s mode', port, env);
        resolve();
      });
    });
  }

  stop ():void {
    this.app.close(); // stop listening, but still running
  }

  setStaticRoute(route:string, dir:string, assetAge = this.ASSET_AGE) {
    const assetPath = path.join(process.cwd(), dir);
    this.app.use(route, express.static(assetPath, { maxAge: assetAge }));
  }

  mountRoute ():void {
    _.forEach(route, e => {
      e.default(this.app);
    });
  }

  mountNotFoundRoute ():void {
    this.app.use('*', (_:any, res:any) => {
      res.send('Not found');
    });
  }
}

// export const ExpressApp = (config:IConfig) => {
//   return new Express(config);
// };

export const ExpressApp = function (port:number) {
  const app = new Express(port);
  return app;
};
