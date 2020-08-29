import 'dotenv/config';
import 'reflect-metadata';

import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';

import uploadConfig from './config/upload';
import router from './router';
import globalAppErrorHandler from './app/middlewares/globalAppErrorHandler';
import './database';

const app = express();

app.use(json());
app.use('/files', express.static(uploadConfig.directory));
app.use(cors());
app.use(router);

app.use(globalAppErrorHandler);

export default app;
