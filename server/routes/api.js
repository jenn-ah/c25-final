const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '675409',
  key: '3397df7b343c3c05e778',
  secret: 'eb79092904c3c776abc5',
});

let messages = [];

router.get('/messages', (req, res) => {
  console.log('request', req)
  res.send('all good');
});

router.post('/pusher/auth', (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

module.exports = router;
