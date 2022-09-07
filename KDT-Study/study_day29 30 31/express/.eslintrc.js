module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'linebreak-style': 0, // 윈도우는 꼭 설정 LF, CRLF 문제 해결위함
    'no-console': 'off',
    'prefer-destructuring': 'off', // 구조분해할당 문법 off
    'no-plusplus': 'off',
  },
};
