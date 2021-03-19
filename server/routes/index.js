const Router = require('express').Router();
const Controller = require('../controllers/room');

Router.get('/rooms', Controller.getRoomList);
Router.get('/rooms/:id', Controller.getRoomDetail);
Router.get('/session', Controller.getSession);

module.exports = Router;
