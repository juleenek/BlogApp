import { FC } from 'react';
import { stackColor } from '../../helpers/styles/colors';
import styled, { css } from 'styled-components';
import { DocumentData } from 'firebase/firestore';

const Wrapper = styled.div`
  width: 45%;
  padding: 20px;
  box-shadow: rgba(60, 64, 67, 0.2) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.01) 0px 0px 6px 2px;
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  color: #000000;
`;

const PostDate = styled.h4`
  padding: 10px 0 15px 0;
  font-size: 0.8rem;
  ${css`
    color: ${stackColor.gray};
  `}
`;

const Content = styled.h4`
  color: #000000;
`;

const Continue = styled.p`
  color: #000000;
`;

export const PostItem: FC<DocumentData> = ({ post }: DocumentData) => {
  const date: Date = new Date(post.date);
  console.log(Date.now());

  return (
    <Wrapper>
      <Title>{post.title}</Title>
      <PostDate>{date.toDateString()}</PostDate>
      <Content>{post.content}</Content>
      <Continue>Continue reading...</Continue>
    </Wrapper>
  );
};
