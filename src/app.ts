import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './routes';
import { join } from 'path';
import handlebars from 'express-handlebars';

const app = express();

app.use(express.json());
app.use(router);

app.use(express.static('views'));
app.use(express.static(join(__dirname, "/public")))

app.set('views', __dirname + '/views')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

export { app };
