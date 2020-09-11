import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import SwaggerUI from 'swagger-ui-express';

import swaggerSpec from './utils/swagger';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerSpec));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
