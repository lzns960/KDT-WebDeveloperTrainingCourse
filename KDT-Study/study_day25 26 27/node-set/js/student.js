// @ts-check

// Student.js 는 [‘세호‘, ‘재석’] 데이터와 데이터를 전부 출력하는 showStudent() 메소드가 있음
// Student.js 는 ES6 방식으로 모듈을 불러서 데이터를 출력

export const students = ['세호', '재석'];
export function showStudents() {
  students.map((student) => console.log(student));
}
