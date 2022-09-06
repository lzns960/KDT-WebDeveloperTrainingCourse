// @ts-check

const express = require('express');
// express에서 제공하는 Router를 변수에 담기

const postRouter = express.Router();

const POST = [
  {
    title: 'first post!!',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident maxime ipsa molestiae perspiciatis dolore impedit ipsum alias aliquid! Ipsa molestiae perferendis tenetur vero maiores sapiente necessitatibus aperiam obcaecati repudiandae eaque!',
  },
  {
    title: '제목',
    content:
      '😁😀😀😀안녕하세요. 두 번째 글입니다. 이건 왠지 한국말로 남기고 싶어서 써봤습니다. 글이란 자고로 짧고 굵은 게 더 기억에 잘 남습니다만, 눈에 보기에는 길이가 더 긴 것이 감탄을 자아내니 살짝 길게 작성해보았습니다. 이만하면 된 것 같군요. 그럼 안녕 🖐🖐 ',
  },
  {
    title: 'emoji',
    content: 'o͡͡͡͡͡͡͡͡͡͡͡͡͡͡╮(｡❛ᴗ❛｡)╭o͡͡͡͡͡͡͡͡͡͡͡͡͡͡ ',
  },
];

postRouter.get('/', (req, res) => {
  const postLen = POST.length;
  res.render('post', { POST, postCounts: postLen });
});

postRouter.get('/:title', (req, res) => {
  const postData = POST.find((post) => post.title === req.params.title);
  if (postData) {
    res.send(postData);
  } else {
    const err = new Error('title not found');
    err.statusCode = 404;
    throw err;
  }
});

postRouter.post('/', (req, res) => {
  if (req.query.title && req.query.content) {
    const newPost = {
      title: req.query.title,
      content: req.query.content,
    };

    POST.push(newPost);
    res.send('글 등록완료!');
  } else {
    const err = new Error('Unexpected Query');
    err.statusCode = 404;
    throw err;
  }
});

postRouter.put('/:title', (req, res) => {
  if (req.query.title && req.query.content) {
    const postData = POST.find((post) => post.title === req.params.title);
    if (postData) {
      const arrIndex = POST.findIndex(
        (post) => post.title === req.params.title
      );
      const modifyPost = {
        title: req.query.title,
        content: req.query.content,
      };
      POST[arrIndex] = modifyPost;
      res.send('글내용 수정 완료');
    } else {
      const err = new Error('title not found');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('Unexpected Query');
    err.statusCode = 404;
    throw err;
  }
});

postRouter.delete('/:title', (req, res) => {
  const arrIndex = POST.findIndex((post) => post.title === req.params.title);
  if (arrIndex !== -1) {
    POST.splice(arrIndex, 1);
    res.send('글 삭제 완료');
  } else {
    const err = new Error('title not found');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = postRouter;
