import styled from 'styled-components';
import { Header } from './Header';
import { PostsList } from './Posts/PostsList';

const Wrapper = styled.div`
  width: 100%;
`;
const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <PostWrapper>
        <PostsList />
      </PostWrapper>
    </Wrapper>
  );
};
