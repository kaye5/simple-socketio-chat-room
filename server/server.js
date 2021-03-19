const express = require('express');
const { Server } = require('http');
const cors = require('cors');
const config = require('./config');
const socket = require('./socket');

const app = express();
const http = new Server(app);

socket(http);
app.use(cors());
app.use(express.json());
app.use(require('morgan')('common'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use('/api', require('./routes'));

http.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`SERVER RUNNING ON PORT : ${config.port}`);
});
