import styled from 'styled-components';
import { Header } from './Header';
import { MainContainer } from './MainPage/MainContainer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  line-height: 23px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <MainContainer />
    </Wrapper>
  );
};
