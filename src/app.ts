// Imports

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './routes';
import { join } from 'path';
import handlebars from 'express-handlebars';
import passport from 'passport';
import bodyParser from 'body-parser';
import LocalStrategy from 'passport-local'

import passportLocalMongoose from 'passport-local-mongoose'

// Banco de dados (Import)
import mongoose from 'mongoose'
const User = require('./models/User');

// Socket io
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Banco de dados
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://superadmin:123456789Pedro@cluster0.wwtaz.mongodb.net/chat?retryWrites=true&w=majority");

app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(router);
app.use(express.static('views'));
app.use(express.static(join(__dirname, "/public")))
app.set('views', __dirname + '/views')
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get("/me", isLoggedIn, function (req, res) {
    res.render('chat', {username: req.user.username});
});

app.get("/", function (req, res) {
    res.render('login')
})

app.post("/register", function (req, res) {
    var username = req.body.username
    var password = req.body.password
    User.register(new User({ username: username }),
            password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
  
        passport.authenticate("local")(
            req, res, function () {
            res.redirect('/me');
        });
    });
});
  
app.post("/login", passport.authenticate("local", {
    successRedirect: "/me",
    failureRedirect: "/login"
}), function (req, res) {
});

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
  
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}

let messages = [];

io.on('connection', socket => {
   // console.log(`Socket conectado: ${socket.id} ${socket.request.connection.remoteAddress}`);
    
    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data)
    });
});


export { app, server };
