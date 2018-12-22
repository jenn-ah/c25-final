
const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const IAM_APPID = process.env.appId;
const IAM_KEY = process.env.key;
const IAM_SECRET = process.env.secret;

const pusher = new Pusher({
  appId: IAM_APPID,
  key: IAM_KEY,
  secret: IAM_SECRET,
});


router.post('/pusher/auth', (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);

  return res.send(auth);
});

module.exports = router;
