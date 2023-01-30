import styled from 'styled-components';
import { Header } from './Header';

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 1024px;
  margin: 0 auto;
`;


export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Content></Content>
    </Wrapper>
  );
};