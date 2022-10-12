/* 초기 상태 설정 */
const initState = {
  mbtiResult: '',
  page: 0, // 0: 인트로 페이지, 1 ~ n: 선택 페이지, n+1: 결과 페이지
  /* 질문 목록 */
  survey: [
    {
      question:
        '퇴근 직전에 동료로부터 개발자 모임에 초대를 받은 나!\n\n퇴근 시간에 나는?',
      answer: [
        {
          text: '그런 모입을 왜 이제서야 알려 준거야! \n당장 모임으로 출발한다',
          result: 'E',
        },
        {
          text: '1년 전에 알려줬어도 안갔을 건데 뭔...\n더 빠르게 집으로 간다',
          result: 'I',
        },
      ],
    },
    {
      question:
        '새로운 서비스 개발 중에, 동료가 새로 나온 신기술을 쓰는게 더 편할거라고 추천을 해준다!\n\n나의 선택은!?',
      answer: [
        {
          text: '뭔소리여, 그냥 하던 대로 개발하면 되는거지! 기존 생각대로 개발한다',
          result: 'S',
        },
        {
          text: '오호? 그런게 있어? 일단 구글을 찾아본다',
          result: 'N',
        },
      ],
    },
    {
      question:
        '서비스 출시 이틀 전 야근 시간, 갑자기 동료가 어!? 를 외쳤다!\n\n나의 선택은?',
      answer: [
        {
          text: '무슨 버그가 발생한 거지? 아마 DB 관련 버그가 아닐까? \n빠르게 동료의 자리로 달려간다',
          result: 'T',
        },
        {
          text: '아... 내일도 야근 각이구나 ㅠㅠ! \n일단 동료의 자리로 가 본다',
          result: 'F',
        },
      ],
    },
    {
      question:
        '팀장님이 xx씨 그전에 말한 기능 내일 오후까지 완료 부탁해요라고 말했다!\n\n나의 선택은?',
      answer: [
        {
          text: '일단 빠르게 개발 완료하고, \n나머지 시간에 논다',
          result: 'J',
        },
        {
          text: '내일 아침에 와서 개발해도 충분 하겠는데? \n일단 논다',
          result: 'P',
        },
      ],
    },
  ],
  /* 결과에 대한 설명 */
  explaination: {
    ESTJ: {
      text: '무리한 개발 일정만 아니라면 일정을 철저하게 지킬 당신의 MBTI 는!',
      img: '/images/estj.png',
      emoji: '🔪 + ☕ + 📃',
      subText: '칼 같은 성격, 라떼는 말이야, 철저한 계획 주의자',
    },
    ISTJ: {
      text: '스스로 하고싶은 분야를 끝까지 파고 들어서 끝내 성공 시킬 당신의 MBTI 는!',
      img: '/images/istj.png',
      emoji: '✍ + 🤖 + 🧍',
      subText: '계획대로 행동하고 아부를 못하고 혼자가 편함',
    },
    ENTJ: {
      text: '미래의 능력 쩌는 개발 팀장님으로 개발팀을 이끌 당신의 MBTI 는!',
      img: '/images/entj.png',
      emoji: '👩‍🏫 + 🏃‍♂ + 📴',
      subText: '이끌어내고 진두지휘하지만 남한테 관심 NOPE',
    },
    INTJ: {
      text: '혼자서 모든 것을 다 해내는 원맨 캐리의 표본! 당신의 MBTI 는!',
      img: '/images/intj.png',
      emoji: '🎯 + 🔍 + 🎢',
      subText: '하나 꽂히면 그것만 파고 텐션이 왔다갔다 함',
    },
    ESFJ: {
      text: '개발팀의 분위기 메이커이자 아이디어 뱅크가 될 당신의 MBTI 는!',
      img: '/images/esfj.webp',
      emoji: '👑 + 📑 + 👼',
      subText: '감투쓰기, 계획 세우기, 남 도와주기를 좋아함',
    },
    ISFJ: {
      text: '개발팀의 마더 테레사, 고민 상담소 역할을 자처하는 당신의 MBTI 는!',
      img: '/images/isfj.png',
      emoji: '👨‍👩‍👧‍👦 + 💕 + 🎭',
      subText: '사람을 좋아하고 배려하고 속마음을 티를 안 냄',
    },
    ENFJ: {
      text: '당신이 있는 팀은 언제나 올바른 곳을 향하고 있습니다! 팀원은 물론 팀의 방향을 챙기는 당신의 MBTI 는!',
      img: '/images/enfj.png',
      emoji: '✨ + 💸 + 💞',
      subText: '정의롭고 평화로움을 중시하며 다 퍼주는st',
    },
    INFJ: {
      text: '예리한 통찰력으로 모든 것을 내다보면서 완벽하게 개발을 할 당신의 MBTI 는!',
      img: '/images/infj.png',
      emoji: '🤝 + 🌷 + 🔭',
      subText: '감수성, 공감 능력이 풍부하면 탐색하는 걸 좋아함',
    },
    ESTP: {
      text: '쿨하게 자신이 할 것을 하면서 논리적인 개발을 할 당신의 MBTI 는!',
      img: '/images/estp.png',
      emoji: '😈 + 🔥 + 🎤',
      subText: '화끈하고 뒤끝 없고 말은 잘하는데 말투가 셈',
    },
    ISTP: {
      text: '단시간에도 효율적으로 개발하여 모든 것을 완성할 당신의 MBTI 는!',
      img: '/images/istp.png',
      emoji: '🤷 + 👌 + 🔫',
      subText: '어쩌라고 마인드, 간결한 게 최고, 선 넘으면 죽임',
    },
    ENTP: {
      text: '스스로 흥미만 생긴다면 당장에 페이스북도 만들어 버릴 당신의 MBTI 는!',
      img: '/images/entp.png',
      emoji: '🤴 + 📢 + 🃏',
      subText: '내가 제일 잘나가고 큰 목소리에 장난을 좋아함',
    },
    INTP: {
      text: '확실한 주관과 뛰어난 지능을 바탕으로 논리적 개발을 할 당신의 MBTI 는!',
      img: '/images/intp.png',
      emoji: '📚 + 🔬 + 🎊',
      subText: '귀찮지만 책을 좋아하며 관심분야에서만 발언 터짐',
    },
    ESFP: {
      text: '개발팀의 에너자이저! 개발팀 특유의 서먹함을 깨는 당신! 당신의 MBTI 는!',
      img: '/images/esfp.png',
      emoji: '🎉 + 🍾 + 💃',
      subText: '하고 싶은 건 다 해야 하며 언제나 파티 마인드',
    },
    ISFP: {
      text: '뛰어난 호기심과 예술적 감각으로 개발팀의 부족함을 채워갈 당신! 당신의 MBTI 는!',
      img: '/images/isfp.png',
      emoji: '🏠 + 🧸 + 👍',
      subText: '집 최고, 노는 거 최고, 집에서 노는 건 더 최고',
    },
    ENFP: {
      text: '자유로운 영혼으로 개발팀의 윤활유 및 활력소가 되어줄 당신의 MBTI 는!',
      img: '/images/enfp.png',
      emoji: '💩 + 🌈 + 🎈',
      subText: '이 이모지를 합쳐서 인간화하면 ENFP가 됨',
    },
    INFP: {
      text: '개발팀의 그 어떤 트러블도 당신 앞에서는 사르르 녹을뿐, 팀의 근간을 다져주는 당신의 MBTI 는!',
      img: '/images/infp.webp',
      emoji: '💖 + 🎠 + 🖤',
      subText: '동화같이 아기자기한 마음 하지만 깊은 곳엔 우울함',
    },
  },
};

/* 액션 type 설정 */
const NEXT = 'mbti/NEXT';
const CHECK = 'mbti/CHECK';
const RESET = 'mbti/RESET';

/* 액션 생성 함수 */
// payload -> 선택에 다른 결과 값 result 전달 필요

export function next() {
  return {
    type: NEXT,
  };
}

export function check(result) {
  return {
    type: CHECK,
    payload: { result },
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

/* Reducer */
export default function mbti(state = initState, action) {
  switch (action.type) {
    case CHECK:
      return {
        ...state,
        mbtiResult: state.mbtiResult + action.payload.result,
      };
    case NEXT:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        page: 0,
        mbtiResult: '',
      };
    default:
      return state;
  }
}
