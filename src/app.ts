import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './routes';
import { join } from 'path';
import handlebars from 'express-handlebars';

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());
app.use(router);

app.use(express.static('views'));
app.use(express.static(join(__dirname, "/public")))
app.set('views', __dirname + '/views')
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

let messages = [];

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id} ${socket.request.connection.remoteAddress}`);
    
    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data)
    });
});


export { app, server };
