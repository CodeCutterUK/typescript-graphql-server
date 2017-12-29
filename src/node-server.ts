import { configuration } from './configuration';

import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import * as winston from 'winston';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

import { attachGraphQlServer } from './graphql-api';

runNodeServer();

function runNodeServer() {
  /**
   * Heroku-friendly production http server.
   *
   * Serves your app and allows you to proxy APIs if needed.
   */
  const app = express();
  if (configuration.networking.responseDebuglogging) { app.use(morgan(configuration.networking.responseDebuglogging)); }

  // Enable various security helpers.
  app.use(helmet());
  configurationAuthentication(app);

  attachGraphQlServer(app);

  // Start up the server.
  app.listen(configuration.networking.port, (err: string): void => {
    if (err) {
      winston.error(err);
      return;
    }

    winston.info(`Listening on port ${configuration.networking.port}`);
  });
}

function configurationAuthentication(app: express.Express) {
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (configuration.apiAccessToken &&
        req.headers.authorization !== configuration.apiAccessToken &&
        req.query.access_token !== configuration.apiAccessToken) {
      res.status(403);
      res.send('Access denied');
    }
    next();
  });
}
