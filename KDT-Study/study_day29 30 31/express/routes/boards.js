// @ts-check

const express = require('express');
// express에서 제공하는 Router를 변수에 담기

const boardRouter = express.Router();

const BOARD = [
  {
    title: 'first board!!',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident maxime ipsa molestiae perspiciatis dolore impedit ipsum alias aliquid! Ipsa molestiae perferendis tenetur vero maiores sapiente necessitatibus aperiam obcaecati repudiandae eaque!',
  },
  {
    title: 'emoji',
    content: 'o͡͡͡͡͡͡͡͡͡͡͡͡͡͡╮(｡❛ᴗ❛｡)╭o͡͡͡͡͡͡͡͡͡͡͡͡͡͡ ',
  },
];

boardRouter.get('/', (req, res) => {
  const boardLen = BOARD.length;
  res.render('board', { BOARD, boardCounts: boardLen });
});

boardRouter.get('/write', (req, res) => {
  res.render('write', { BOARD });
});

boardRouter.get('/modify/:title', (req, res) => {
  const boardLen = BOARD.length;
  res.render('modify', { BOARD, boardCounts: boardLen });
});

boardRouter.get('/:title', (req, res) => {
  const boardData = BOARD.find((board) => board.title === req.params.title);
  if (boardData) {
    res.send(boardData);
  } else {
    const err = new Error('title not found');
    err.statusCode = 404;
    throw err;
  }
});

boardRouter.post('/', (req, res) => {
  if (Object.keys(req.query).length >= 1) {
    if (req.query.title && req.query.content) {
      const newBoard = {
        title: req.query.title,
        content: req.query.content,
      };

      BOARD.push(newBoard);
      res.redirect('/boards');
    } else {
      const err = new Error('Unexpected Query');
      err.statusCode = 404;
      throw err;
    }
  } else if (req.body) {
    if (req.body.title && req.body.content) {
      const newBoard = {
        title: req.body.title,
        content: req.body.content,
      };

      BOARD.push(newBoard);
      res.redirect('/boards');
    } else {
      const err = new Error('Unexpected Form data');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('No data');
    err.statusCode = 404;
    throw err;
  }
});

boardRouter.put('/modify/:title', (req, res) => {
  if (Object.keys(req.query).length >= 1) {
    if (req.query.title && req.query.content) {
      const boardData = BOARD.find((board) => board.title === req.params.title);
      if (boardData) {
        const arrIndex = BOARD.findIndex(
          (board) => board.title === req.params.title
        );
        const modifyBoard = {
          title: req.query.title,
          content: req.query.content,
        };
        BOARD[arrIndex] = modifyBoard;
        res.redirect('/boards');
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
  } else if (req.body) {
    if (req.query.title && req.query.content) {
      const boardData = BOARD.find((board) => board.title === req.params.title);
      if (boardData) {
        const arrIndex = BOARD.findIndex(
          (board) => board.title === req.params.title
        );
        const modifyBoard = {
          title: req.query.title,
          content: req.query.content,
        };
        BOARD[arrIndex] = modifyBoard;
        res.redirect('/boards');
      } else {
        const err = new Error('title not found');
        err.statusCode = 404;
        throw err;
      }
    } else {
      const err = new Error('Unexpected Form data');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('No data');
    err.statusCode = 404;
    throw err;
  }
});

boardRouter.delete('/:title', (req, res) => {
  const arrIndex = BOARD.findIndex((board) => board.title === req.params.title);
  if (arrIndex !== -1) {
    BOARD.splice(arrIndex, 1);
    res.send('게시판 글 삭제 완료');
  } else {
    const err = new Error('title not found');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = boardRouter;
