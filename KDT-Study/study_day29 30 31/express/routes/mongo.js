// @ts-check

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;

// async function main() {
//   await client.connect();

//   const users = client.db('kdt1').collection('users');

//   await users.deleteMany({}); // 중괄호 안은 조건= 조건이 없으니 다 지우라는 뜻
//   /*
//   await users.insertOne({
//     name: 'pororo',
//     age: 5,
//   });
//  */
//   await users.insertMany([
//     // 데이터 추가
//     {
//       name: 'pororo',
//       age: 5,
//     },
//     {
//       name: 'loopy',
//       age: 6,
//     },
//     {
//       name: 'crong',
//       age: 4,
//     },
//   ]);

//   await users.updateMany(
//     {
//       age: { $gte: 5 },
//     },
//     {
//       $set: {
//         // 키 값이 겹쳐지면 수정되고 안 겹치면 추가된다.
//         old: 'yes',
//       },
//     }
//   );

//   const arr2 = await users.findOne({
//     name: 'loopy',
//   });

//   const data = users.find({}); // find에 {} 중괄호가 비어있으면 조건 없이 DB에 선언된 것들을 다 찾는다.

//   // find는 await를 사용하지 않는다. 다만, 찾은 것을 toArray나 forEach를 통해 데이터화를 할 때 await를 넣어 확인가능하게 만든다.
//   const arr1 = await data.toArray();
//   console.log(arr2);

//   /* await data.forEach(console.log); // mongoDB에 있는 forEach 함수 */

//   await client.close();
// }

// main();
