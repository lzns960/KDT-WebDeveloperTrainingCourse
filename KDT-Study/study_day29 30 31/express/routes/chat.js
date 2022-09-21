const express = require('express');
const router = express.Router();
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 7777 }); // 포트는 프론트의 script와 같아야 한다.

wss.on('connection', (ws) => {
  // 클라이언트 접속을 하면 실행된다.
  // clients는 배열(몇명이 접속하는지 안다.)
  wss.clients.forEach((client) => {
    client.send(`새로운 유저가 접속했습니다. 현재 유저 ${wss.clients.size}`);
  });

  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      client.send(`${message}`);
    });
  });

  ws.on('close', () => {
    wss.clients.forEach((client) => {
      client.send(`유저한명이 나갔습니다. 현재 유저수 ${wss.clients.size}`);
    });
  });
  /*
  ws.send('저는 서버입니다. 들리십니까?');
  ws.on('message', (message) => {
    console.log(message.toString());
  });
  */
});

router.get('/', (req, res) => {
  res.render('chat');
});

module.exports = router;
