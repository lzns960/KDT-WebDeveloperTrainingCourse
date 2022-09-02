// @ts-check

// const http = require('http');  http 모듈을 가져오는 변수

// /**
//  * @typedef post
//  * @property {number} id
//  * @property {string} title
//  * @property {string} content
//  */

// /** @type {post[]}
// const posts = [
//   {
//     id: 1,
//     title: '첫번째 블로그 글',
//     content: '첫번째 내용입니다.',
//   },
//   {
//     id: 2,
//     title: '두번째 블로그 글',
//     content: '두번째 내용입니다.',
//   },
//   {
//     id: 3,
//     title: '세번째 블로그 글',
//     content: '세번째 내용입니다.',
//   },
// ];
// */

const fs = require('fs').promises; // require메소드 중에 promisese가 달린 fs들을 다 가져와라~
// 데이터를 읽어서 변수를 반환 getPosts()
async function getPosts() {
  const jsonPosts = await fs.readFile('database.json', 'utf-8');
  return JSON.parse(jsonPosts).posts;
}
// 데이터를 쓰는 savePosts
async function savePosts(posts) {
  const content = {
    posts,
  };

  return fs.writeFile('database.json', JSON.stringify(content), 'utf-8'); // obj를 문자열로 바꿔준다. 대신 JSON의 형태이다.
}
const routes = [
  // 블로그 목록을 가져오는 API
  {
    url: '/posts',
    method: 'GET',
    id: 'undefined',
    callback: async () => {
      const posts = await getPosts();
      const length = posts.length;

      return {
        statusCode: 200,
        body: {
          posts,
          totalCount: length,
        },
      };
    },
  },

  // 특정 ID의 블로그 글을 가져오는 API
  {
    url: '/posts',
    method: 'GET',
    id: 'number',
    callback: async (postId) => {
      const posts = await getPosts();

      const id = postId;
      if (!id) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }
      const result = posts.find((post) => post.id === id);

      if (!result) {
        return {
          statusCode: 404,
          body: 'Id Not found',
        };
      }

      return {
        statusCode: 200,
        body: result,
      };
    },
  },

  // 새로운 글을 쓰는 API
  {
    url: '/posts',
    method: 'POST',
    id: 'undefined',
    callback: async (id, newPost) => {
      const posts = await getPosts();

      posts.push({
        id: posts[posts.length - 1].id + 1,
        title: newPost.title,
        content: newPost.content,
      });

      savePosts(posts);

      return {
        statusCode: 200,
        body: 'post is uploaded',
      };
    },
  },

  // 수정하는 API
  {
    url: '/posts',
    method: 'PUT',
    id: 'number',
    callback: async (id, newPost) => {
      const posts = await getPosts();

      if (!id) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }

      const result = posts.find((post) => post.id === id);

      if (!result) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }

      const modifyPost = newPost;
      modifyPost.id = id;
      posts[id - 1] = modifyPost;

      savePosts(posts);

      return {
        statusCode: 200,
        body: modifyPost,
      };
    },
  },

  // 삭제하는 API
  {
    url: '/posts',
    method: 'DELETE',
    id: 'number',
    callback: async (id) => {
      if (!id) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }

      const posts = await getPosts();
      const result = posts.find((post) => post.id === id);

      if (!result) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }

      posts.splice(id - 1, 1);

      savePosts(posts);

      return {
        statusCode: 200,
        body: 'post deleted',
      };
    },
  },
];

module.exports = {
  routes,
};
