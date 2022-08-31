// @ts-check

// 이 함수는 문자열 형태의 이름과 숫자 형태의 나이를 받아서
// 문자열로 출력해 주는 함수입니다.

/** 
 * @param {string} name
 * @param {number} age
 * @returns 얘는 이름과 나이를 받아서 문자열로 출력합니다.
 * @todo 내일 새로운 매개변수 추가 해야한다. due to 10:30
 * @deprecated 이제 안씁니다.
 */
function hello(name, age) {
    return `내 이름은 ${name}이고 나이는 ${age}입니다.`;
}
/** @type {string} */
const test = 'tetz';

console.log(hello('tetz', 38));

/** 
 * @typedef post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/**
 * @type {post}
 */
const post = {
	id: 1,
	title: '제목',
	content: '내용',
}