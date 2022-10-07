// todo list 초기값 설정

const initState = {
  list: [ 
    {
      id: 0, 
      text: 'sqld 자격증',
      done: false,
    },
    {
      id: 1,
      text: '법과무역의이해 중간고사',
      done: false,
    },
    {
      id:2,
      text: 'SSAFY',
      done: false,
    },
  ]
}

let counts = initState.list.length;
initState['nextID'] = counts;
// 액션 타입정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todoe/DONE';

// 액션 함수 생성
export function create(payload) {
  return{
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return{
    type:DONE,
    id,
  };
}

// 리듀서 선언하기 
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id:action.payload.id,
          text:action.payload.text,
          done:false,
        }),
        nextID: action.payload.id +1, // 추가된 것이 아니라 다음 애를 위한 것
      };
    case DONE:
      return {
        ...state, 
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {// 리턴값이 그 위치의 배열에 들어간다.
              ...el, // id와 text 값은 그대로 넘어감
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default: 
      return  state;
  }
}