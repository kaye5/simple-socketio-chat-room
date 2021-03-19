const { v4: uuidv4 } = require('uuid');
const mockdata = require('../data/room');

const userData = {};

exports.getUserSession = () => uuidv4();

/**
 *
 * @param {String} roomid
 * @param {String} username
 */
exports.joinRoom = (roomid, username, userSession) => {
  userData[userSession] = {
    date_join: Date.now(),
    roomid,
    username,
  };
  return {
    timestamp: Date.now(),
    message: `User ${username} joined the room`,
    userSession,
    roomid,
  };
};

/**
 * @description Delete when user leave room
 * @param {string} userSession user session
 */
exports.leaveRoom = (userSession) => {
  const User = userData[userSession];
  if (User) {
    delete userData[userSession];
    return {
      timestamp: Date.now(),
      message: `User ${User.username} left the room`,
      userSession,
      roomid: User.roomid,
    };
  }
  return false;
};

/**
 * @description Get list available room
 * @returns {Array} array of available room
 */
exports.getListRoom = () => mockdata;

exports.getRoomDetail = (roomid) => mockdata[parseInt(roomid - 1, 10)];
