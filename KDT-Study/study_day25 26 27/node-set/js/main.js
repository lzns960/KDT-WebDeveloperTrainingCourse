// @ts-check

const http = require('http'); // http 모듈을 가져오는 변수

/**
 * @typedef post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {post[]} */
const posts = [
  {
    id: 1,
    title: '첫번째 블로그 글',
    content: '첫번째 내용입니다.',
  },
  {
    id: 2,
    title: '두번째 블로그 글',
    content: '두번째 내용입니다.',
  },
  {
    id: 3,
    title: '세번째 블로그 글',
    content: '세번째 내용입니다.',
  },
];
const server = http.createServer((req, res) => { // 서버를 정의하는 것
  console.log('REQ URL', req.url);

  const urlArr = req.url ? req.url.split('/') : []; // '삼항연산자'req.url이 값이 있을 때면 req.url을 /순으로 문자를 나눠주고, req.url존재하지 않으면 빈 배열로 한다.

  let id = -1; // 아이디의 초기 값이 -1인 것은 api 요청 상으로 안들어왔다는 의미 = 예외처리하기 위함

  if (urlArr.length > 2) {
    id = parseInt(urlArr[2], 10);
    // [, , id] = urlArr; 구조분해할당 id = urlArr[2];//id는 urlArr의 3번째 값이다.
  }

  /** 블로그용 서버 API 구성
   * GET /posts          목록 가져오기
   * GET /posts/:id      특정 글 내용 가져오기
   * POST /posts         새로운 글 올리기
   * PUT /posts/:id      기존 글 수정하기
   * DELETE /posts/:id   기존 글 삭제하기
   */

  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    };

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify(result)); // json 형태로 바꾸는 법
    console.log('블로그의 글 목록을 가져오는 API입니다.');
  } else if (id !== -1 && req.method === 'GET') {
    const result = posts.find((post) => post.id === id);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (result) {
      console.log('블로그의 특정 id를 가지는 글의 내용을 보여주는 API입니다.');
      res.statusCode = 200;
      res.end(JSON.stringify(result));
    } else {
      console.log('해당 id를 가지는 포스트를 찾을 수 없었습니다.');
      res.statusCode = 404;
      res.end('해당 id를 가지는 포스트를 찾을 수 없었습니다.');
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newPost = JSON.parse(data); // JSON.parse를 써서 obj를 newPost에 넣어준다
      posts.push({ // 중괄호는 obj push를 뜻한다.
        id: posts[posts.length - 1].id + 1, // 아이디가 겹치지 않도록
        title: newPost.title,
        content: newPost.content,
      });
    });

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end('새로운 글이 등록되었습니다.');

    console.log('블로그에 새로운 글을 올리는 API입니다.'); // 서버에 남기는 것
  } else if (id !== -1 && req.method === 'PUT') {
    req.setEncoding('utf-8');
    req.on('data', (data) => { // 데이터가 들어올 때(데이터를 매개변수로 활용
      const modifyPost = JSON.parse(data); // data에 JSON.parse를 써서 JS에서 사용가능한 obj로 변경
      modifyPost.id = id;
      posts[id - 1] = modifyPost; // id의 num이 1부터 시작했으니 id-1로 인덱스를 일치시키기
    });
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(`수정된 글의 id 번호는 ${id} 입니다. `);

    console.log('블로그의 특정 글을 수정하는 API입니다');
  } else if (id !== -1 && req.method === 'DELETE') {
    posts.splice(id - 1, 1); // splice(인덱스 값을 넣어주고, 데이터를 한개만 지우면 된다.)

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(`id번호가 ${id}인 포스트를 삭제하였습니다.`);
    console.log('블로그의 특정 글을 삭제하는 API입니다');
  } else { // 설정한 API외의 주소로 들어갔을 때 전체적인 예외처리 적용
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 404; // 해당 API를 찾지 못했을 경우 사용자=클라이언트 에러
    res.end('Not Found'); // 브라우저에 내보내는 정보
    console.log('해당 API를 찾을 수 없습니다.');
  }
});

const PORT = 4000;

server.listen(PORT, () => { // 서버를 실행시켜주는 코드
  console.log(`해당 서버는 ${PORT}에서 작동 중입니다.`);
});
