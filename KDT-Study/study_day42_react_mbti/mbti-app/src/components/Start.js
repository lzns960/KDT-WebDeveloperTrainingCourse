import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import BlueButton from './BlueButton';
import { next } from '../store/modules/mbti';

export default function Start() {
  const dispatch = useDispatch();
  return (
    <>
      <Header>Dev MBTI Test</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!
      </SubHeader>
      <BlueButton text="Start" clickEvent={() => dispatch(next())} />
    </>
  );
}

const Header = styled.p`
  font-weight: bold;
  text-shadow: 2px 4px 5px #999;
  font-size: 3em;
  margin: 2em 0 1em 0;
`;
const MainImg = styled.img`
  width: inherit;
`;
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
  margin: 2em 0 2em 0;
`;
