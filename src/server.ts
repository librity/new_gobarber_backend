import 'dotenv/config';
import 'reflect-metadata';

import express, { json } from 'express';
import 'express-async-errors';
import uploadConfig from './config/upload';

import router from './router';
import globalApplicationErrorHandler from './app/middlewares/globalApplicationErrorHandler';
import './database';

const app = express();

app.use(json());
app.use('/files', express.static(uploadConfig.directory));
app.use(router);

app.use(globalApplicationErrorHandler);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.info(`👂 Listening on port ⚓${port}`);
});
