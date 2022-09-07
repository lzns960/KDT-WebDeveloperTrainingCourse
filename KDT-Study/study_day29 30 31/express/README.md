### 과제 - users.js 처럼 글을 올리는 posts.js 서비스를 만들기
* posts.js 의 데이터: title, content 를 가지는 배열
* posts.js 서비스 내용
  1. 글 전체 목록 조회 GET localhost:4000/posts 
  2. 특정 title 을 가진 글 조회 GET localhost:4000/posts/:title
  3. 새로운 글 작성 POST localhost:4000/posts?title=title&content=content
  4. 특정 title 을 가진 글 수정 PUT localhost:4000/posts/:title?title=title&content=content
  5. 특정 title 을 가진 글 삭제 DELETE localhost:4000/posts/:title
* 글 전체 목록은 조회는 ejs 를 사용하여 글의 제목과 내용을 출력하는 페이지 만들기
* 모든 기능은 routes/posts.js 에서 작성
* app.js 에서는 모듈 방식으로 posts.js 를 라우팅하여 사용

#### POSTs
![image](https://user-images.githubusercontent.com/78632299/188632032-fc89ff5a-64f5-44ed-80ab-e28c8d4f7436.png)
#### USERs
![image](https://user-images.githubusercontent.com/78632299/188631935-8ad24d44-d634-4ddd-bf31-4cd4924f594b.png)
