import { FC } from 'react';
import styled, { css } from 'styled-components';
import { stackColor } from '../../helpers/_variables';
import { DocumentData } from 'firebase/firestore';

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 30px 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  color: #000000 !important;
  margin-bottom: 30px;
`;

const HalfWrapper = styled.div`
  width: 60%;
`;

const Title = styled.h3`
  font-size: 2rem;
  line-height: 35px;
  color: #000000;
`;

const PostDate = styled.h4`
  padding: 10px 0 20px 0;
  ${css`
    color: ${stackColor.gray};
  `}
`;

const Content = styled.h4`
  color: #000000;
`;

const Continue = styled.p`
  padding: 30px 0 5px 0;
  color: #000000;
`;

export const TopPostItem: FC<DocumentData> = ({ post }: DocumentData) => {
  const date: Date = new Date(post.date);
  return (
    <Wrapper>
      <HalfWrapper>
        <Title>{post.title}</Title>
        <PostDate>{date.toDateString()}</PostDate>
        <Content>{post.content.slice(0, 150)}...</Content>
        <Continue>Continue reading</Continue>
      </HalfWrapper>
    </Wrapper>
  );
};
