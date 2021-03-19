const Services = require('../services/room');

exports.getRoomList = (req, res) => {
  res.send(Services.getListRoom());
};
exports.getRoomDetail = (req, res) => {
  res.send(Services.getRoomDetail(req.params.id));
};
exports.getSession = (req, res) => {
  res.send(Services.getUserSession());
};
