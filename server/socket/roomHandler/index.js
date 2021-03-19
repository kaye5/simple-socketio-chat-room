const { Server } = require('socket.io');
const Services = require('../../services/room');
/**
 * @description Socket connection handler for room chat
 * @param {Server} io socket Server event listener
 */
const handler = (io = Server) => {
  /**
   * @description Socket listen when user join the room
   * @param {*} socket
   * @param {*} param1
   */
  const joinRoom = (socket, { roomid, username, userSession }) => {
    const result = Services.joinRoom(roomid, username, userSession);
    socket.join(`room:${roomid}`);
    socket.to(`room:${roomid}`).emit(`room:broadcast`, { ...result, type: 'broadcast' });
  };
  /**
   * @description Socket listen when user left the room
   * @param {*} socket
   * @param {*} param1
   */
  const leaveRoom = (socket, { roomid, userSession }) => {
    socket.on('room:disconnect', () => {
      const result = Services.leaveRoom(userSession);
      if (result)
        socket.to(`room:${roomid}`).emit(`room:broadcast`, { ...result, type: 'broadcast' });
    });
  };
  /**
   * @description Socket listen when someone send a message
   * @param {*} socket
   * @param {*} param1
   */
  const sendMessage = (socket, { roomid, userSession, username }) => {
    socket.on('room:sendMessage', (data) => {
      io.of('/rooms').to(`room:${roomid}`).emit('room:recieveMessage', {
        timestamp: Date.now(),
        message: data.message,
        senderid: userSession,
        sender: username,
        type: 'message',
      });
    });
  };
  io.of('/rooms').on('connection', (socket) => {
    const { query } = socket.handshake;
    // socket.handshake.query
    joinRoom(socket, query);
    sendMessage(socket, query);
    leaveRoom(socket, query);
  });
};

module.exports = handler;
