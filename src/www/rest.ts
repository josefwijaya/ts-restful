import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';

import { default as user } from '../modules/user/user.route';

class Express {
  private ASSET_AGE = 31557600000;
  private app:any;

  constructor(port:number, asset:string) {
    this.app = express();
    this.app.set('port', port);
    // this.app.set('views', path.join(__dirname, '../views'));
    // this.app.set('view engine', 'pug');
    this.app.use(compression());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // this.app.use(passport.initialize());

    if (asset) {
      const assetPath = path.join(process.cwd(), asset);
      this.app.use('/public', express.static(assetPath, { maxAge: this.ASSET_AGE }));
    }

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

  mountRoute ():void {
    user(this.app);
  }
}

// export const ExpressApp = (config:IConfig) => {
//   return new Express(config);
// };

interface IConfig {
  port: number;
  publicAsset: string;
}

export
const ExpressApp = function ({ port, publicAsset }:IConfig) {
  const app = new Express(port, publicAsset);
  return app;
}
