const Socket = require('socket.io');
const http = require('http');
const roomHandler = require('./roomHandler');

/**
 * @description Init socket
 * @param {http.Server} server
 */
const initSocket = (server = new http.Server()) => {
  const io = new Socket.Server(server, {
    cors: {
      origin: '*',
    },
  });
  roomHandler(io);

  io.listen(server);
};

module.exports = initSocket;
