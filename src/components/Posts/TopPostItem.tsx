import { FC } from 'react';
import styled, { css } from 'styled-components';
import { stackColor } from '../../helpers/styles/colors';
import { DocumentData } from 'firebase/firestore';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  color: #000000 !important;
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 2rem;
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
      <Title>{post.title}</Title>
      <PostDate>{date.toDateString()}</PostDate>
      <Content>{post.content}</Content>
      <Continue>Continue reading...</Continue>
    </Wrapper>
  );
};
