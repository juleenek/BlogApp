import styled from 'styled-components';
import { PostsList } from '../Posts/PostsList';
import { breakpointWidth } from '../../helpers/_variables';

const Container = styled.div`
  width: 1000px;

  @media (max-width: ${breakpointWidth.tablet}) {
    width: 100%;
  }
`;
const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @media (max-width: ${breakpointWidth.tablet}) {
    padding: 40px 5%;
  }
`;

export const MainContainer = () => {
  return (
    <Container>
      <PostWrapper>
        <PostsList />
      </PostWrapper>
    </Container>
  );
};
