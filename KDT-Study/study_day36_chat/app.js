// @ts-check
const Koa = require('koa'); // koa가 클래스이기때문에 대문자
const websockify = require('koa-websocket');
const route = require('koa-route');
/* koa-특정 주소에 대한 static 폴더 설정 */
const serve = require('koa-static');
const mount = require('koa-mount');

const Pug = require('koa-pug');
const path = require('path'); // 내장 모듈 path: 경로 지정시 편하게 해주는 모듈

const mongoClient = require('./public/mongo');
const _client = mongoClient.connect(); // promise를 가지고 있어서 사용할 때마다 await만 사용하면 된다.

const app = websockify(new Koa()); // 웹소켓+ 서버 동시가능
const PORT = 4500;

app.use(mount('/public', serve('public')));

const pug = new Pug({
  viewPath: path.resolve(__dirname, './views'), // views파일의 위치를 path모듈을 이용해서 찾아가게 하는 것
  app,
});

app.ws.use(
  route.all('/chat', async (ctx) => {
    const { server } = app.ws;

    const client = await _client;
    const cursor = client.db('kdt1').collection('chats');
    const chats = cursor.find(
      {},
      {
        sort: {
          createdAt: 1,
        },
      }
    ); // 전체를 찾을 때는 await가 필요없지만, 데이터화를 시킬 때는 시간이 걸려서 await가 필요하다.
    const chatsData = await chats.toArray();

    ctx.websocket.send(
      JSON.stringify({
        type: 'sync', // type을 sync로 전달하여 이전 채팅 내역임을 알리기
        data: {
          chatsData,
        },
      })
    );

    server.clients.forEach((client) => {
      client.send(
        JSON.stringify({
          type: 'chat',
          data: {
            name: '서버',
            msg: `새로운 유저가 참여 했습니다. 현재 유저수 ${server?.clients.size}`,
            bg: 'bg-danger',
            text: 'text-white',
          },
        })
      );
    });

    // ctx.websocket.send('아아~ 들리십니까? 이곳은 서버입니다.');
    ctx.websocket.on('message', async (message) => {
      const chat = JSON.parse(message);

      const insertClient = await _client;
      const chatCursor = insertClient.db('kdt1').collection('chats');
      await chatCursor.insertOne({
        ...chat,
        createdAt: new Date(),
      });

      server?.clients.forEach((client) => {
        // 사용자로부터 입력 받은 채팅 type:'chat'
        client.send(
          JSON.stringify({
            type: 'chat',
            data: {
              ...chat,
            },
          })
        );
      });
      // 클라이언트에서 message 가 오면 message 를 받아서 서버에 출력
      // console.log(message.toString());  버퍼라는 인간이 알아들을 수 없는 걸로 들어오기 때문에 toString으로 변환
    });

    ctx.websocket.on('close', () => {
      server.clients.forEach((client) => {
        client.send(
          JSON.stringify({
            type: 'chat',
            data: {
              name: '서버',
              msg: `유저 한명이 나갔습니다. 현재 유저수 ${server?.clients.size}`,
              bg: 'bg-dark',
              text: 'text-white',
            },
          })
        );
      });
    });
  })
);

app.use(async (ctx, next) => {
  await ctx.render('chat');
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}에서 작동 중입니다.`);
});
